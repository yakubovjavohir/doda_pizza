import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class UpdateNameProfileDto {
    @ApiProperty()
    @IsString()
    name:string
}

export class UpdateBirthdayProfileDto {
    @ApiProperty()
    @IsString()
    birthday:string
}


export class UpdateEmailProfileDto {
    @ApiProperty()
    @IsEmail()
    @IsString()
    email:string
}

export class RemovePhoneDto {
    @ApiProperty()
    phone: string;
  }