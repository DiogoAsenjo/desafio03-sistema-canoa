/* import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  use(request: Request, response: Response, next: NextFunction) {
    // Take the token
    const token = request.headers.authorization?.replace('Bearer ', '');

    if (token) {
      try {
        const decoded = this.jwtService.verify(token, {
          secret: '716f925b8fc42ac54bd726d2a424550af5cea212',
          algorithms: ['HS256'],
        });

        const subject = decoded.sub;

        // Saving the data in request to future uses

        request['user'] = {decoded, subject};
        next();

      } catch (error) {
        // Case the token is invalid
        return response.status(401).json({ message: 'Invalid Token' });
      }
    } else {
      // Case the token was not provided
      return response.status(401).json({ message: 'Token is required' });
    }
  }
} */