import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator"

export class LoginDto {
  @IsEmail()
  email: string
  
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password invalid',
  })
  password: string
}
