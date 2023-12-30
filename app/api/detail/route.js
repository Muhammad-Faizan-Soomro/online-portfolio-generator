import { ConnectDB } from "@/app/db/db";
import { Detail } from "@/app/models/detail";
import { NextResponse } from "next/server";

export async function GET(){
    let data = []
    try {
        await ConnectDB();
        data = await Detail.find();
    } catch (error) {
        console.log(error)
    }
    return NextResponse.json({result: data})
}

export async function POST(request){
    const payload = await request.json()
    await ConnectDB();
    let detail = new Detail(payload)
    const result = await detail.save()
    return NextResponse.json({result})
}