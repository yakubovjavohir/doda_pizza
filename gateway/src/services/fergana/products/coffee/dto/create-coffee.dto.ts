import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ID } from "src/common/TYPES";

export class CreateCoffeeDto {
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
    @IsString()
    @IsOptional()
    imageUrl: string;

    @ApiProperty()
    @IsInt()
    @IsOptional()
    price: number

    @ApiProperty()
    @IsString({each: true})
    topping: ID[];
}
