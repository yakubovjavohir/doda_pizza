import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

class Price {
    @ApiProperty()
    sm: string;
  
    @ApiProperty()
    price: string;
}

export class CreateToppingDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name:string

    @ApiProperty({ type: [Price] })
    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(3, { message: 'There must be at least 3 prices' })
    prices:Price[]

    @IsString()
    @IsOptional()
    imageUrl:string
}
