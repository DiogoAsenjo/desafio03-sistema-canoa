import { Injectable } from '@nestjs/common';
import { InterfaceStudent } from './student.entity';

@Injectable()
export class StudentsService {

    createAccount(newUser: InterfaceStudent): any {
    }
}