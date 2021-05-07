import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @ApiOperation({ summary: '帖子列表' })
  index() {
    return this.postsService.getIndex();
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  create() {
    return {
      success: true,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: '获取帖子详情' })
  detail() {
    return this.postsService.getDetail();
  }
}
