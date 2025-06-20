import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateBreakfastDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    fixed__price?: number;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    vegetarian?: boolean;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    imageUrl: string;

    @ApiProperty()
    @IsArray()
    @IsOptional()
    dis_available_toppings?: string[];

    @ApiProperty()
    @IsInt()
    @IsOptional()
    price?: number;
}