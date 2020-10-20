import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';

// Router of 'URL/movies'
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get("search")
    search(@Query("year") searchingYear: string) {
      return `We are searching for a movie with a title: ${searchingYear}`
    }

  // Router of 'URL/movies/ID'
  // @Param(PARAMETER) : Request parameter
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with th id : ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id : ${movieId}`;
  }

  // @Put() : Update all resourece
  // @Patch() : Update some resource
  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData
    };
  }
}
