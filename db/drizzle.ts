import { config } from "dotenv";
import { drizzle } from 'drizzle-orm/neon-http';

config({ path: ".env" }); // or .env.local


function getDb(){
    if(process.env.DATABASE_URL){
        return drizzle(process.env.DATABASE_URL);
    }   
}

export const db = getDb();

