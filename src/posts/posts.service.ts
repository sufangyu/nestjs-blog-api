import { Injectable } from '@nestjs/common';
import { Post } from './posts.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private readonly postModel: ReturnModelType<typeof Post>,
  ) {}

  async findAll() {
    return await this.postModel.find().exec();
  }

  /**
   * 创建
   */
  async create(createPostDto: Post): Promise<Post> {
    const createPost = new this.postModel(createPostDto);
    return await createPost.save();
  }

  /**
   * 获取
   * @param id
   */
  async getDetail(id: string) {
    return this.postModel.findById(id);
  }

  async delete(id: string) {
    return this.postModel.deleteOne({
      _id: id,
    });
  }
}
