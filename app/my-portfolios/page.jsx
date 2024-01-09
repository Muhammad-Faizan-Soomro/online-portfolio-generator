import React from "react";
import Navbar from "../components/Nnavbar";
import MyPortfolios from "../components/MyPortfolios";

export default async function Page() {
  let data = await fetch("http://localhost:3000/api/detail");
  data = await data.json();
  data = data.result;
  return (
    <>
      <Navbar />
      <MyPortfolios data={data} />
    </>
  );
}
