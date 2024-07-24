import { NextResponse } from "next/server";
import { listaDeLivros } from "../route";

export async function GET(req){
    const id = parseInt(req.url.split('http://localhost:3000/api/')[1]);
    let objeto = null;
    listaDeLivros.forEach((obj)=> {
        if(obj.id == id){
           objeto = obj
        }
    });
    return NextResponse.json(objeto);
}
