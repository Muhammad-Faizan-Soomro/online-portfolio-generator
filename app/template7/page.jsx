import React from "react";
import p1 from "../../public/template8/adamjee-99eb119a.jpg";
import p2 from "../../public/template8/github-2ac859a1.png";
import p3 from "../../public/template8/main.png";
import p4 from "../../public/template8/login-3664fb22.png";
import p5 from "../../public/template8/microsoft.png-6b168786.png";
import p6 from "../../public/template8/movie app-d74a8a83.png";
import p7 from "../../public/template8/ned.jpg";
import p8 from "../../public/template8/psl-556fdc8c.png";
import p9 from "../../public/template8/Usability-ba4d112e.png";
import p10 from "../../public/template8/hero.jpeg";
import Image from "next/image";

function page() {
  return (
    <>
      <div className="nav w-screen h-28 items-center justify-between border-b-2 border-transparent flex relative z-20">
        <div className="logo ml-10 cursor-pointer text-[#0E2431] text-2xl font-bold hover:text-orange-400">
          SHEHRYAR NASIR <i className="fa-solid fa-code"></i>
        </div>
        <div className="tags hidden lg:flex w-[50%] justify-center gap-20 ml-64">
          <a
            href="/"
            className="cursor-pointer text-xl font-bold text-blue-600 border-b-2 border-blue-600"
          >
            Home
          </a>
          <a
            href="#skills"
            className="cursor-pointer text-xl font-bold text-[#0E2431] hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
          >
            Skills
          </a>
          <a
            href="#education"
            className="cursor-pointer text-xl font-bold text-[#0E2431] hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
          >
            Education
          </a>
          <a
            href="#about"
            className="cursor-pointer text-xl font-bold text-[#0E2431] hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
          >
            About
          </a>
          <a
            href="#projects"
            className="cursor-pointer text-xl font-bold text-[#0E2431] hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
          >
            Projects
          </a>
        </div>
        <div className="div">
          <a className="px-4 py-4 mr-20 block lg:hidden">
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>
      </div>

      <div id="particles-js" className="absolute inset-0"></div>
      <div className="content-wrapper relative z-10 w-full h-full flex flex-col lg:flex-row wow animate__animated animate__fadeInLeft">
        <div className="info h-screen w-screen lg:w-[50%] flex items-center flex-col">
          <div className="d w-screen bg h-[70%] gap-10 flex flex-col items-center justify-center">
            <h1 className="font-bold text-[50px] text-[#0E2431]">Hi There,</h1>
            <h1 className="font-bold lg:text-[50px] text-[40px] text-[#0E2431]">
              I'm Shehryar
              <span className="font-bold lg:text-[50px] text-[40px] text-orange-400">
                Nasir
              </span>
            </h1>
            <p className="text-xl">I Am Into</p>
            <button className="bg-[#2506AD] px-6 py-2 rounded text-white font-semibold">
              About me <i className="fa-solid fa-arrow-down text-white"></i>
            </button>
          </div>

          <div className="div flex items-start justify-evenly w-[70%] h-[300px]">
            <a className="px-3 text-center rounded-[50%] w-14 py-4 bg-[#09011B] hover:bg-sky-700">
              <i className="fa-brands fa-linkedin text-xl text-sky-400 hover:text-white"></i>
            </a>
            <a className="px-3 rounded-[50%] text-center w-14 py-4 bg-[#09011B]">
              <i className="fa-brands fa-github text-xl text-sky-400 hover:text-white"></i>
            </a>
            <a className="px-3 rounded-[50%] text-center w-14 py-4 bg-[#09011B]">
              <i className="fa-brands fa-facebook text-xl text-sky-400 hover:text-white"></i>
            </a>
            <a className="px-3 rounded-[50%] text-center w-14 py-4 bg-[#09011B] hover:bg-pink-500">
              <i className="fa-brands fa-square-instagram text-xl text-sky-400 hover:text-white"></i>
            </a>
          </div>
        </div>
        <div className="img lg:h-screen lg:block hidden lg:w-[50%] absolute top-[410px] w-[200px] h-[20px] left-[100px] lg:static wow animate__animated animate__fadeInRight">
          <Image
            src={p3}
            className="rounded-[100%] p-2 lg:h-[550px] h-[200px] mt-2"
            alt="p3.png"
          />
        </div>
      </div>

      <section id="about" className="wow animate__animated animate__fadeInRight">
        <h1 className="text-center font-bold text-3xl">
          <i className="fa-solid fa-user fa-bounce"></i> About
          <span className="text-purple-800">Me</span>
        </h1>
        <div className="about w-screen h-screen flex flex-col lg:flex-row lg:mt-2">
          <div className="im w-screen h-[50%] lg:w-[70%] lg:mt-2">
            <Image
              className="w-[60%] ml-20 rounded mt-2"
              src={p10}
              alt="p10.png"
            />
          </div>
          <div className="cont w-screen h-[50%] lg:w-[50%] lg:h-screen flex flex-col gap-2 lg:gap-8 lg:mr-10">
            <h1 className="text-[#09011B] font-bold text-2xl lg:text-[50px]">
              I'm Shehryar
            </h1>
            <p className="text-[#09011B] text-lg lg:text-[20px]">
              Full Stack Web Developer
            </p>
            <p className="font-serif text-justify">
              I am a Full-Stack developer based in Gurgaon, India. I am
              currently enrolled in Computer Science and Engineering from Ned
              University. I am very passionate about improving my coding skills
              & developing applications & websites. Working for myself to
              improve my skills. Love to build Full-Stack clones.
            </p>
            <p>
              <span className="text-blue-700">Age:</span>20
            </p>
            <p>
              <span className="text-blue-700">Phone:</span>03160294324
            </p>
            <p>
              <span className="text-blue-700">Email:</span>shehryarnasir98@gmail.com
            </p>
            <p>
              <span className="text-blue-700">Place:</span>Karachi , Pakistan
            </p>
            <button className="bg-[#2506AD] w-24 py-2 text-white font-semibold">
              Resume <i className="fa-solid fa-arrow-down text-white"></i>
            </button>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="skills w-screen h-screen bg-purple-900 mt-24 lg:mt-1 overflow-auto lg:overflow-hidden">
          <h1 className="text-center text-[30px] text-white font-bold">
            <i className="fa-solid fa-laptop-code"></i>Skills &
            <span className="text-yellow-300">Abilities</span>
          </h1>
          <div className="skillcontent w-[90%] h-screen bg-[#00001666] m-2 grid grid-cols-2 lg:grid-cols-7 overflow-auto lg:overflow-hidden lg:ml-32 rounded lg:w-[80%] lg:h-[600px]">
            <div className="div w-[150px] h-[130px] rounded bg-[#000016E6] m-2 flex flex-col hover:bg-black">
              <img
                src="data:image/png;base64,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"
                className="w-24 ml-6"
                alt="CSS"
              />
              <p className="text-center text-white font-semibold">CSS</p>
            </div>
            <div className="div w-[150px] h-[130px] rounded bg-[#000016E6] m-2 flex flex-col hover:bg-black">
              <Image
                src={p2}
                className="w-24 ml-6"
                alt="CSS.png"
              />
              <p className="text-center text-white font-semibold">GITHUB</p>
            </div>
            <div className="div w-[150px] h-[130px] rounded bg-[#000016E6] m-2 flex flex-col hover:bg-black">
              <img
                src="data:image/png;base64,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"
                className="w-24 ml-6"
                alt="CSS"
              />
              <p className="text-center text-white font-semibold">BOOTSTRAP</p>
            </div>
            <div className="div w-[150px] h-[130px] rounded bg-[#000016E6] m-2 flex flex-col hover:bg-black">
              <img
                src="data:image/png;base64,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"
                className="w-24 ml-6"
                alt="CSS"
              />
              <p className="text-center text-white font-semibold">HTML</p>
            </div>
            <div className="div w-[150px] h-[130px] rounded bg-[#000016E6] m-2 flex flex-col hover:bg-black">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHUlEQVR4nO1aW4xTVRRtb98Ppp3ODO102g7y8hEfGMAYJGpQiaAERI1RYmI0xESGaDS8DDFGRFE+CCEawwdq5MPgB1HERAWjKCJKIo4OAiMe9Ud8xbf7c5t9mWqn3NPeWzo5aVkr2T+Te9vpWvt9js8HAAAAAAAAAAAAAAAAABqQKjGspOVgzB0H5JdqOiAEUGYjFAIoCHBW1wgfakAJApj2QkIEmCeCkILMk0EGDDVAQQDjXkiIAPNEEFKQeTLIgKEGKAhg3AsJEWCeCEIKMk8GGTDUAAUBjHshIQLME0FIQebJIAOGGqAggHEvJESAeSIIKcg8GWTAUAMUBDDuhYQIME8EIQWZJ4MMGGqAggDGvZAQAeaJIKSgscqxfke7+YaEq/e/3JfnRx9K89WzYlzoDXIsanEkbHG2J8izL4vyqoEUf/p2L2oANVmAk4MFvvOWJAcDzu9Xmt/v51sXJPi7Q30owtQEAY6+n+eJ/aG6xFdbqS/En+31Fg1t3wX5PArw4xcFPm9y2DP5ZesvhDxFAgRQowlZcV+qYfLLNn9OHAJQAxHw69EiJ+OW9p18LsiL5iV44fUJLuadU5TUjAfvTfFfXyEC2KsAO7f1aJ9fsjhpC1R+9s/hEq9fnbYLcPmZSy+K8MHdOdQAarAGPL220/FZaTt/Hvqf/EpbszzN8ZjFGx5O26J4r1EowlwmY/VAWtvd6Aj8/XjR7poabxIgAJfJeGKNswCW5W+ox4cAylsKemlLt/b5666M2S0qBFBjNwd883HfqKLq1OO/uLnbdYeDCFDeB7F5c+J1+3yZkjc+0mmvKyCAau4k/NHrOQ6H9LNApY1LBHj5PR08/GHj9QFFWJ1OyuZ1mZqpqNqiEYvvX5pqKCIggHImZsv6jOtIKFtfLsi7t4+HAHQGKajSDuzK8bQLI55EkFXE1o1diABqggBif58o8bZNXXzBVPcb0kDA7zoSkIKUu1z9z9endkVzr4q5qg+Sjn475ry+gAA+9xHgZIfe7OXbFyXrCvHcUxkI4DvDFFTL9uzI2ufEuu+QtfVZHQG/HCk2LICkHMn/9b5D5gZdJMjk3LYCHPsgzwvmxnnfTv3+ffCdvFYASSG692Swkt3PYyvSrv4X3RFmIm61nwB/DBd53cpTO3j5kZP6Q3zigPMk+vymLq0AA3d3OHr9M09muCMZ+O8cQDy83v805Rzn07Fkuwnw1stZPn9K2DHUd2ztsQms9H75u06Ax1eN9u7j+/N8zezYac/J/Z8j7+n3/UPv5rUpaOrEcPsIID/Usmp3HZnOAF8+PcrnTgrbvXitZ/e+kh31+dMv1g9cPV1BO5qqT7zEIWrdoLhtYbJ9BBC746ak62GolqVTAfskq/KzX31hfN22MtUR4FkzonzFzKjd59f7HonKthLg5GChoQtT1bb2gZTj5y+7q6MpAovNuCTiqotqKQFoJBX1Zut7n84mTwjxD587by0lxci1k2ZEmAxrbn5PywlAI22i1yVZuaAe3lObGBFBdvxe1tHV37H/NfdXU1pSAKpoRyUv1yNFyLzx2jh/+4n7gxMpsDOnRTydCSxdMo6/P+ztTKBlBaAR+2moyM9uyPDi+Qm7PsjwI2TILTYpliuXpVynAyc7+EbOvvsjg5lcT5EZQVbO3ZmAvSGVxkDODrwS3zYCUIsbBFAQwLgXEiLAPBGEFGSeDDJgqAEKAhj3QkIEmCeC2jUFAQAAAAAAAAAAAAAAAL5Wxb/G77YoxX27MQAAAABJRU5ErkJggg=="
                className="w-24 ml-6"
                alt="CSS"
              />
              <p className="text-center text-white font-semibold">JAVASCRIPT</p>
            </div>
            <div className="div w-[150px] h-[130px] rounded bg-[#000016E6] m-2 flex flex-col hover:bg-black">
              <img
                src="data:image/png;base64,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"
                className="w-24 ml-6"
                alt="CSS"
              />
              <p className="text-center text-white font-semibold">PYTHON</p>
            </div>
            <div className="div w-[150px] h-[130px] rounded bg-[#000016E6] m-2 flex flex-col hover:bg-black">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHmUlEQVR4nO1ZaYwUVRAexVu8ookab0UNGg+MGjWKGu8Ddue9HRPUeESDJiaaqOCqIWA84n0fQcGIBpQ1ookRgrjperuI1woeq8DuVPXuKoKIB3iD7ph6Xd3zZrZnugdbf/GSzhz9jqp6VV999V4ut6ltav9fG7tw6Q7a4H0aaLkC/F4BdSvAZwoddGoj80wulTZXUDxfG5qpgQYU0Hpt6CsF9HDB6x7+nwh/YdeK7TTgJ9pQKe5RQF0K/NOT5sl7/rkK8Ita82hDH547t2frzBVQhu4OFsAv855/QvOCr3flT2XwXmXop0gRgzMKC3Cn6vGXe/42vFuOwqs14G3N4I/kdwWDxytAkjluzVT4QltpmDa4xi7uFY+tfs/KaEMPKoO/B8IhFQCPiJSH4sHK4BJ595s2NCnOVbShs+0aQAOZKpA3fceI9ZfW61fw/KO1oWJgRfo5b/ACdisFtFYEW6478MiaE5RKmymDK7lvYSEdmpkC2iuOE6Hakvo2ef7OCvANcZP10a4Yeu2S93t2TBqvDM4VN2vKTAEFdIMI8XyqAdaS1Ob4+5uMPKnWMjibx7QYuubfyl2eFPBGEeTJNP3Z/yO3CYLyF3bDVGsZnCHuel0uq9YCdJkE4AtJfQvvDOzFQSg+/6oCein4jiuaTO8+iQpA0L/F4NWZKaA9/zRRAOoK3929lQL6IMwLnDsEPt8XF/woCeOVoU7umwcam5kCqrP/QNnWvnr9NOAjobV5J8L/86ZvT8604k6PJcyxwirQSUdlpsD4rq4tBVH+Yjrh5gd2i4KHJytDEzTgoCg6L0hwFU+ALoCDCmgij8l7PXu7wS3ZfpDX4Z3LZdl4+0WAxxmNlMHFCujPOpQg7fNHQEPoOU6G4n7dmQjN1gmSEb7gokoFBzL0HVss9HG2NlMEtrICGi/PRPtfQDusIYIxuKYGr1qrgabpjuIZDMkNC35xZ/8uCvAmDYhDFgD8VQNdz5OPeQd354QTUoSC1zsiae7m9p6DhE7YQOX4yAOexVAdbyT8kiHVdd2azfqgwSmM284kRQV4e0AT8Ef7n9AB6e+LYrelNZAy2CrC+TwH/8fUQaB3XR7wOAU0WQH1Ozv9E8dZTRTT4I+yXKWs+Tzm7G6QKUPT5f2D9jfQ5NBnGULd+ZisKUOj+akmbhYUDH0m60ypYrsvVpJIatJA7Y57fVro6Dus0iIenulYvUcZOifWch6eKdb+hhGECVswqVMHBISs1bqak4k5Dlx/5iJIyzs3+XG9ELc2u1vo0pa+A54iluod4bDFafUSjdDq0GVscaMA58e7R2zAT6jYdUNviRJCtan/VM/boub6iwa25R2SdX8omL4DmOe8LJPPShPxFlHKAT3o1geB21TET7UCP186f+X2kQIdeKQC/NvZqdak9WWHLeFj2sEKfG9/tNN+iYOleAlRhLlOhXKGRififrj1oRJGLGrw93Hest3SyNDk+ftLvKzJaaBv+QeXdo0qUF0fbIwCqmzN9S79qCsD+CNlvlW86PMizPQ0gy1lqOFC7B5hYMcLT+tC2IwqPQjph31/T9L6HCNlWkLTcoVO3DfKiIzldeLADeIyDNLbNRUckmHxRrevNjhP3GdR6BKugkPW97qHa4NzZMdWMxIGEwGe4mTBBcw+68KooVUujNqUH7ZSaTNt6GZ3J/i7Fd4xTkTRDdfOzFY549o64JK4tVuACmFiswgE/okVHZi+KsBlot2fytBTurP38Crr2kTGB1BiwSky4RfViYzdiQ3DrLPaqjUS2YQwgUYWbysNEy4GDlItqRmvwaJ0DzNEZ8AiZfAqthJrHriaP2oIlTA0KXbSulCMZSrh+XtoQxv4YevyfBVUAmgtw2y1oeIXaKf9NNATbjYNg02Y4kVc9wYVGI4JYbC5Aw9JBYHleZuYOPJOaeNfGx6pVD1F3h1Gv1yjjY9BAjqMEFLmqoct1iNnm6zkxxrwTg10Cy8a0ungN7ZaOh2Vl/hXWH3FPH8wRDOlSXuakdiscEK2+JiEy8tEzE/zAFdg1BsIjPdKYH+3UXVArRb4Om1gq7nMkr8zM+QjQSFwgZsZ9LTBqRUP4OuO4HfxmGbwRzK/cddi4RthBrlGMh9bql4/DXi/KLDSPUKxfm6oJ+Iv9eYw+J6sFcuIN6o5h67tSVlSAy0M4Y5RjaGQGatYviepslJCLrM9mTN4VdqjxQAOw/jAOZwzIvSqyitxzV6gNFjhJbaI4wM+kqY/CxqVnxHi+OelGmvoIVH+jlxWLcySfPSRdow29LRD0tobONx9NvMdaPGKV8bR5zqHYNZtQposuzA7zf2XBnwl6O9fkZkCktrtBUW9fpbgAb0buQ1nVyaAQOvELZbWveDI2d22HIlPJjJTQMiXvQfje7FYmsvZVqo7psV81hO9D3LF50L8fmP3iNuNgocnh1SZ0SuXZVOAD4RQyFSYsZ25D1/I2Qu7cpJ6O+4YXQryqY5r8ZhJ2vSeZBOiveQLyVvAUDNtjN98/lOnWCG+ikqiAEKPa16zKoOLq7NzZo2vT7XBRy3OW0ZpqfRM1eE3N7Ll0ZmroVlidT7g7WeYTnWEuKltarnM2j+CWZiepxkhCQAAAABJRU5ErkJggg=="
                className="w-24 ml-6"
                alt="CSS"
              />
              <p className="text-center text-white font-semibold">REACTJS</p>
            </div>
            <div className="div w-[150px] h-[130px] rounded bg-[#000016E6] m-2 flex flex-col hover:bg-black">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAMv0lEQVR4nO1dCXAUxxUdp5zDSSqJc1RsNLPiBmN8IBx824XP2PFZsU1hl6+yTexgUPcuSEIcQgghYME32MR4u1dCQhJG4pLAskBcMocEAiEBPggYm8NcSlXiVOVwOvV6Z1azq9UisbMrrXZ+1S+G2T5G/013///79x9FiYSyai52ZBReGk/ca6z3V0o8U7KTDVYpf1ej7EuNsv9plIt4Y5XwE7915f9EiS8SF2mUTdcI+09XC1CzAgTKN//mz6U/VeKFVMreMP0BBzXKiEY8tzpcfHi8sEq9y4JGQm3/cQU/U7o7qansEdOb8y7mfiUOKUlOnb6/w+H0xg8IKuHNvgdnlZiKlDilJB0Ah4uLl1Y1ieRWEOqxQCvdkVTqucp4a5LoB9cocUxJJgDczS1tQFDp+79Uuhs5CHtaf8BjSpxTUhAA4DGrTSBQvqvbgaA5vU7j4ZQeCIA7GATCdncrW0GlbKI+Be1UeigA7uYW8ac1TSLZlW9oSA3dBoREAcAtQWgOAOFyZ+Gvu/qZEwoAN0CoMIFA+J4uByHRAHA3t4ixaw+K3hN8IKiU7U+ewC7rsodORADcAGGdCQTCDzhIweVd8tCJCoBbgvBp14OQyAC4m1vEqx+1giB9YBMX94rpQyc6AO6uBsEGoEWCMK7qU9HHAIGwT1XKk2wAYjQCQoJA+WdJ4wpUJdpkj4CWABBI9Reib1qB4Ts6nJzKetsAxGgEGEzXm0Ag/IjDld9HiRbZI6Cla0HoUQAQttDYDYtkBMR0OupJAKjEk2VsLmXv+sYSEKI+EjTCn9B9IsuUOKfLXAVDDADuXlBtCQBg54ZDol/aEl07Yl86yAd9LX3wZKd32OVjFv1Y6SJSaeklMh4pld+mUs+TDsLHaISnOihPB8trwseoqXw0yvhil0ovCdkWQTwTFw7KxYOLt1gHQs0h0S9dB4Hwo9oE3s+SP77/uDd/qDnZc1Fd6c2UlfU9GUJCWJpK2QqNsM81wr/rfOwP+6+sS3k5plEH8aSg7b7jFw9VCffHNjmoVwxILxT9MyLn3hN9U5FurP1TI97rlEhJvm2++a0q4sbC9ePK76MSNkul7Hh7Qk12ecXgycVi6LRlYnjuCj+n5JTLe4MnL/WHm4QOxmLHVcpyHa7Ff9AoOx314C/Cirv9IpycxX6kEZajEvYv88Nfnb1c3Ldoo3jmwwY5x06vOyHm7Dt33qlgTtM5kbXzhNRQnl7WIO57b6O4evqHwYJBXzO0VM8oNZWVqITVqoRvs4wp+7s+FWVGLCCNsJd1NWu9YjENH7Po+xphGwzB4C0eVbRTTNtxzLK52eBp24+JJwp3iiunlZoj46qjEWSmEbZDBzot4sawmKmEje3l9A5ULKZeTjbZ0Msh+Dn7zlou+DYjZN9ZCQTmfl+sE5/UrQEAJY33DBiSVfoDxWJSCZMRdwMzl0Zd8ME8aNJSfV3wNHXzEcAf1eezQsVi0gj7xJgObn99nciLwQjIazwjbnt9nVlbqe3mAERvEXZQzs2LIzY9bn9jnUjfcsRywaNNgNzbFaglOSjjCQuARpgHbfcx688695lQIK7NKRN3L6wWL6xsFJnbvuqwsCfVHpV1UBdtmHazWts3+iTMoyQ6APcsXC/GfnRQDMsp8y+O7bHDmS/BgQANAwjXuIffwtflYtjMcvHqRwdlnzYApBUA/xy994x4rmyPuHlehRiYWSR99xdqCCHec+CkItkW2sxrbF1jbACCRoA7zJSSXX9CvFK5XzxWsE3ct6hG3PFWlbj1tbXixrlrJOP6jrerpNH1WMF2WRZ1wrVpA9AJANxRYBsAAEBZJQC4ZX5lzAG4eX6lsQZUJuwirBJ+AG33zyiKOQDoUxfS/sQFIJWtNxZM+GjSNluv/wdz2qYjbf1Bib4GaCYeOrVELqTZ9dZsGYKn138j2zQL3mQJ23bA4MzikPp/37QlPmNsQbUYVbRDvFJxQGTWfiVdzsFCxj38hjIoe9c71eLaGctlG6HsAewr2ACQVi0oZ/cpce+7G6RhFelGSHuMna/fv1cjZu4+ZWtB4dTQ7PqT4okl28WI2avEoMyl5mNDHTfCXPli0ORicf3s1WLUkh1iRtCUZquhnbQD5jb5HGovV+wXzy3fI0YX1Yk/5n8iGde4h9/St3xp2wGdXYTvsQ2xLtOCNqHt6+esjrkdgD71RXhjwqqhqp6DAp7M3IZTMRN+zu7Tsk9dSM0JC4BGPWvM/v8ni+uiLnz0YQhfComy1YkLAGlriCVPyBc3uSvE8+V7A9zHF8poA23BJd07lDZlG2JcpMwsE/3TC0MaTIi5RIwQXM73L6oRo4vrxIsrG8VLa5pEavXnknGNe9CGUAZlUQd10UZwu/3SC0VKTpkNgBakBSFVACLdQm0hRsq9JxSI4TPLxctrmmw7oCNq6KStR8XDbKu4Ye4aMWRqqXQphAs79I8al2/UoA7qPsK2ioytR9u0bxtiEdgBMxtOiak7jglXzWHJuMa9zrRhA2AbYt1HC7q7Cyxh9JnwWpBKeR6EMGRqiYxojpXw0deQKSWGITYrYe2AXk7vQI3yb9E+wkeeLKmPqkWMdQJ9oC/97f+HSvP7JywAIIeT3YlUwn6LeGK+GPnWx+LZ5Q0i85OvxNwQmy8dZdTNrD0q2xr5VpVs22QBH0+ifKQSBYorAEDJqewXKmWvqYT/rc2u2MQCcd2slXKH66EPtsg3GAJ9YeU+mecNjGvcw28oc9c7H8s6qBvcnkp5i0rY/L7pi36uRIniDgCDcBBQo/wZjbIilfKTVhlhcoQRXogUnLE4bBi3AASSuAgnDTXifRhHfTTK3lcJW61SVqdSfggHo1XCzknGNeWH8Iwog7Ia5ZM0J3/I8iOjiQNA/JINQM8CwCN1dXlWl/BvbeYdkYE816wSNjtyNINy7tvMOyEDb+TpHeRihvjN9ELpZ7d57Xll4N/bsOKcsLEIQ6+Otb/GHacMWVmuBdkAtPQ8ANI2HZbpCLB9iFPyd7z9scxYe74DeI/wWjEib5V0qF2jb1c+X7ZH5O450249uCSQsuDxJdvtEQCBjF5a58/ZH8w4hhScF2LW3jPi/r9sDLsrdsWUYhkdFwoAuCpQ5ursD20AXll7wL9ZnpJTLn04SKyBkzKGMJGJyuzFHJHnG9Y+IS6XIYkvrGiU9eDbN/w+aBftBQOApB+y7nQbADltQBi3zK9skx8CUwkcasZ9eDQNYDBiniqpD5k1BT7+m+ZV+EEIHgk2ALogpmz/2v8mp3cgkNaYOsD46E64sgDt5nk+sAZkFAXsE9sAGAvv5iN+gebtPXtegSK6AWUR19+RhR3HUw093Lzg2gCYpgpj/nduOBRWmOOrPvNNPS5vp3IIPeqtlfWuMs33NgAmARkL6vDcFWG3IKFuotyI2SsveJQhUZMNQJCA6IZD/lMvV0wplosu5vqpurAMHvlmlSzzwOLNnQIAC7fRPkaRDUAIIb24qqk1zaM/FtQrDbPZjT6D6oa5vhj+xy7AeEICP9RFPzYA7Qhp2s7jMlXZje4KqbUYQCCvD44kwcLF/xGi2FkAEICLurA5bAA6ILA5+87KZBwGCPi6HSxfXAOI9uudkxHT+MqFeaE32knTkz/Zi3AH39xb9bce/0LvxzWCbdvz8yA83dCUEB1hFjZGgWG02QB0EIBndcMLp9phSBkuBrzlocrDljC0KgnCikbpqvD5lDbaamh7c3970cyji+sCfDYPe7bqo6BAejRD1ckN8hX5wMiXgV1GGXsE6IKYvO1rKZwh00rFjPqTAYKE9nPNDN/be69u+QIoI8cDVNb23BcAAb8bAMC1bf49bgEwPmebkrvCkoebXnfSr34OyymTH8bJ3nVSZh831E443cyCnrjpsN+9APAeeH+TLI96GE1YsHGqPnAEeGXUXPDUhn0HgBrMHUmL3FGGgSkBoMxl2QedkdzCqgcM+GAmbXsu7Ollu9vUydhy1D+3h2OkLfudPh1h0yZ4sW6PB2UWnzfNWWdtEMguYgDU8flD/Sqdhfl8nDV/lfnezIfo8OaY1clQqupTJbtEyszyAOFhoUa+UVjYKJfbcFo8vmSH7MNcH+CEO0MWbIlfCJvdIBrhV0YMgASBsibDfx9JtHIozm04LXV1TCedrYdzZFhTOpNzGjYCprRgtuJ8AmRjuMM1wvYpVpGMz/RvF26MSZJtd5wxZBIwwojnQcVKUgl/3Wgcbl5s+2HbMNTblEhM138hVeerspb5hY9Qe8V6EhephE3VCPN//sNmHiADlfJ/q5RPgayUaFGv1MWDNMIWICT8wr7t0sOY8O98smALovGNhfCUVXOxI6Pw0kRmJcIvcPwfRQtcEdLrPPwAAAAASUVORK5CYII="
                className="w-24 ml-6"
                alt="CSS"
              />
              <p className="text-center text-white font-semibold">SQL</p>
            </div>
            <div className="div w-[150px] h-[130px] rounded bg-[#000016E6] m-2 flex flex-col hover:bg-black">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABd1BMVEUAAAAAzMwJs9UAtNIAgP8AttsItdYHttUHttUHttUHttUIttQItdUAquMAqv8Ht9UGttUHttUHttUAv98HttUHttUNs9kHttYHttULsdMHttUHttULtdUHuNUNvNcHttUHttUGtdUHuNYHt9gGtdcIttYHtdUHttUJs9kGtNYIt9UGt9UHttUGtNMGt9UIttUHttUItNQGt9YIt9MHttUHttMHttUItdUHtdUGttYHttUHttUKutgFuNQMttsHttYAu90GtdQHtdUHttUHt9YHt9UGttQGt9QAqtUIttYHtdUHttUIttUHttUHttUGtdYJtdUAs8wJttEGttUHtdYGttQHttUHt9YHtdUHt9UAudEHttUHttUGt9MIttYHttUHttUAv9UAuNUItdQHttUAttsHttUIttUItNIIt9UIuNUHttUHtdMHs9YGttUA//8Gt9MGtdUHttUIt9UGttYHttUIt9UHttQIt9cFt9QFuNUHttX///+kY16tAAAAe3RSTlMABR4RAg5dseP96adhCQNn7OdsCK66FLPTF3TWGCQT8fmfSyctXsLYGyyGeNUpVe7hQVhAmSPcyUh2zcMaLxVpD1Pe4kpOoVkGgrTU7eW8fDcKHMZFff6Uu74L389SiOTADBKD7wf6yiJcPfZMJZ0BLk+WqXv1zIkgNTaVU02NAAAAAWJLR0R80bYgXwAAAAd0SU1FB+YDBxISEKxfB/8AAAFdSURBVEjHY2AYBSMaMDIxsxCtmJWNnYOzurqai5uHlwjlfPwC1XAgKETQHmGRahQgKoZfPYt4NRqQkMSrQaoaA0jLIKRl0dXLySsoKimrqKoh61DXgElraqFr0NbRhTD09JF0GBhCBI30jdE1mDDDWKZmyJaYaytZWFpVW2MEqQ2CbSON4RsFW7z+t7NC12BPIEoc0IJYm3CsOzohlDu7EJOs+FzdwHqcud090OVUPL28fXyl/fwD0CQCbYKEMY0KMEdYHhxC2OrQMGTfhYULE1CvhR6AEYF41buGYcRRZBRCGiOBe0RXx/jHusfFI+tISIRJJyWja1BN0QPTqaFpSDrSM6Ap1DsTXYOiJoyV5YOkI1sxJzfDIk/BiRFNfb4Kgl3AhZmBCvH6X9kZXX0RgRBm8kZVX8xIKA49SkqRcoA/HxEpzk67jBMc4dLlFcQWfomVIUpVzKM1xogGAOUwviqFjR1CAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAzLTA3VDE4OjE4OjE2KzAwOjAwxkxJJQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMy0wN1QxODoxODoxNiswMDowMLcR8ZkAAAAASUVORK5CYII="
                className="w-24 ml-6"
                alt="CSS"
              />
              <p className="text-center text-white font-semibold">TAILWIND</p>
            </div>
            <div className="div w-[150px] h-[130px] rounded bg-[#000016E6] m-2 flex flex-col hover:bg-black">
              <img
                src="data:image/jpeg;base64,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"
                className="w-24 ml-6 mt-2 rounded"
                alt="CSS"
              />
              <p className="text-center text-white font-semibold">DJANGO</p>
            </div>
          </div>
        </div>
      </section>

      <section id="education">
        <div className="edu w-screen h-screen mt-2 flex flex-col bg-gray-200">
          <h1 className="text-center text-black font-bold text-[30px]">
            <i className="fa-solid fa-graduation-cap"></i> My
            <span className="text-purple-500">Education</span>
          </h1>
          <p className="text-center p-2">
            Education Is Not The Learning Of Facts, But The Training Of The Mind
            To Think.
          </p>
          <div className="d1 w-screen h-[250px] flex bg-white md:hidden lg:hidden">
            <div className="d1m w-[50%]">
              <Image
                src={p1}
                className="h-[240px] p-2"
                alt="p1.png"
              />
            </div>
            <div className="d1n w-[50%] flex flex-col gap-10 mt-6">
              <h1 className="text-blue-600 font-bold">HSC SCIENCE | Engineering</h1>
              <p className="font-serif">Adamjee Government College</p>
              <p className="text-green-400 font-semibold">2019-2021 | Completed</p>
            </div>
          </div>
          <div className="d2 w-screen h-[250px] flex bg-white mt-1 md:hidden lg:hidden">
            <div className="d1m w-[50%]">
              <Image
                src={p7}
                className="h-[240px] p-2"
                alt="p7.jpg"
              />
            </div>
            <div className="d1n w-[50%] flex flex-col gap-10 mt-6">
              <h1 className="text-blue-600 font-bold">
                Computer system Engineering
              </h1>
              <p className="font-serif">Ned University Of Engineering</p>
              <p className="text-green-400 font-semibold">
                2021-2025 | Currently Enrolled
              </p>
            </div>
          </div>

          <div className="con3 w-screen h-screen lg:flex hidden flex-col items-center justify-center md:flex">
            <div className="mai w-[70%] h-[40%] mt-4 flex bg-white rounded wow animate__animated animate__fadeInRight">
              <div className="img1 w-[30%]">
                <img
                  src="./assets/adamjee-99eb119a.jpg"
                  className="p-2 h-[250px]"
                  alt=""
                />
              </div>
              <div className="con w-[70%] h-[280px] flex flex-col gap-10 pt-4">
                <h1 className="text-[30px] text-blue-600 font-bold">
                  HSC SCIENCE | Engineering
                </h1>
                <p className="font-serif text-[20px]">Adamjee Government College</p>
                <p className="text-green-400 font-semibold text-xl">
                  2019-2021 | Completed
                </p>
              </div>
            </div>

            <div className="mai2 w-[70%] h-[40%] mt-4 flex bg-white rounded wow animate__animated animate__fadeInLeft">
              <div className="img1 w-[30%]">
                <img
                  src="./assets/ned-c384f650.jpg"
                  className="p-2 h-[250px]"
                  alt=""
                />
              </div>
              <div className="con w-[70%] h-[280px] flex flex-col gap-10 pt-4">
                <h1 className="text-[30px] text-blue-600 font-bold">
                  Engineering In Computer System And Information Techonology
                </h1>
                <p className="font-serif text-[20px]">
                  Ned University Of Engineering And Techonology
                </p>
                <p className="text-green-400 font-semibold text-xl">
                  2021-2025 | Currently Enrolled
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="proj w-screen h-[300px] overflow-scroll lg:overflow-hidden lg:h-[600px] bg-purple-900 flex flex-col">
          <h1 className="text-center text-[30px] text-white font-bold">
            <i className="fa-solid fa-laptop-code"></i>Projects
            <span className="text-yellow-300">Made</span>
          </h1>
          <div className="all w-screen h-screen grid grid-cols-1 lg:grid-cols-4">
            <div className="p1 w-screen h-[230px] lg:w-[350px] lg:h-[200px]">
              <a href="https://sherry699.github.io/html-tailwind-microsoft-clone/">
                <Image
                  src={p5}
                  alt="microsoft.png"
                  className="h-[200px]"
                />
              </a>
              <div className="h-6 w-screen lg:w-[350px] bg-yellow-400">
                <h1 className="text-white font-bold text-center">
                  Microsoft Clone
                </h1>
              </div>
            </div>
            <div className="p2 w-screen h-[230px] lg:w-[350px] lg:h-[200px]">
              <a href="https://sherry699.github.io/Usability-hub-clone/">
                <Image
                  src={p9}
                  alt="Ubc.png"
                  className="h-[200px]"
                />
              </a>
              <div className="h-6 w-screen lg:w-[350px] bg-yellow-400">
                <h1 className="text-white font-bold text-center">
                  Usability Hub Clone
                </h1>
              </div>
            </div>

            <div className="p3 w-screen h-[230px] lg:w-[350px] lg:h-[200px]">
              <a href="https://github.com/SHERRY699/Psl-Management-System">
                <Image
                  src={p8}
                  className="w-[500px] p-1 h-[200px]"
                  alt="PSL.png"
                />
              </a>
              <div className="h-6 w-screen lg:w-[350px] bg-yellow-400">
                <h1 className="text-white font-bold text-center">
                  Psl-Management-System
                </h1>
              </div>
            </div>

            <div className="p4 w-screen h-[230px] lg:w-[350px] lg:h-[200px]">
              <a href="https://sherry699.github.io/Login-page-using-html-and-css-responsive-/">
                <Image
                  src={p4}
                  className="w-[500px] p-1 h-[200px]"
                  alt="PSL.png"
                />
              </a>
              <div className="h-6 w-screen lg:w-[350px] bg-yellow-400">
                <h1 className="text-white font-bold text-center">Login Page</h1>
              </div>
            </div>

            <div className="p4 w-screen h-[230px] lg:w-[350px] lg:h-[200px]">
              <a href="https://sherry690.netlify.app/">
                <Image
                  src={p6}
                  className="w-[500px] p-1 h-[200px]"
                  alt="PSL.png"
                />
              </a>
              <div className="h-6 w-screen lg:w-[350px] bg-yellow-400">
                <h1 className="text-white font-bold text-center">
                  ReactJS Movie App
                </h1>
              </div>
            </div>
            <div className="p4 w-screen h-[230px] lg:w-[350px] lg:h-[200px]">
              <a href="https://sherry699.github.io/Login-page-using-html-and-css-responsive-/">
                <Image
                  src={p6}
                  className="w-[500px] p-1 h-[200px]"
                  alt="PSL"
                />
              </a>
              <div className="h-6 w-screen lg:w-[350px] bg-yellow-400">
                <h1 className="text-white font-bold text-center">Login Page</h1>
              </div>
            </div>
            <div className="p4 w-screen h-[230px] lg:w-[350px] lg:h-[200px]">
              <a href="https://sherry699.github.io/Login-page-using-html-and-css-responsive-/">
                <Image
                  src={p6}
                  className="w-[500px] p-1 h-[200px]"
                  alt="PSL"
                />
              </a>
              <div className="h-6 w-screen lg:w-[350px] bg-yellow-400">
                <h1 className="text-white font-bold text-center">Login Page</h1>
              </div>
            </div>
            <div className="p4 w-screen h-[230px] lg:w-[350px] lg:h-[200px]">
              <a href="https://sherry699.github.io/Login-page-using-html-and-css-responsive-/">
                <Image
                  src={p6}
                  className="w-[500px] p-1 h-[200px]"
                  alt="PSL"
                />
              </a>
              <div className="h-6 w-screen lg:w-[350px] bg-yellow-400">
                <h1 className="text-white font-bold text-center">Login Page</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="footer w-screen h-[50px] bg-purple-900 flex items-center justify-center gap-5 text-xl mt-1 lg:mt-0 text-yellow-400 border-t-2 border-yellow-400">
          <a href="">
            {" "}
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="">
            {" "}
            <i className="fa-brands fa-linkedin"></i>{" "}
          </a>
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default page;
