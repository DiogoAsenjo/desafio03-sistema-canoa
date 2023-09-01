import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [JwtModule.register({
        global: true,
        secret: '716f925b8fc42ac54bd726d2a424550af5cea212',
        signOptions: { expiresIn: '60s' },
      }),],
    exports: [JwtModule]
})
export class AuthModule {}
