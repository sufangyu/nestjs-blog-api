import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getIndex() {
    return {
      success: true,
    };
  }

  getDetail() {
    return {
      id: '1122',
      content: 'content',
    };
  }
}
