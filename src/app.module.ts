import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

// Decorator: Add function method to class (like Anotation)
// AppModule: It is like root module of everything
// Moudle: The some part of application
// Controller: Get url and run function basically (like router of express)
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
