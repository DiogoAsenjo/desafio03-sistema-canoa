import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Student } from './students/student.entity';
import { Response } from 'express';
//import { InterfaceStudent } from './students/student.entity';
import { CreateStudentDto } from './students/student.dto';

const users: Array<Object>= []

@Controller()
export class UsersController {
    //constructor(private readonly appService: AppService) {}

    @Get()
    mainPage(): string {
        return 'Bem vindo ao site da canoa!'
    }

    //CREATE STUDENT
    @Post('signup')
    createUser(@Res() res: Response, @Body() userData: CreateStudentDto): void {
        users.push(userData);
        console.log(users);
        res.status(HttpStatus.OK).send('Usuário cadastrado');
    }    
}