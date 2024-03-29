import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true})
    , DatabaseModule, UsersModule, CustomersModule, AuthModule,  PassportModule.register({ session: true }),],
    
  controllers: [],
  providers: [],
})
export class AppModule {}
