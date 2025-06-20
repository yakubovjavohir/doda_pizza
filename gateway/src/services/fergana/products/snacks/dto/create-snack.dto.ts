import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateSnackDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty()
    @IsInt()  // Ensures that the price is a string that can be parsed as a number
    @IsOptional()
    fixed__price?: number;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    vegetarian?: boolean;

    @ApiProperty()
    @IsArray()
    @IsOptional()
    dis_available_toppings?: string[] = [];

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    pepper?: boolean;

    @ApiProperty()
    @IsInt()  // Ensures that the price is a string that can be parsed as a number
    @IsOptional()
    price?: number;

    @ApiProperty()
    @IsString()  // Ensures that the price is a string that can be parsed as a number
    @IsOptional()
    imageUrl?: string;
}
