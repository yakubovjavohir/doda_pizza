import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";
import { ID } from "src/common/TYPES";

export class CreateFactDto {
    @ApiProperty()      
    @IsInt()
    @IsNotEmpty()
    calories: number;

    @ApiProperty()      
    @IsInt()
    @IsNotEmpty()
    protein: number;
    
    @ApiProperty()      
    @IsInt()
    @IsNotEmpty()
    fat: number;

    @ApiProperty()      
    @IsInt()
    @IsNotEmpty()
    carbohydrate: number;

    @ApiProperty()      
    @IsInt()
    @IsNotEmpty()
    tt: ID;
}
