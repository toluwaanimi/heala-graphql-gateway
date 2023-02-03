import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  @Field({ description: 'Example field (placeholder)', nullable: true })
  name: string;

  @Field(() => Int, {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  age: number;

  @Field({ description: 'Example field (placeholder)', nullable: true })
  email: string;
}

@ObjectType()
export class AuthUserModel {
  @Field({ description: 'Example field (placeholder)', nullable: true })
  user?: Auth;

  @Field({ description: 'Example field (placeholder)', nullable: true })
  token?: string;

  @Field({ description: 'Example field (placeholder)' })
  status: string;

  @Field({ description: 'Example field (placeholder)' })
  message: string;
}
