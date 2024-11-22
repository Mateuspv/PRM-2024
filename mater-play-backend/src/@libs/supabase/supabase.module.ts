import { Module } from "@nestjs/common";
import { SupabaseService } from "./supabase.service";
import { createClient } from "@supabase/supabase-js";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/categories/category-entity";
import { Genre } from "src/generies/genre-entity";
import { Movie } from "src/movies/movie-entity";

const SupabaseProvide = {
    provide: 'SUPABASE_CLIENT',
    useFactory:  () => {
        return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
    },
};
@Module({
    imports: [TypeOrmModule.forFeature([Category, Genre, Movie])],
    providers: [SupabaseService],
    exports: [SupabaseService],
})
export class SuperBaseModule {}