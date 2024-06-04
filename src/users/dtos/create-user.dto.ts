import {IsNotEmpty, IsString, Matches, MaxLength, MinLength} from "class-validator";
import {PASSWORD_STRENGTH_ERROR} from "../messages.constants";

export class CreateUserDto {
    @IsString()
    username: string;

    @MinLength(6)
    @MaxLength(50)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: PASSWORD_STRENGTH_ERROR })
    password: string;
}
