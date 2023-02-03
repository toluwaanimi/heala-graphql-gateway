import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class LoginUserInput {
  @Field({ description: 'Example field (placeholder)' })
  email: string;

  @Field({ description: 'Example field (placeholder)' })
  password: string;
}
