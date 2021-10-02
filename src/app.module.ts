import { join } from 'path';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiddlersController } from './tiddlers/tiddlers.controller';
import { GraphQLModule } from '@nestjs/graphql';
const allowedServers = [
  'http://localhost:3002'
];

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
      cors: {
        origin: allowedServers[0]
        // origin: (origin, callback) => {
        //   if (allowedServers.includes(origin)) {
        //     callback(null, true);
        //     return;
        //   }

        //   callback('cors error', false)

        // }
      }
    }),
  ],
  controllers: [AppController, TiddlersController],
  providers: [AppService],
})
export class AppModule {}
