import React from "react";
import Navbar from "../components/Nnavbar";
import MyPortfolios from "../components/MyPortfolios";

export default async function Page() {
  let data = await fetch("https://online-portfolio-generator.vercel.app/api/detail", { cache: "no-store" });
  data = await data.json();
  data = data.result;
  return (
    <>
      <Navbar />
      <MyPortfolios data={data} />
    </>
  );
}
