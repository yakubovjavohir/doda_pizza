import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateToppingDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name:string

    @ApiProperty()
    @IsString()
    @IsOptional()
    imageUrl:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    type:string
}
