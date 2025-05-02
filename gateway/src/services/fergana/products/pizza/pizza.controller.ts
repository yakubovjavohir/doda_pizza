import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PizzaService } from './pizza.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { ID } from 'src/common/TYPES';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { promises as fs } from 'fs';
import { extname, join } from 'path';
const uploadPath = join(process.cwd(), 'uploads', 'pizza');

@Controller('pizza')
export class PizzaController {
  imageUrl: string[] = [];
  constructor(private readonly pizzaService: PizzaService) {}
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
    this.imageUrl.push(`http://localhost:3000/uploads/pizza/${file.filename}`)    
    return { url: `http://localhost:3000/uploads/pizza/${file.filename}` };
  }
  @Post()
  create(@Body() dto: CreatePizzaDto) {
    for (let i = 0; i < this.imageUrl.length; i++) {
      dto.imageUrl[i].imageUrl = this.imageUrl[i]
    }
    this.imageUrl = []
    return this.pizzaService.create(dto);
  }

  @Get()
  findAll() {
    console.log('1');
    return this.pizzaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ID) {
    return this.pizzaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: ID) {
    return this.pizzaService.remove(id);
  }
}
