import React from "react";
import Image from "next/image";
import Link from "next/link";
import pic from "../../public/template2/logo.png";
import pic1 from "../../public/template2/slider-img.png";
import pic2 from "../../public/template2/experience-img.jpg";
import pic3 from "../../public/template2/c1.png";
import pic4 from "../../public/template2/c2.png";
import pic5 from "../../public/template2/c3.png";
import pic6 from "../../public/template2/c4.png";
import pic7 from "../../public/template2/c5.png";
import pic8 from "../../public/template2/c6.png";
import pic9 from "../../public/template2/about-img.jpg";
import pic10 from "../../public/template2/f1.png";
import pic11 from "../../public/template2/f2.png";
import pic12 from "../../public/template2/f3.png";
import pic13 from "../../public/template2/f4.png";
import pic14 from "../../public/template2/freelance-img.jpg";
import pic15 from "../../public/template2/quote.png";
import pic19 from "../../public/template2/fb.png";
import pic20 from "../../public/template2/twitter.png";
import pic21 from "../../public/template2/linkedin.png";
import pic22 from "../../public/template2/instagram.png";

function page() {
  return (
    <>
      <div className="div absolute  w-[200px] h-[80px] flex items-center">
        <Image src={pic} /> <p className="text-white text-2xl">Spering</p>
      </div>
      <section className="hero flex  flex-col  md:flex-row w-full md:h-screen h-[500px]">
        <div className="l lg:w-[55%] w-[100%] h-screen bg-[#1a2e35] gap-4  flex flex-col items-center lg:items-start lg:pl-32 justify-center">
          <h1 className="lg:text-[40px] lg:font-extrabold text-white font-bold text-[30px]">
            <span className="font-extrabold ml-20 lg:ml-0"> YOU CAN</span>{" "}
            <br />
            <span className="font-extrabold"> HIRE FREELANCER</span> <br />
            <span className="ml-28 font-extrabold lg:ml-0">HERE</span> <br />
          </h1>
          <p className="text-gray-400   font-bold px-4 lg:px-0 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page
          </p>
          <div className="btn flex ">
            <button className="bg-[#FF4F5A] mr-3 text-white px-14 py-3">
              About us{" "}
            </button>
            <button className="bg-white px-8 py-3 pb-2">Get A Quote</button>
          </div>
        </div>
        <div className="r bg-[#1cbbb4]  lg:block  h-screen lg:w-[45%] w-[100%] flex items-center justify-center">
          <Image src={pic1} />
        </div>
      </section>

      <div className="mpic md:hidden  w-screen h-[300px] bg-[#1cbbb4] flex items-center justify-center">
        <Image src={pic1} width={350} />
      </div>

      <section>
        <div className="exp w-full h-full flex flex-col lg:flex-row">
          <div className="r w-full  h-full lg:h-screen flex items-center justify-center">
            <Image src={pic2} />
          </div>
          <div className="l w-full h-full lg:h-screen flex flex-col gap-8 lg:items-start lg:justify-center">
            <h1 className="font-extrabold text-3xl ml-4">
              BEXT EXPERIENCED <br />
              FREELANCER HERE
            </h1>
            <p className="font-bold text-gray-500 text-justify px-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as
            </p>
            <div className="btn flex ml-4">
              <button className="bg-[#FF4F5A] mr-3 text-white px-10  lg:px-14  py-3">
                Read More{" "}
              </button>
              <button className="bg-black mr-3 text-white px-14 py-3">
                Hire{" "}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#1cbbb4] w-full h-full lg:h-[450px]  ">
          <h1 className="underline text-white text-center  font-bold pt-10">
            CATEGORY
          </h1>
          <div className="flex flex-col items-center lg:grid lg:grid-cols-3 lg:px-52 gap-12 pt-4">
            <span className="text-white  text-xl font-bold">
              {" "}
              <Image src={pic3} />
              DESIGN & ARTS
            </span>
            <span className="text-white text-xl font-bold">
              <Image src={pic4} /> Web Development
            </span>
            <span className="text-white  text-xl font-bold">
              <Image src={pic5} /> SEO Marketing
            </span>
            <span className="text-white  text-xl font-bold">
              <Image src={pic6} /> Video Editing
            </span>
            <span className="text-white  text-xl font-bold">
              <Image src={pic7} /> Logo Design
            </span>
            <span className="text-white  text-xl font-bold">
              <Image src={pic8} /> Game Design
            </span>
          </div>
        </div>
      </section>

      <section className="w-full h-full flex flex-col">
        <div className="pic flex items-center justify-center">
          <Image src={pic9} />
        </div>
        <div className="div flex flex-col items-center lg:gap-10 ">
          <h1 className="font-extrabold lg:text-4xl">ABOUT SPERING COMPANY </h1>
          <p className="text-gray-500    lg:px-20 lg:text-lg ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If youThere are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some
            form, by injected humour, or randomised words which don't look even
            slightly believable. If you
          </p>
          <button className="bg-[#FF4F5A] mr-3 text-white w-[250px] py-3">
            Read More{" "}
          </button>
        </div>
      </section>

      <section className="exp">
        <div className="main w-full h-full flex flex-col md:flex-row">
          <div className="l w-screen  lg:w-[50%] h-full ">
            <h1 className="text-center text-3xl font-bold">
              WORK FREELANCER HAS DONE
            </h1>
            <div className="1 flex gap-8 mt-4 ml-8 lg:ml-0">
              <div className="img w-[90px] h-[90px] rounded-full ml-2 bg-[#1cbbb4]">
                <Image src={pic10} alt="pic10.png" className="ml-4 mt-4" />
              </div>
              <div className="info">
                <p className="text-[#FF4F5A] text-xl font-bold">
                  $250 milllion
                </p>
                <h3 className="text-xl font-extrabold">YEARS OF EXPERIENCE</h3>
              </div>
            </div>

            <div className="1 flex gap-8 mt-4 ml-8 lg:ml-0">
              <div className="img w-[90px] h-[90px] rounded-full ml-2 bg-[#1cbbb4]">
                <Image src={pic11} alt="pic10.png" className="ml-4 mt-4" />
              </div>
              <div className="info">
                <p className="text-[#FF4F5A] text-xl font-bold">$2 milllion</p>
                <h3 className="text-xl font-extrabold">CUSTOMER REVIEWS</h3>
              </div>
            </div>

           

            <div className="1 flex gap-8 mt-4 ml-8 lg:ml-0">
              <div className="img w-[90px] h-[90px] rounded-full ml-2 bg-[#1cbbb4]">
                <Image src={pic13} alt="pic10.png" className="ml-4 mt-4" />
              </div>
              <div className="info">
                <p className="text-[#FF4F5A] text-xl font-bold">98%</p>
                <h3 className="text-xl font-extrabold">
                  LOCATION
                </h3>
              </div>
            </div>
          </div>
          <div className="r w-screen lg:w-[50%] h-full bg-blue-100">
          <Image src={pic14} alt="pic14.png" />
        </div>
        </div>
       
      </section>

      <div className="testomonial flex flex-col gap-10 items-center justify-center w-full h-full ">
        <h1 className="text-4xl font-extrabold">TESTOMONIALS</h1>
        <div className="DIV w-[360px] h-[400px] lg:w-[800px] lg:h-[280px]  bg-white shadow-lg shadow-black flex items-center justify-evenly flex-col">
          <h1 className="text-center text-2xl font-bold">John Hissona</h1>
          <p className="text-gray-500 text-lg px-4">
            passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words
            which don't look even slightly believable. If youThere are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in s
          </p>
          <Image src={pic15} alt="pic15.png" />
        </div>
      </div>

      <footer className="h-full mt-4  w-full bg-[#1a2e35]  gap-8 flex items-center lg:flex-row flex-col justify-center">
        <div className="div  w-[200px] h-[80px] flex items-center">
          <Image src={pic} /> <p className="text-white text-2xl">Spering</p>
        </div>
        <div className="div flex gap-4 items-center">
          <Link href={"#"}>
            <Image src={pic19} alt="pic29png" />
          </Link>
          <Link href={"#"}>
            <Image src={pic20} alt="pic29png" />
          </Link>
          <Link href={"#"}>
            <Image src={pic21} alt="pic29png" />
          </Link>
          <Link href={"#"}>
            <Image src={pic22} alt="pic29png" />
          </Link>
         
        </div>
      </footer>
    </>
  );
}

export default page;
