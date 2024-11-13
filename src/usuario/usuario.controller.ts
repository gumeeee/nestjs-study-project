import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import Usuario from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('usuario')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criar(@Body() usuario: Usuario) {
    const novoUsuario = await this.usuarioRepository.create(usuario);
    return novoUsuario;
  }

  @Get()
  async listarUsuarios() {
    const usuarios = await this.usuarioRepository.getAll();
    return usuarios;
  }

  @Get(':id')
  async obterUsuarioPorId(@Param('id') id: string) {
    try {
      const usuario = await this.usuarioRepository.findById(+id);
      return usuario;
    } catch (err) {
      console.error(err);
    }
  }

  @Delete(':id')
  async deletar(@Param('id') id: number) {
    try {
      await this.usuarioRepository.delete(+id);
    } catch (err) {
      console.error(err);
    }
  }

  @Patch(':id')
  async atualizar(@Param('id') id: string, @Body() usuario: Usuario) {
    const usuarioAtualizado = await this.usuarioRepository.update({
      id: +id,
      ...usuario,
    });
    return usuarioAtualizado;
  }
}
