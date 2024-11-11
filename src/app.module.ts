import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TempModule } from './temp/temp.module';

@Module({
  imports: [UsuarioModule, TempModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
