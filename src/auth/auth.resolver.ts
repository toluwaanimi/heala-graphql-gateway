import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Auth, AuthUserModel } from './entities/auth.entity';
import { LoginUserInput } from './dto/login-user.input';
import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { IUserService } from './interfaces/user.interface';
import { RegisterUserInput } from './dto/register-user.input';

@Resolver(() => Auth)
export class AuthResolver implements OnModuleInit {
  constructor(
    @Inject('AuthService')
    private readonly authServiceClient: ClientGrpcProxy,
  ) {}

  private authService: IUserService;

  onModuleInit(): any {
    this.authService =
      this.authServiceClient.getService<IUserService>('AuthService');
  }

  @Mutation(() => AuthUserModel)
  async login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return await this.authService.loginUser(loginUserInput).toPromise();
  }

  @Mutation(() => AuthUserModel)
  async registerUser(
    @Args('registerUserInput') registerUserInput: RegisterUserInput,
  ) {
    return await this.authService.registerUser(registerUserInput).toPromise();
  }

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
