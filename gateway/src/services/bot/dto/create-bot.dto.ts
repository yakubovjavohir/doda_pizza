import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateBotDto {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    code:number
}
