import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import Usuario from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(protected prismaService: PrismaService) {}

  async getAll() {
    return this.prismaService.usuario.findMany();
  }

  async findById(id: number) {
    return this.prismaService.usuario.findUnique({
      where: {
        id,
      },
    });
  }

  async create(usuario: Usuario) {
    return this.prismaService.usuario.create({
      data: usuario as any,
    });
  }

  async update(usuario: Usuario) {
    if (!usuario.id) {
      throw new Error('Usuário não encontrado...');
    }
    return this.prismaService.usuario.update({
      where: {
        id: usuario.id,
      },
      data: usuario as any,
    });
  }

  async delete(id: number) {
    if (!id) {
      throw new Error('Usuário não encontrado...');
    }

    return this.prismaService.usuario.delete({
      where: {
        id,
      },
    });
  }
}
