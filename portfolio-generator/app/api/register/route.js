import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";
import { ConnectDB } from "@/app/db/db";
import { User } from "@/app/models/user";


export async function POST(request){
    await ConnectDB();
    const {username,email,password}=await request.json();
    const existinguser= await User.findOne({email})
    if(existinguser){
        return NextResponse.json({
            message:'User Already Exsists',
            status:401
        })
    }
    try{
        const HashedPass = await bcrypt.hash(password,10)
        await User.create({username,email,password:HashedPass})

        return NextResponse.json({
            message:'User Created Successfully',
            status:200
        })

    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            message:'Error Occured Creating User',
            status:500
        })
    }



   


}