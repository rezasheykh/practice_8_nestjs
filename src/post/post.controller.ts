import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Param,
  Body,
  Delete,
  Query,
  // UsePipes,
  // ValidationPipe,
  ParseIntPipe,
  // UseGuards,
  // SetMetadata,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
// import { Domain} from 'src/common/decorators/domain.decorator';
// import { AppKeyGuard } from 'src/common/guards/app-key.guard';
// import { isPublic, IS_PUBLIC } from 'src/common/guards/constant/is-public.decoraytor';
import { EventTypes } from 'src/event/entities/event.entity';
import { PaginationDto } from './dto/pagination.dto';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { PostService } from './post.service';

@Controller('post')
// @UsePipes(new ValidationPipe({}))
@ApiTags('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  // @UseGuards(AppKeyGuard)
  // findAll(@Domain('localhost') domain) {
  findAll() {
    // console.log(domain);
    return this.postService.findAll();
  }

  @Get('/paginate')
  findAllPaginated(@Query() query: PaginationDto) {
    return this.postService.findAll(query);
  }

  @Get('/:id')
  // @SetMetadata(IS_PUBLIC,true)
  // @isPublic()
  async findOne(@Param('id') id) {
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     return resolve(null);
    //   }, 5000);
    // });
    return this.postService.findOne(parseInt(id));
  }

  @Post('/')
  // @isPublic()
  @ApiOperation({
    description: 'It will insert a new post',
  })
  insert(@Body() body: CreatePostDto) {
    return this.postService.create(body);
  }

  @Put(':id')
  // @UsePipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //   }),
  // )
  update(@Param('id') id, @Body() body: UpdatePostDto) {
    return this.postService.update(+id, body);
  }

  @Patch(':id')
  patch(@Param('id', ParseIntPipe) id: number, @Body() body: UpdatePostDto) {
    console.log(body instanceof UpdatePostDto);
    return this.postService.update(id, body);
  }
  @Patch(':id/event/:type/:userId')
  like(
    @Param('id') id,
    @Param('userId') userId,
    @Param('type') type: EventTypes,
  ) {
    return this.postService.event(+id, type, userId);
  }
  @Delete(':id')
  // @ApiNotFoundResponse({
  //   description: 'when post not found, this exception throws',
  // })
  @ApiResponse({
    status: 404,
    description: 'when post not found, this exception throws',
  })
  delete(@Param('id') id) {
    return this.postService.delete(+id);
  }
}
