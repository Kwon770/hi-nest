import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

// Router of 'URL/movies'
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  // Router of 'URL/movies/ID'
  // @Param(PARAMETER) : Request parameter
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with th id : ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id : ${movieId}`;
  }

  // @Put() : Update all resourece
  // @Patch() : Update some resource
  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id : ${movieId}`;
  }
}
