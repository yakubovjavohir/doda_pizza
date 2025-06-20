import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreatePriceDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    size:string

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    price:number

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    topping:number
}
