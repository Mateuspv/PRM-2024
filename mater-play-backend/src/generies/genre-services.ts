import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from './genre-entity';
@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private repository: Repository<Genre>,
  ) {}
  findAll(): Promise<Genre[]> {
    return this.repository.find({
    });
  }
  findById(id: number): Promise<Genre> {
    return this.repository.findOneBy({ id: id });
  }
  save(Genre: Genre): Promise<Genre> {
    return this.repository.save(Genre);
  }
  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}