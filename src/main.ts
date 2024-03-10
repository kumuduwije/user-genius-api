import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  

  // Set up CORS
  app.enableCors({
    origin: ['http://localhost:3000','http://localhost:5173'], // Allow requests from these origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  });
  
  app.setGlobalPrefix('api')
  await app.listen(3000);
}
bootstrap();

