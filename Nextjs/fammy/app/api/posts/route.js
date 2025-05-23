import connectToDatabase from '@/lib/data'
import Post from "@/Model/Post"
import { NextResponse } from 'next/server'

export async function GET (){
    try{
        await connectToDatabase();
        const posts=await Post.find();
        return NextResponse.json({posts},{status:200});
    }catch(error){
        console.log(error)
        return NextResponse.json(
        {error:"Failed to fetch posts"},
        {status:500}
    );
    }
}