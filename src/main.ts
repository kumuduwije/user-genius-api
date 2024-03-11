import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from "express-session";
import * as passport from "passport";

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

  app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie:{
      maxAge:120000,
    }
  }))

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();

