import { Controller, Post, Body, UploadedFile, UseInterceptors, Get, Param } from '@nestjs/common';
import { ToppingsService } from './toppings.service';
import { CreateToppingDto } from './dto/create-topping.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'node:path';
import { diskStorage } from 'multer';
import { join } from 'node:path';
import { promises as fs } from 'fs';
import { ID } from 'src/common/TYPES';

const uploadPath = join(process.cwd(), 'uploads', 'toppings');
@Controller('toppings')
export class ToppingsController {
  imageUrl = ''
  constructor(private readonly toppingsService: ToppingsService) {}

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: async (req, file, callback) => {
          try {
            await fs.mkdir(uploadPath, { recursive: true });
            callback(null, uploadPath);
          } catch (error) {
            console.error('Papka yaratishda xatolik:', error);
            callback(error, '');
          }
        },
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${uniqueSuffix}${ext}`);
        },
      }),
    })
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return { message: 'Fayl yuklanmadi!' };
    }
    this.imageUrl = `http://localhost:3000/uploads/toppings/${file.filename}`
    return { url: this.imageUrl };
  }
  

  @Post()
  create(@Body() dto: CreateToppingDto) {
    // dto.imageUrl = this.imageUrl
    return this.toppingsService.create(dto);
  }

  @Get()
  findAll() {
    return this.toppingsService.findAll();
  }

  @Get(":id")
  findOne(@Param('id') id:ID){
    return this.toppingsService.findOne(id)
  }
}
