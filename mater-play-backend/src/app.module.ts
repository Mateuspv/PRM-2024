import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies/movie-entity';
import { Category } from './categories/category-entity';
import { CategoryModule } from './categories/category-module';
import { MovieModule } from './movies/movie-module';
import { GenreModule } from './generies/genre-modules';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      entities: [Category, Movie],
      synchronize: true,
      autoLoadEntities: true,
    }),
    CategoryModule,
    MovieModule,
    GenreModule,
  ],
  
})
export class AppModule {}