import { Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class AppService {
  @Query(() => String)
  getUser(): string {
    return 'Sanya';
  }

  @Query(() => String)
  createUser(name: string): string {
    return `${name} was created!`;
  }
}
