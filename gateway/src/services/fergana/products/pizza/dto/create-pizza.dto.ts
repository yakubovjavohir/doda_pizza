import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
export class CreatePizzaDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty()
    @IsOptional()
    @IsInt()
    fixed__price?: number;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    vegetarian?: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    pepper?: boolean;

    @ApiProperty()
    @IsString()
    imageUrl: string;

    @ApiProperty()
    @IsOptional()
    @IsArray()
    dis_available_toppings?: string[];

    @ApiProperty()
    @IsOptional()
    @IsInt()
    price?: number;

    @ApiProperty()
    @IsInt({each: true})
    topping: number[];
}


