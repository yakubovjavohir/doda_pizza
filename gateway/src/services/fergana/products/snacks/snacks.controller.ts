import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { SnacksService } from './snacks.service';
import { CreateSnackDto } from './dto/create-snack.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { promises as fs } from 'fs';
import { extname, join } from 'path';

const uploadPath = join(process.cwd(), 'uploads', 'snacks');

@Controller('snacks')
export class SnacksController {
  imageUrl: string[] = [];

  constructor(private readonly snacksService: SnacksService) {}
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
    this.imageUrl.push(`http://localhost:3000/uploads/snacks/${file.filename}`)    
    return { url: `http://localhost:3000/uploads/snacks/${file.filename}` };
  }
  @Post()
  create(@Body() dto: CreateSnackDto) {
    const changeData = {
      name:dto.name,
      description:dto.description,
      fixedprice:dto.fixed__price,
      disavailabletoppings: dto.dis_available_toppings?.map(String) || [],
      vegetarian:dto.vegetarian || false,
      pepper:dto.pepper || false,
      price:dto.price,
      imageUrl:dto.imageUrl
    }
    return this.snacksService.create(changeData);
  }

  @Get()
  findAll() {
    return this.snacksService.findAll();
  }
}
