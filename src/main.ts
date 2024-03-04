import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


//Commands:
//install -> nest new app-name
// install typeORM and sql -> npm install --save @nestjs/typeorm typeorm mysql2
// install config -> npm install --save @nestjs/config
// start -> npm run start,  npm run start:dev
// docker-compose up 
// nest g resource users - create resources folder 

// Modules
// nest g module database - create users module



// Note about Dependency Injection and Inversion of Control

/* Inversion of Control -> In contrast, with IoC, the control of object creation and flow is 
delegated to a separate component, often referred to as a container or framework. */

/* The IoC container manages the creation and lifecycle of objects and decides 
when to inject dependencies into the components that need them. */

// About nestJS
/* It utilizes Inversion of Control (IoC) and Dependency Injection (DI) as fundamental concepts to 
manage the application's architecture and facilitate modularity, scalability, and testability.*/

// Usage of resources (in this case users folder)
/*For each resource of your app, you have a controller, service, dto, and entity. 
In our case we want to manage users, so users are our resource.*/
