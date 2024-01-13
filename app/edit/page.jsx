import React from "react";
import EditForm from "../components/EditForm";

export default async function Page({ searchParams }) {
  let data = [];
  if (searchParams.id) {
    data = await fetch("https://online-portfolio-generator.vercel.app/api/detail", {
      cache: "no-store",
    });
    data = await data.json();
    data = data.result;
    // console.log(data)
    data = data.filter((datas) => datas._id == searchParams.id)
    //console.log(data)
  }
  if(data.length != 0){
    return <EditForm postData = {data} />
  } else {
    return <EditForm/>
  }
}

// two approaches ( if there is any search param )
// 1. yaahein DB se data mangwao, separate karo through id, then send to EditForm
// 2. editform component mai DB se data mangwao, separate karo, use karo.
