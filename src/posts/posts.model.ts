import { prop } from '@typegoose/typegoose';

export class Post {
  @prop({ required: true })
  public title: string;
  @prop({ required: true })
  public content: string;
}
