import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDessertDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description?: string;

    // fixed__price va price uchun null yoki number bo'lishi kerak
    @ApiProperty()
    @IsInt()
    @IsOptional()
    fixed__price?: number

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    vegetarian?: boolean;

    @ApiProperty()
    @IsArray()
    @IsOptional()
    dis_available_toppings?: string[] = [];

    @ApiProperty()
    @IsString()
    @IsOptional()
    imageUrl: string;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    price: number
}
