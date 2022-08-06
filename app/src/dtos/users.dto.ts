import { IsEmail, isString, IsString } from 'class-validator';

export class CreateUserDto {
  
  @IsString()
  public fullName: string;

  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
