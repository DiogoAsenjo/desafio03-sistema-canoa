import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from './users.service';
import {
    ApiBadRequestResponse,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';

@ApiTags('Users')  
@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    testing(): any {
        return 'Página de teste!'
    }

    //CREATE USER
    @Post('signup')
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({
        status: 200,
        description: 'Return a message saying the user was created and an Object with the data of the User',
    })
    @ApiBadRequestResponse({
        description: 'Return a message saying if something wrong happened while creating an user',
    })
    async createUser(@Res() res: Response, @Body() userData: CreateUserDto): Promise<void> {
        try {
            const response = await this.usersService.createAccount(userData);
            //Esse res.status não é necessário. Os retornos devem ser todos feitos no service
            res.status(HttpStatus.OK).send(response);
        } catch(error) {
            console.log(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
    }
    
    //LOGIN
    @Post()
    @ApiOperation({ summary: 'Log a user in the system' })
    @ApiResponse({
        status: 200,
        description: 'Return a message saying the user logged in, the data of the user and a jwt token bearer',
    })
    @ApiBadRequestResponse({
        description: 'Return a message saying if something wrong happened while loggin in',
    })
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