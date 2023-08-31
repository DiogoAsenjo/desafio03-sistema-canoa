import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-student.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private jwtService: JwtService
  ) {}

    async createAccount(newUser: CreateUserDto): Promise<string> {
        const alreadyRegistered = await User.findOne({
            where: {
              email: newUser.email,
            },
          });

        //if(alreadyRegistered) throw new Error ('User already exists, you should use another email');
        if(alreadyRegistered) return 'User already exists, you should use another email';

        const hashedPassword = await bcrypt.hash(newUser.password, Number(process.env.SALTORROUNDS));
        newUser.password = hashedPassword;

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
      
      const validPassword = await bcrypt.compare(loginData.password, userExists.password);

      if(!validPassword) return "Invalid password, try again!";

      return "Logged in succesfully!"
    }
}