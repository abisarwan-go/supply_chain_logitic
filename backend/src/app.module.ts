import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OperationModule } from './operation/operation.module';

@Module({
  imports: [PrismaModule, OperationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
