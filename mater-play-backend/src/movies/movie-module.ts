import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieService } from "./movie-service";
import { MovieController } from "./movie-controller";
import { Movie } from "./movie-entity";
import { Category } from "src/categories/category-entity";

@Module({
    imports: [TypeOrmModule.forFeature([Category, Movie])],
    SupabaseProvide;
    providers: [MovieService],
    controllers: [MovieController],
})

export class MovieModule {}