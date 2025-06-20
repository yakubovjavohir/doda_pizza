import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDrinkDto {
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
    fixed__price?: number

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    vegetarian?: boolean;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    gaz?:boolean

    @ApiProperty()
    @IsString()
    @IsOptional()
    imageUrl: string;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    price: number
}
