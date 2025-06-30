import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { ID } from 'src/common/TYPES';

export class CreateKidsFaveDto {
  @ApiProperty({
    description: 'Type of the product (pizza, snack, dessert, etc.)',
    example: 'pizza'
  })
  @IsString()
  type: string;

  @ApiProperty({
    description: 'ID of the referenced product',
    example: 1
  })
  @IsString()
  product: ID;

  @ApiProperty({
    description: 'Whether the product is spicy',
    example: false
  })
  @IsBoolean()
  spicy: boolean;

  @ApiProperty({
    description: 'Whether the product is kids friendly',
    example: true
  })
  @IsBoolean()
  kidsFriendly: boolean;

  @ApiProperty({
    description: 'Recommended age for the product',
    example: 5
  })
  @IsNumber()
  recommendedAge: number;
}