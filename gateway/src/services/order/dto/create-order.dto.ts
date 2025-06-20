import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { ID } from "src/common/TYPES";

export class Item {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    productid:ID

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    type:string

    @ApiProperty()
    @IsInt()
    @IsOptional()
    quantity?:number

    @ApiProperty()
    @IsInt()
    @IsOptional()
    price?:number

    @ApiProperty()
    @IsArray()
    @IsOptional()
    variants?:any[]

    @ApiProperty()
    @IsArray()
    @IsOptional()
    toppings?:any[]

    @ApiProperty()
    @IsArray()
    @IsOptional()
    tt?:any[]
}

export class CreateOrderDto {
    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    user:ID

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    totalprice:number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    status:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address:string;

    @ApiProperty({ type: [Item] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Item)
    items: Item[];
}