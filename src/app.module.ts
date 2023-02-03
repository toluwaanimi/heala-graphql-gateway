import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLError } from 'graphql/error';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '/',
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: {
        endpoint: '/',
        subscriptionEndpoint: '/',
      },
      context: ({ req, res }) => ({ req, res }),
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
