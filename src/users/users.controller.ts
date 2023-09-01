import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-student.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    mainPage(): string {
        return 'Bem vindo ao site da canoa!'
    }

    //CREATE USER
    @Post('signup')
    async createUser(@Res() res: Response, @Body() userData: CreateUserDto): Promise<void> {
        try {
            const response = await this.usersService.createAccount(userData);
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
            const response = await this.usersService.login(loginData);
            res.status(HttpStatus.OK).send(response);
        } catch(error) {
            console.log(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }
}