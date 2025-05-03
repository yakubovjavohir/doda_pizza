import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateSsbDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()      
    @IsString()
    @IsNotEmpty()
    gram: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    price: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    imageUrl: string;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    snack: number;
}
