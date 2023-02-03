import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RegisterUserInput {
  @Field({ description: 'Example field (placeholder)' })
  name: string;

  @Field({ description: 'Example field (placeholder)' })
  age: number;

  @Field({ description: 'Example field (placeholder)' })
  email: string;

  @Field({ description: 'Example field (placeholder)' })
  password: string;
}
