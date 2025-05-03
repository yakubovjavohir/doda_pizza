import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePcDto {
    @ApiProperty()      
    @IsString()
    @IsNotEmpty()
    pc: string;

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
