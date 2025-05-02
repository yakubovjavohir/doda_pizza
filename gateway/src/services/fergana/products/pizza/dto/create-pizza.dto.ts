import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from "class-validator";

class Image {
    @ApiProperty()
    sm: string;
  
    @ApiProperty()
    imageUrl: string;

    @ApiProperty()
    type: "Traditional" | "Thin";
}

export class CreatePizzaDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    price:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description:string

    @ApiProperty({ type: [Image] })
    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(3, { message: 'There must be at least 6 images' })
    imageUrl:Image[]
}
