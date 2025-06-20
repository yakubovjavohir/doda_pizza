import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ID } from "src/common/TYPES";

export class CreateTTDto {

    @ApiProperty()
    @IsEnum(['traditional', 'thin'])
    @IsOptional()
    size: 'traditional' | 'thin';


    @ApiProperty()      
    @IsInt()
    @IsOptional()
    weight: number
    
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    sm: number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    imageUrl: string;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    price: number;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    pizza: ID;

}
