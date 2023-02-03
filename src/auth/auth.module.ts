import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AuthService',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:5051',
          package: 'auth',
          protoPath: join(__dirname, '../../proto/auth.proto'),
        },
      },
    ]),
  ],
  providers: [AuthResolver],
})
export class AuthModule {}
