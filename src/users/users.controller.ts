import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Student } from './students/student.entity';
import { Response } from 'express';
//import { InterfaceStudent } from './students/student.entity';
import { CreateStudentDto } from './students/student.dto';
import { StudentsService } from './students/students.service';

const users: Array<Object>= []

@Controller()
export class UsersController {
    constructor(private readonly studentService: StudentsService) {}

    @Get()
    mainPage(): string {
        return 'Bem vindo ao site da canoa!'
    }

    //CREATE STUDENT
    @Post('signup')
    async createUser(@Res() res: Response, @Body() userData: CreateStudentDto): Promise<void> {
        try {
            const response = await this.studentService.createAccount(userData);
            res.status(HttpStatus.OK).send(response);
        } catch(error) {
            console.log(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }    
}