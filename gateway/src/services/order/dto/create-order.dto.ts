import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsInt, IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { ID } from "src/common/TYPES";

export class Volume {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id:ID

    @ApiProperty()
    @IsString()
    @IsOptional()
    size:string

    @ApiProperty()
    @IsString()
    @IsOptional()
    imageUrl:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    type:string

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    weight:number

    @ApiProperty()
    @IsInt()
    @IsOptional()
    price:number
}

export class ToppingsPrices {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id:ID

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    sm:string

    @ApiProperty()
    @IsInt()
    @IsOptional()
    price:number
}

export class Toppings {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id:ID

    @ApiProperty()
    @IsString()
    @IsOptional()
    name:string

    @ApiProperty()
    @IsObject()
    @IsOptional()
    toppingPrices:ToppingsPrices

    @ApiProperty()
    @IsString()
    @IsOptional()
    imageUrl:string
}

export class DisableToppings {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id:ID

    @ApiProperty()
    @IsString()
    @IsOptional()
    name:string
}

export class Item {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id:ID

    @ApiProperty()
    @IsString()
    @IsOptional()
    name:string

    @ApiProperty()
    @IsString()
    @IsOptional()
    imageUrl:string

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
    productTotalPrice?:number

    @ApiProperty()
    @IsObject()
    @IsOptional()
    variant?:Volume

    @ApiProperty()
    @IsOptional()
    toppings?:Toppings[]

    @ApiProperty()
    @IsOptional()
    disabledToppings?:DisableToppings[]
}

export class CreateOrderDto {
    @ApiProperty()
    @IsString()
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