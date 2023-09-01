import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-student.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    async createAccount(newUser: CreateUserDto): Promise<Object> {
        const alreadyRegistered = await User.findOne({
            where: {
              email: newUser.email,
            },
          });

        if(alreadyRegistered) throw new HttpException("User already exist, you should use another e-mail", 400);

        const hashedPassword = await bcrypt.hash(newUser.password, Number(process.env.SALTORROUNDS));
        newUser.password = hashedPassword;

        await User.create({...newUser});
        return {
          message: 'Student registered sucessfully!',
          newUser: newUser
        };
    }

    async login(loginData: LoginDto): Promise<Object> {
      const userExists = await User.findOne({
        where: {
          email: loginData.email,
        },
      });

      if(!userExists) throw new HttpException("User doesn't exist, check your credentials", 400);
      
      const validPassword = await bcrypt.compare(loginData.password, userExists.password);

      if(!validPassword) throw new HttpException("Invalid password, try again!", 400);

      return {
        message: "Logged in succesfully!",
        user: userExists,
      }
    }
}