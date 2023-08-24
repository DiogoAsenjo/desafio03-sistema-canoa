import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Student } from './students/student.entity';
import { Response } from 'express';
import { InterfaceStudent } from './students/student.entity';
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

    }


    /* adicionarCookiePositivo(@Res() res: Response, @Body() body: { mensagem: string }): Promise<void> {
        if(!body.mensagem) {
            res.status(HttpStatus.BAD_REQUEST).send('É obrigatório escrever uma mensagem!');
            return;
        }

        try {
            const frasePositiva= body.mensagem;
            await Cookies.create({frase: frasePositiva});
            res.status(HttpStatus.CREATED).send('Frase adicionada com sucesso!');
        } catch(erro) {
            console.log(erro);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(erro);
        }
    } */
}