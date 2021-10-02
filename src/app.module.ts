import { join } from 'path';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { TiddlersController } from './tiddlers/tiddlers.controller';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
  ],
  controllers: [AppController, TiddlersController],
  providers: [AppResolver],
})
export class AppModule {}
