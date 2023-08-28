import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './student.dto';
import { Student } from './student.entity';

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
}