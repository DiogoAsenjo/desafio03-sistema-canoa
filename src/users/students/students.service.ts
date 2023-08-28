import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './create-student.dto';
import { Student } from './student.entity';
import { LoginDto } from './login.dto';

@Injectable()
export class StudentsService {

    async createAccount(newUser: CreateStudentDto): Promise<string> {
        const alreadyRegistered = await Student.findOne({
            where: {
              email: newUser.email,
            },
          });
        //if(alreadyRegistered) throw new Error ('User already exists, you should use another email');
        if(alreadyRegistered) return 'User already exists, you should use another email';
        await Student.create({...newUser});
        return 'Student registered sucessfully!';
    }

    async login(loginData: LoginDto): Promise<string> {
      const userExists = await Student.findOne({
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