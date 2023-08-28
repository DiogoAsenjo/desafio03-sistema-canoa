import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateStudentDto } from './students/dto/create-student.dto';
import { StudentsService } from './students/students.service';
import { LoginDto } from './students/dto/login.dto';

@Controller()
export class UsersController {
    constructor(private readonly studentsService: StudentsService) {}

    @Get()
    mainPage(): string {
        return 'Bem vindo ao site da canoa!'
    }

    //CREATE STUDENT
    @Post('signup')
    async createUser(@Res() res: Response, @Body() userData: CreateStudentDto): Promise<void> {
        try {
            const response = await this.studentsService.createAccount(userData);
            res.status(HttpStatus.OK).send(response);
        } catch(error) {
            console.log(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }
    
    //LOGIN
    @Post()
    async login(@Res() res: Response, @Body() loginData: LoginDto): Promise<void> {
        try {
            const response = await this.studentsService.login(loginData);
            res.status(HttpStatus.OK).send(response);
        } catch(error) {
            console.log(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }
}