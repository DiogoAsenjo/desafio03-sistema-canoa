import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from './users.service';
import {
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';

@ApiTags('Users')  
@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    //CREATE USER
    @Post('signup')
    @ApiOperation({ summary: 'Create a new user' })
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
    @ApiOperation({ summary: 'Log a user in the system' })
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