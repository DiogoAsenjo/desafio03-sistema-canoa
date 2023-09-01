import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-student.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

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
      //Igual a documentação
      const payload = { sub: userExists.id, username: userExists.email};
      console.log(payload, jwtConstants.secret);

      return {
        message: "Logged in succesfully!",
        user: userExists,
        access_token: await this.jwtService.signAsync(payload)  //igual a documentação mas não funciona. Apresenta o erro: Error: secretOrPrivateKey must have a value.
        /* access_token: await this.jwtService.signAsync({}, {
          secret: '716f925b8fc42ac54bd726d2a424550af5cea212',
          subject: String(userExists.id),
        }) */
      }
    }
}