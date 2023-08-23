import { Controller, Get } from '@nestjs/common';

@Controller()
export class UsersController {
    //constructor(private readonly appService: AppService) {}

    @Get()
    mainPage(): string {
        return 'Rota de usuários funcionando!'
    }
}