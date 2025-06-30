import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ID } from "src/common/TYPES";

export class CreateVolumesDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    size: string;

    @ApiProperty()      
    @IsInt()
    @IsOptional()
    weight: number;
    
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    price: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    imageUrl: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    product: ID;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    type: string;
}
