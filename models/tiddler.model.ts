import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Unit of information' })
export class Tiddler {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field()
  information: string;
}
