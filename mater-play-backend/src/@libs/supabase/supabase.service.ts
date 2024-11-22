import { Inject, Injectable } from "@nestjs/common";
import { SupabaseClient } from "@supabase/supabase-js";

@Injectable()
export class SupabaseService {
   
    constructor(
        @Inject('SUPABASE_CLIENT')
        private readonly supabase: SupabaseClient) {}
    async upload(file: any): Promise<any>{
        
        const { movieId,originalname, buffer } = file;

        const extensao = originalname.substring(
            originalname.lastIndexOf('.'),
        String(originalname).length);


        const {data, error} = await this.supabase.storage
        .from('mater-play')
        .upload(`movies/${Date.now}_${extensao}`, buffer, {
            upsert: true,
        });
        if(error) throw error;

        return data;
    }
}