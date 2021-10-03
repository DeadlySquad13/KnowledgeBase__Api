import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

const ultraMegaDB = {
  name: ''
}

@Resolver()
export class AppService {
  @Query(() => String)
  getUser(): string {
    return ultraMegaDB.name;
  }

  @Mutation(() => String)
  createUser(@Args('name', { type: () => String }) name: string): string {
    ultraMegaDB.name = name;
    return ultraMegaDB.name;
  }
}
