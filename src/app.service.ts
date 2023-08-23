import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Projeto no ar, bora pra cima!';
  }
}
