import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-student.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    async createAccount(newUser: CreateUserDto): Promise<string> {
        const alreadyRegistered = await User.findOne({
            where: {
              email: newUser.email,
            },
          });
        //if(alreadyRegistered) throw new Error ('User already exists, you should use another email');
        if(alreadyRegistered) return 'User already exists, you should use another email';
        await User.create({...newUser});
        return 'Student registered sucessfully!';
    }

    async login(loginData: LoginDto): Promise<string> {
      const userExists = await User.findOne({
        where: {
          email: loginData.email,
        },
      });

      if(!userExists) return "User doesn't exist, check your credentials";
      
      const validPassword = userExists.password === loginData.password;

      if(!validPassword) return "Invalid password, try again!";

      return "Logged in succesfully!"
    }
}