import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as dotevn from 'dotenv'

dotevn.config();

@Module({
    imports: [JwtModule.register({
        global: true,
        secret: process.env.JWTSECRET,
        signOptions: { expiresIn: '60s' },
      }),],
    exports: []
})
export class AuthModule {}
