# Architecture of NestJS

## Main.ts

NestJS have 'main.ts'. This name must not be changed

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // port on 3000
}
bootstrap();
```

<br/>
<br/>

## Module

- Decorator: Add function method to class (like Anotation) **Decorator must be on function or class**
- AppModule: It is like root module of everything
- Moudle: The some part of application
- Controller: Get url and run function basically (like router of express)

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

<br/>
<br/>

## Controller

- `@Controller()`: Decorator to make class Controller

- `@Get`: It is like `get` router of express. Run function when there is GET request from specific url

```ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hey')
  sayHey(): string {
    return 'hey, dude';
  }
}
```

<br/>
<br/>

## Services

- `@Injectable()`: Decorator to make class Servcies

```ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHey(): string {
    return 'hey, dude';
  }
}
```

- `this.appService.getHello()`: Get function of service by Service what is given from constructor

```ts
import { AppService } from './app.service';

// Controller
{
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // ...
}
```
