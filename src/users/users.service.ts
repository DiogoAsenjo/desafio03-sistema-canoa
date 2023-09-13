import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private jwtService: JwtService
  ) {}

    async createAccount(newUser: CreateUserDto): Promise<Object> {
        const alreadyRegistered = await User.findOne({
            where: {
              email: newUser.email,
            },
          });
        
        //Não é o service que deve fazer esse tipo de validação. Se possível seria bom criar um Decorator para validade se o usuário existe ou não e deixar tudo no DTO.
        if(alreadyRegistered) throw new HttpException("User already exist, you should use another e-mail", 400);

        const hashedPassword = await bcrypt.hash(newUser.password, Number(process.env.SALTORROUNDS));
        newUser.password = hashedPassword;

        await User.create({...newUser});
        return {
          message: 'User registered sucessfully!',
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

      const payload = { sub: userExists.id, username: userExists.email }

      return {
        message: "Logged in succesfully!",
        user: userExists,
        access_token: await this.jwtService.signAsync(payload),
      }
    }
}