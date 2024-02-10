"use client";
import React, { useState } from "react";
import he from "he";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";

export default function Form({
  fullName,
  profilePicUrl,
  workDesc,
  selfDesc,
  cvLink,
  aboutMe,
  numOfProjects,
  yearsOfExperience,
  numOfHappyClients,
  totalCustomerReviews,
  location,
  mobileNumber,
  facebookLink,
  githubLink,
  linkedinLink,
  twitterLink,
  email,
  skills,
  experience,
  projects,
}) {
  const { data: session } = useSession();

  const userEmail  = session.user.email;


  const download = async () => {
    let output = he.decode(
      document.getElementsByClassName("codefile")[0].innerHTML
    );
    const element = document.getElementById("a1");
    const blob1 = new Blob([output]);
    element.href = URL.createObjectURL(blob1);

    let result = await fetch("/api/mailer", {
      method: "POST",
      body: JSON.stringify({
        userEmail,
      }),
    });
  };

  const template = localStorage.getItem("template");

  return (
    <div className="Code">
      <a id="a1" download="portfolio.html" target="_blank" rel="noreferrer">
        <button
          onClick={download}
          className="p-4 dark:hover:bg-orange-400 hover:bg-purple-400 bg-orange-500 dark:text-white dark:bg-[#0ea5e9] text-white font-bold rounded-full m-4 mt-10"
        >
          <FontAwesomeIcon icon={faDownload} className="fas fa-download" />
          {"  "} Download Code
        </button>
      </a>

      {template == "modern" ? (
        <pre className="codefile">
          {`<!DOCTYPE html>
      <html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
      rel="stylesheet">
  <style>
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
      }

      :root {
          --color-primary: #191d2b;
          --color-secondary: #27AE60;
          --color-white: #FFFFFF;
          --color-black: #000;
          --color-grey0: #f8f8f8;
          --color-grey-1: #dbe1e8;
          --color-grey-2: #b2becd;
          --color-grey-3: #6c7983;
          --color-grey-4: #454e56;
          --color-grey-5: #2a2e35;
          --color-grey-6: #12181b;
          --br-sm-2: 14px;
          --box-shadow-1: 0 3px 15px rgba(0, 0, 0, .3);
      }

      .light-mode {
          --color-primary: #FFFFFF;
          --color-secondary: #F56692;
          --color-white: #454e56;
          --color-black: #000;
          --color-grey0: #f8f8f8;
          --color-grey-1: #6c7983;
          --color-grey-2: #6c7983;
          --color-grey-3: #6c7983;
          --color-grey-4: #454e56;
          --color-grey-5: #f8f8f8;
          --color-grey-6: #12181b;
      }

      body {
          background-color: var(--color-primary);
          font-family: "Poppins", sans-serif;
          font-size: 1.1rem;
          color: var(--color-white);
          transition: all 0.4s ease-in-out;
      }

      a {
          display: inline-block;
          text-decoration: none;
          color: inherit;
          font-family: inherit;
      }

      header {
          min-height: 100vh;
          color: var(--color-white);
          overflow: hidden;
          padding: 0 !important;
      }

      section {
          min-height: 100vh;
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          padding: 3rem 18rem;
      }

      .container {
          display: none;
          transform: translateY(-100%) scale(0);
          transition: all 0.4s ease-in-out;
          background-color: var(--color-primary);
      }

      .active {
          display: block;
          animation: appear 1s ease-in-out;
          transform: translateY(0) scaleY(1);
      }

      @keyframes appear {
          0% {
              transform: translateY(-100%) scaleY(0);
          }

          100% {
              transform: translateY(0) scaleY(1);
          }
      }

      .controls {
          position: fixed;
          z-index: 10;
          top: 50%;
          right: 3%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: translateY(-50%);
      }

      .controls .control {
          padding: 1rem;
          cursor: pointer;
          background-color: var(--color-grey-4);
          width: 55px;
          height: 55px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0.7rem 0;
          box-shadow: var(--box-shadow-1);
      }

      .controls .control i {
          font-size: 1.2rem;
          color: var(--color-grey-2);
          pointer-events: none;
      }

      .controls .active-btn {
          background-color: var(--color-secondary);
          transition: all 0.4s ease-in-out;
      }

      .controls .active-btn i {
          color: var(--color-white);
      }

      .theme-btn {
          top: 5%;
          right: 3%;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: var(--color-grey-4);
          cursor: pointer;
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
          transition: all 0.1s ease-in-out;
      }

      .theme-btn:active {
          transform: translateY(-3px);
      }

      .theme-btn i {
          font-size: 1.4rem;
          color: var(--color-grey-2);
          pointer-events: none;
      }

      /*Header-content*/
      .header-content {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          min-height: 100vh;
      }

      .header-content .left-header {
          display: flex;
          align-items: center;
          position: relative;
      }

      .header-content .left-header .h-shape {
          transition: all 0.4s ease-in-out;
          width: 65%;
          height: 100%;
          background-color: var(--color-secondary);
          position: absolute;
          left: 0;
          top: 0;
          z-index: -1;
          clip-path: polygon(0 0, 46% 0, 79% 100%, 0% 100%);
      }

      .header-content .left-header .image {
          border-radius: var(--br-sm-2);
          height: 90%;
          width: 68%;
          margin-left: 4rem;
          background-color: var(--color-black);
          transition: all 0.4s ease-in-out;
      }

      .header-content .left-header .image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.4s ease-in-out;
          filter: grayscale(100%);
      }

      .header-content .left-header .image img:hover {
          filter: grayscale(0);
      }

      .header-content .right-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 18rem;
      }

      .header-content .right-header .name {
          font-size: 3rem;
      }

      .header-content .right-header .name span {
          color: var(--color-secondary);
      }

      .header-content .right-header p {
          margin: 1.5rem 0;
          line-height: 2rem;
      }

      /*About*/
      .about-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding-top: 3.5rem;
          padding-bottom: 5rem;
      }

      .about-container .right-about {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 2rem;
      }

      .about-container .right-about .about-item {
          border: 1px solid var(--color-grey-5);
          border-radius: 5px;
          transition: all 0.4s ease-in-out;
          box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.1);
      }

      .about-container .right-about .about-item:hover {
          cursor: default;
          transform: translateY(-5px);
          border: 1px solid var(--color-secondary);
          box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.32);
      }

      .about-container .right-about .about-item .abt-text {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
      }

      .about-container .right-about .about-item .abt-text .large-text {
          font-size: 3rem;
          font-weight: 700;
          color: var(--color-secondary);
      }

      .about-container .right-about .about-item .abt-text .small-text {
          padding-left: 3rem;
          position: relative;
          text-transform: uppercase;
          font-size: 1.2rem;
          color: var(--color-grey-1);
          letter-spacing: 2px;
      }

      .about-container .right-about .about-item .abt-text .small-text::before {
          content: "";
          position: absolute;
          left: 0;
          top: 15px;
          width: 2rem;
          height: 2px;
          background-color: var(--color-grey-5);
      }

      .about-container .left-about {
          padding-right: 5rem;
      }

      .about-container .left-about p {
          line-height: 2rem;
          padding: 1rem;
          color: var(--color-grey-1);
      }

      .about-container .left-about h4 {
          font-size: 2rem;
          text-transform: uppercase;
      }

      .about-stats {
          padding-bottom: 4rem;
      }

      .about-stats .progress-bars {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 2rem;
      }

      .about-stats .progress-bars .progress-bar {
          display: flex;
          flex-direction: column;
      }

      .about-stats .progress-bars .progress-bar .prog-title {
          text-transform: uppercase;
          font-weight: 500;
      }

      .about-stats .progress-bars .progress-bar .progress-con {
          display: flex;
          align-items: center;
      }

      .about-stats .progress-bars .progress-bar .progress-con .prog-text {
          color: var(--color-grey-2);
      }

      .about-stats .progress-bars .progress-bar .progress-con .progress {
          width: 100%;
          height: 0.45rem;
          background-color: var(--color-grey-4);
          margin-left: 1rem;
          position: relative;
      }

      .about-stats .progress-bars .progress-bar .progress-con .progress span {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background-color: var(--color-secondary);
          transition: all 0.4s ease-in-out;
          width: 60%;
      }

      .about-stats .progress-bars .progress-bar .progress-con .progress .html {
          width: 80%;
      }

      .about-stats .progress-bars .progress-bar .progress-con .progress .css {
          width: 95%;
      }

      .about-stats .progress-bars .progress-bar .progress-con .progress .js {
          width: 75%;
      }

      .about-stats .progress-bars .progress-bar .progress-con .progress .react {
          width: 60%;
      }

      .about-stats .progress-bars .progress-bar .progress-con .progress .node {
          width: 87%;
      }

      .about-stats .progress-bars .progress-bar .progress-con .progress .python {
          width: 70%;
      }

      .stat-title {
          text-transform: uppercase;
          font-size: 1.4rem;
          text-align: center;
          padding: 3.5rem 0;
          position: relative;
      }

      .stat-title::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          width: 40%;
          height: 1px;
          background-color: var(--color-grey-5);
          transform: translateX(-50%);
      }

      /*Timeline*/
      .timeline {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 2rem;
          padding-bottom: 3rem;
      }

      .timeline .timeline-item {
          position: relative;
          padding-left: 3rem;
          border-left: 1px solid var(--color-grey-5);
      }

      .timeline .timeline-item .tl-icon {
          position: absolute;
          left: -27px;
          top: 0;
          background-color: var(--color-secondary);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
      }

      .timeline .timeline-item .tl-icon i {
          font-size: 1.3rem;
      }

      .timeline .timeline-item .tl-duration {
          padding: 0.2rem 0.6rem;
          background-color: var(--color-grey-5);
          border-radius: 15px;
          display: inline-block;
          font-size: 0.8rem;
          text-transform: uppercase;
          font-weight: 500;
      }

      .timeline .timeline-item h5 {
          padding: 1rem 0;
          text-transform: uppercase;
          font-size: 1.3rem;
          font-weight: 600;
      }

      .timeline .timeline-item h5 span {
          color: var(--color-grey-2);
          font-weight: 500;
          font-size: 1.2rem;
      }

      .timeline .timeline-item p {
          color: var(--color-grey-2);
      }

      .port-text {
          padding: 2rem 0;
          text-align: center;
      }

      .portfolios {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 2rem;
          margin-top: 3rem;
      }

      .portfolios .portfolio-item {
          position: relative;
          border-radius: 15px;
      }

      .portfolios .portfolio-item img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 15px;
      }

      .portfolios .portfolio-item .hover-items {
          width: 100%;
          height: 100%;
          background-color: var(--color-secondary);
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          opacity: 0;
          transform: scale(0);
          transition: all 0.4s ease-in-out;
      }

      .portfolios .portfolio-item .hover-items h3 {
          font-size: 1.5rem;
          color: var(--color-white);
          margin-bottom: 1.5rem;
      }

      .portfolios .portfolio-item .hover-items .icons {
          display: flex;
          justify-content: center;
          align-items: center;
      }

      .portfolios .portfolio-item .hover-items .icons .icon {
          background-color: var(--color-primary);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 1rem;
          cursor: pointer;
          transition: all 0.4s ease-in-out;
      }

      .portfolios .portfolio-item .hover-items .icons .icon i {
          font-size: 1.5rem;
          color: var(--color-white);
          margin: 0 1rem;
      }

      .portfolios .portfolio-item .hover-items .icons .icon:hover {
          background-color: var(--color-white);
      }

      .portfolios .portfolio-item .hover-items .icons .icon:hover i {
          color: var(--color-primary);
      }

      .portfolio-item:hover .hover-items {
          opacity: 1;
          transform: scale(1);
      }

      .blogs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 2rem;
          margin-top: 3rem;
      }

      .blogs .blog {
          position: relative;
          background-color: var(--color-grey-5);
          border-radius: 5px;
          box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease-in-out;
      }

      .blogs .blog:hover {
          box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
          transform: translateY(-5px);
          transition: all 0.4s ease-in-out;
      }

      .blogs .blog:hover img {
          filter: grayscale(0);
          transform: scale(1.1);
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.8);
      }

      .blogs .blog img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          filter: grayscale(100%);
          transition: all 0.4s ease-in-out;
      }

      .blogs .blog .blog-text {
          margin-top: -7px;
          padding: 1.1rem;
          border-top: 8px solid var(--color-secondary);
      }

      .blogs .blog .blog-text h4 {
          font-size: 1.5rem;
          margin-bottom: 0.7rem;
          transition: all 0.4s ease-in-out;
          cursor: pointer;
      }

      .blogs .blog .blog-text h4:hover {
          color: var(--color-secondary);
      }

      .blogs .blog .blog-text p {
          color: var(--color-grey-2);
          line-height: 2rem;
          padding-bottom: 1rem;
      }

      .contact-content-con {
          display: flex;
          padding-top: 3.5rem;
      }

      .contact-content-con .left-contact {
          flex: 2;
      }

      .contact-content-con .left-contact h4 {
          margin-top: 1rem;
          font-size: 2rem;
          text-transform: uppercase;
      }

      .contact-content-con .left-contact p {
          margin: 1rem 0;
          line-height: 2rem;
      }

      .contact-content-con .left-contact .contact-info .contact-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
      }

      .contact-content-con .left-contact .contact-info .contact-item p {
          margin: 0.3rem 0 !important;
          padding: 0 !important;
      }

      .contact-content-con .left-contact .contact-info .contact-item .icon {
          display: grid;
          grid-template-columns: 40px 1fr;
      }

      .contact-content-con .left-contact .contact-info .contact-item .icon i {
          display: flex;
          align-items: center;
          font-size: 1.3rem;
      }

      .contact-content-con .left-contact .contact-icon {
          display: flex;
          margin-top: 2rem;
      }

      .contact-content-con .left-contact .contact-icon a {
          display: flex;
          align-items: center;
          color: var(--color-white);
          background-color: var(--color-grey-5);
          cursor: pointer;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin: 0 0.4rem;
          transition: all 0.4s ease-in-out;
      }

      .contact-content-con .left-contact .contact-icon a:hover {
          background-color: var(--color-secondary);
      }

      .contact-content-con .left-contact .contact-icon a:hover i {
          color: var(--color-primary);
      }

      .contact-content-con .left-contact .contact-icon a i {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
      }

      .contact-content-con .right-contact {
          flex: 3;
          margin-left: 3rem;
      }

      .contact-content-con .right-contact .input-control {
          margin: 1.5rem 0;
      }

      .contact-content-con .right-contact .input-control input,
      .contact-content-con .right-contact .input-control textarea {
          border-radius: 30px;
          font-weight: inherit;
          font-size: inherit;
          font-family: inherit;
          padding: 0.8rem 1.1rem;
          outline: none;
          border: none;
          background-color: var(--color-grey-5);
          width: 100%;
          color: var(--color-white);
          resize: none;
      }

      .contact-content-con .right-contact .i-c-2 {
          display: flex;
      }

      .contact-content-con .right-contact .i-c-2 :last-child {
          margin-left: 1.5rem;
      }

      .contact-content-con .right-contact .submit-btn {
          display: flex;
          justify-content: flex-start;
      }

      /*Independed components*/
      .btn-con {
          display: flex;
          align-self: flex-start;
      }

      .main-btn {
          border-radius: 30px;
          color: inherit;
          font-weight: 600;
          position: relative;
          border: 1px solid var(--color-secondary);
          display: flex;
          align-self: flex-start;
          align-items: center;
          overflow: hidden;
      }

      .main-btn .btn-text {
          padding: 0 2rem;
      }

      .main-btn .btn-icon {
          background-color: var(--color-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          padding: 1rem;
      }

      .main-btn::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          transform: translateX(100%);
          transition: all 0.4s ease-out;
          z-index: -1;
      }

      .main-btn:hover {
          transition: all 0.4s ease-out;
      }

      .main-btn:hover::before {
          width: 100%;
          height: 100%;
          background-color: var(--color-secondary);
          transform: translateX(0);
          transition: all 0.4s ease-out;
      }

      .main-title {
          text-align: center;
      }

      .main-title h2 {
          position: relative;
          text-transform: uppercase;
          font-size: 4rem;
          font-weight: 700;
      }

      .main-title h2 span {
          color: var(--color-secondary);
      }

      .main-title h2 .bg-text {
          position: absolute;
          top: 50%;
          left: 50%;
          color: var(--color-grey-5);
          transition: all 0.4s ease-in-out;
          z-index: -1;
          transform: translate(-50%, -50%);
          font-weight: 800;
          font-size: 6.3rem;
      }

      .about-container .left-about p {
          padding-left: 0;
      }

      @media screen and (max-width: 600px) {
          header {
              padding: 0 !important;
          }

          .theme-btn {
              width: 50px;
              height: 50px;
          }

          .header-content {
              grid-template-columns: repeat(1, 1fr);
              padding-bottom: 6rem;
          }

          .left-header .h-shape {
              display: none;
          }

          .right-header {
              grid-row: 1;
              padding-right: 0rem !important;
              width: 90%;
              margin: 0 auto;
          }

          .right-header .name {
              font-size: 2.5rem !important;
              text-align: center;
              padding-top: 3rem;
          }

          .header-content .left-header .image {
              margin: 0 auto;
              width: 90%;
          }

          .controls {
              top: auto;
              bottom: 0;
              flex-direction: row;
              justify-content: center;
              left: 50%;
              transform: translateX(-50%);
              width: 100%;
              background-color: var(--color-grey-5);
          }

          .controls .control {
              margin: 1rem 0.3rem;
          }

          .about-container {
              grid-template-columns: repeat(1, 1fr);
          }

          .about-container .right-about {
              grid-template-columns: repeat(1, 1fr);
              padding-top: 2.5rem;
          }

          .about-container .left-about {
              padding-right: 0;
          }

          .about-container .left-about p {
              padding-left: 0;
          }

          .timeline {
              grid-template-columns: repeat(1, 1fr);
              padding-bottom: 6rem;
          }

          .container {
              padding: 2rem 2.5rem !important;
          }

          .about-stats .progress-bars {
              grid-template-columns: repeat(1, 1fr);
          }

          .portfolios {
              grid-template-columns: repeat(1, 1fr);
              padding-bottom: 6rem;
              margin-top: 1rem;
          }

          .blogs {
              grid-template-columns: repeat(1, 1fr);
              padding-bottom: 6rem;
          }

          .contact-content-con {
              flex-direction: column;
          }

          .contact-content-con .right-contact {
              margin-left: 0;
              margin-top: 2.5rem;
          }

          .contact-content-con .right-contact .i-c-2 {
              flex-direction: column;
          }

          .contact-content-con .right-contact .i-c-2 :last-child {
              margin-left: 0;
              margin-top: 1.5rem;
          }

          .contact-content-con .right-contact {
              margin-bottom: 6rem;
          }

          .contact-item {
              flex-direction: column;
              margin: 1rem 0;
          }

          .contact-item p {
              font-size: 15px;
              color: var(--color-grey-2);
          }

          .contact-item span {
              font-size: 15px;
          }

          .contact-item .icon {
              grid-template-columns: 25px 1fr;
          }

          .main-title h2 {
              font-size: 2rem;
          }

          .main-title h2 span {
              font-size: 2.3rem;
          }

          .main-title h2 .bg-text {
              font-size: 2.3rem;
          }
      }

      @media screen and (max-width: 1432px) {
          .container {
              padding: 7rem 11rem;
          }

          .contact-content-con {
              flex-direction: column;
          }

          .contact-content-con .right-contact {
              margin-left: 0;
              margin-top: 2.5rem;
          }

          .contact-content-con .right-contact .i-c-2 {
              flex-direction: column;
          }

          .contact-content-con .right-contact .i-c-2 :last-child {
              margin-left: 0;
              margin-top: 1.5rem;
          }

          .contact-content-con .right-contact {
              margin-bottom: 6rem;
          }

          .main-title h2 .bg-text {
              font-size: 5.5rem;
          }
      }

      @media screen and (max-width: 1250px) {
          .blogs {
              grid-template-columns: repeat(2, 1fr);
              margin-top: 6rem;
          }

          .portfolios {
              grid-template-columns: repeat(2, 1fr);
          }

          .header-content .right-header {
              padding-right: 9rem;
          }
      }

      @media screen and (max-width: 660px) {
          .blogs {
              grid-template-columns: repeat(1, 1fr);
          }

          .portfolios {
              grid-template-columns: repeat(1, 1fr);
          }
      }

      @media screen and (max-width: 1070px) {
          .about-container {
              grid-template-columns: repeat(1, 1fr);
          }

          .about-container .right-about {
              padding-top: 2.5rem;
          }

          .main-title h2 {
              font-size: 4rem;
          }

          .main-title h2 span {
              font-size: 4rem;
          }

          .main-title h2 .bg-text {
              font-size: 4.5rem;
          }
      }

      @media screen and (max-width: 970px) {
          .container {
              padding: 7rem 6rem;
          }

          .about-container .left-about {
              padding-right: 0rem;
          }

          .header-content {
              grid-template-columns: repeat(1, 1fr);
              padding-bottom: 6rem;
          }

          .left-header .h-shape {
              display: none;
          }

          .left-header .image {
              width: 90% !important;
              margin: 0 auto !important;
          }

          .right-header {
              grid-row: 1;
              padding-right: 0rem !important;
              width: 90%;
              margin: 0 auto;
          }

          .right-header .name {
              font-size: 2.5rem !important;
              text-align: center;
              padding-top: 3rem;
          }
      }

      @media screen and (max-width: 700px) {
          .container {
              padding: 7rem 3rem;
          }

          .about-stats .progress-bars {
              grid-template-columns: repeat(1, 1fr);
          }

          .about-container .right-about {
              grid-template-columns: repeat(1, 1fr);
          }

          .timeline {
              grid-template-columns: repeat(1, 1fr);
          }

          .main-title h2 {
              font-size: 3rem;
          }

          .main-title h2 span {
              font-size: 3rem;
          }

          .main-title h2 .bg-text {
              font-size: 4rem;
          }
      }
  </style>
</head>

<body class="main-content">
  <header class="container header active" id="home">
      <div class="header-content">
          <div class="left-header">
              <div class="h-shape"></div>
              <div class="image">
                  <img src=${profilePicUrl} alt="Profile Picture">
              </div>
          </div>
          <div class="right-header">
              <h1 class="name">
                  Hi, I'm <span>${fullName}.</span>
                  ${workDesc}.
              </h1>
              <p>
                  ${selfDesc}
              </p>
              <div class="btn-con">
                  <a href=${cvLink} target=_blank class="main-btn">
                      <span class="btn-text">Download CV</span>
                      <span class="btn-icon"><i style="color: white;" class="fas fa-download"></i></span>
                  </a>
              </div>
          </div>
      </div>
  </header>
  <main>
      <section class="container about" id="about">
          <div class="main-title">
              <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
          </div>
          <div class="about-container">
              <div class="left-about">
                  <h4>Information About me</h4>
                  <p>
                      ${aboutMe}
                  </p>
              </div>
              <div class="right-about">
                  <div class="about-item">
                      <div class="abt-text">
                          <p class="large-text">${numOfProjects}</p>
                          <p class="small-text">Projects <br /> Completed</p>
                      </div>
                  </div>
                  <div class="about-item">
                      <div class="abt-text">
                          <p class="large-text">${yearsOfExperience}</p>
                          <p class="small-text">Years of <br /> experience</p>
                      </div>
                  </div>
                  <div class="about-item">
                      <div class="abt-text">
                          <p class="large-text">${numOfHappyClients}</p>
                          <p class="small-text">Happy <br /> Clients</p>
                      </div>
                  </div>
                  <div class="about-item">
                      <div class="abt-text">
                          <p class="large-text">${totalCustomerReviews}</p>
                          <p class="small-text">Customer <br /> reviews</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="about-stats">
              ${
                skills.length != 0
                  ? `<h4 class="stat-title">My Skills</h4>
                  <div class="progress-bars">
                      ${Object.values(skills)
                        .map(
                          (skill) => `
                      <div class="progress-bar">
                          <p class="prog-title">${skill.name}</p>
                          <div class="progress-con">
                          <p class="prog-text">${skill.percentage}%</p>
                          <div class="progress">
                              <span style="width:${skill.percentage}%;"></span>
                          </div>
                          </div>
                      </div>`
                        )
                        .join(``)}
                  </div>
  `
                  : ``
              }
          </div>
          ${
            experience.length != 0
              ? `<h4 class="stat-title">My Timeline</h4>
              <div class="timeline">
                  ${Object.values(experience)
                    .map(
                      (exp) => `
                      <div class="timeline-item">
                          <div class="tl-icon">
                              <i style="color: white;" class="fas fa-briefcase"></i>
                          </div>
                          <p class="tl-duration">${exp.startDate} - ${exp.endDate}</p>
                          <h5>${exp.jobTitle}<span> - ${exp.companyName}</span></h5>
                          <p>
                              ${exp.jobDescription}
                          </p>
                      </div>`
                    )
                    .join(``)}
              </div>
`
              : ``
          }
          
      </section>
      <section class="container" id="portfolio">
          ${
            projects.length != 0
              ? `
              <div class="main-title">
                  <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
              </div>
              <p class="port-text">
                  Here is some of my work that I've done in various programming languages.
              </p>
              <div class="portfolios">
                  ${Object.values(projects)
                    .map(
                      (project) => `
                      <div class="portfolio-item">
                          <div class="image">
                              <img src=${project.image} alt="Project Image">
                          </div>
                          <div class="hover-items">
                              <h3>Project Source</h3>
                              <div class="icons">
                                  <a href=${project.githubLink} target=_blank class="icon">
                                      <i class="fab fa-github"></i>
                                  </a>
                                  <a href=${project.liveLink} target=_blank class="icon">
                                      <i class="fas fa-stream"></i>
                                  </a>
                              </div>
                          </div>
                      </div>`
                    )
                    .join(``)}
              </div>
  `
              : ``
          }
          
      </section>
      <section class="container contact" id="contact">
          <div class="contact-container">
              <div class="main-title">
                  <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
              </div>
              <div class="contact-content-con">
                  <div class="left-contact">
                      <h4>Contact me here</h4>
                      <div class="contact-info">
                          <div class="contact-item">
                              <div class="icon">
                                  <i class="fas fa-map-marker-alt"></i>
                                  <span>Location</span>
                              </div>
                              <p>
                                  : ${location}
                              </p>
                          </div>
                          <div class="contact-item">
                              <div class="icon">
                                  <i class="fas fa-envelope"></i>
                                  <span>Email</span>
                              </div>
                              <p>
                                  <span>: ${email}</span>
                              </p>
                          </div>
                          <div class="contact-item">
                              <div class="icon">
                                  <i class="fas fa-user-graduate"></i>
                                  <span>Mobile Number</span>
                              </div>
                              <p>
                                  <span>: ${mobileNumber}</span>
                              </p>
                          </div>
                          <div class="contact-item">
                              <div class="icon">
                                  <i class="fas fa-globe-africa"></i>
                                  <span>Language</span>
                              </div>
                              <p>
                                  <span>: English</span>
                              </p>
                          </div>
                      </div>
                      <div class="contact-icons">
                          <div class="contact-icon">
                              <a href=${facebookLink} target="_blank">
                                  <i class="fab fa-facebook-f"></i>
                              </a>
                              <a href=${twitterLink} target="_blank">
                                  <i class="fab fa-twitter"></i>
                              </a>
                              <a href=${githubLink} target="_blank">
                                  <i class="fab fa-github"></i>
                              </a>
                              <a href=${linkedinLink} target="_blank">
                                  <i class="fab fa-linkedin"></i>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="right-contact">
                      <form action="mailto:mfaizansoomro00@gmail.com" class="contact-form" method="post" enctype="text/plain">
                          <div class="input-control i-c-2">
                              <input type="text" required placeholder="YOUR NAME"/>
                              <input type="email" required placeholder="YOUR EMAIL"/>
                          </div>
                          <div class="input-control">
                              <input type="text" required placeholder="ENTER SUBJECT"/>
                          </div>
                          <div class="input-control">
                              <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                          </div>
                          <div class="btn-con">
                              <a class="main-btn">
                                  <input class="btn-text" type="submit" value="">Send</input>
                                  <span class="btn-icon"><i class="fas fa-paper-plane"></i></span>
                              </a>
                          </div>
                          
                      </form>
                  </div>
              </div>
          </div>
      </section>
  </main>
  <div class="controls">
      <div class="control active-btn" data-id="home">
          <i style="color: white;" class="fas fa-home"></i>
      </div>
      <div class="control" data-id="about">
          <i style="color: white;" class="fas fa-user"></i>
      </div>
      ${
        projects.length != 0
          ? `
      <div class="control" data-id="portfolio">
          <i style="color: white;" class="fas fa-briefcase"></i>
      </div>`
          : ``
      }
      <div class="control" data-id="contact">
          <i style="color: white;" class="fas fa-envelope-open"></i>
      </div>
  </div>
  <div class="theme-btn">
      <i style="color: white;" class="fas fa-adjust"></i>
  </div>
  <script>
      (function () {
          [...document.querySelectorAll(".control")].forEach(button => {
              button.addEventListener("click", function () {
                  document.querySelector(".active-btn").classList.remove("active-btn");
                  this.classList.add("active-btn");
                  document.querySelector(".active").classList.remove("active");
                  document.getElementById(button.dataset.id).classList.add("active");
              })
          });
          document.querySelector(".theme-btn").addEventListener("click", () => {
              document.body.classList.toggle("light-mode");
          })
      })();

  </script>
</body>

</html>`}{" "}
        </pre>
      ) : template == "simple" ? (
        <pre className="codefile">
          {`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
  <title>${fullName}'s Portfolio</title>
  <style>
    /* GLOBAL */

    :root {
      --bg-body: hsl(0, 0%, 8%);
      --bg-body2: hsl(0, 0%, 14%);
      --accent: hsl(153, 71%, 59%);
      --text1: hsl(0, 0%, 100%);
      --text2: hsl(0, 0%, 85%);
      --invalid: hsl(7, 100%, 68%);
      --fs-18: 1.125rem;
      --fs-88: 5.5rem;
      --fs-72: 4.5rem;
      --fs-40: 2.5rem;
      --fs-48: 3rem;
      --fs-36: 2.25rem;
      --fs-32: 2rem;
      --fs-24: 1.5rem;
      --fs-20: 1.25rem;
      --container: 69.375rem;
      --transition: 250ms ease-in-out;
    }

    html,
    body {
      overflow-x: hidden;
    }

    html {
      box-sizing: border-box;
      font-size: 100%;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    body,
    input,
    textarea,
    button {
      font-family: 'Space Grotesk', sans-serif;
    }

    body {
      margin: 0;
      background-color: var(--bg-body);
      color: var(--text1);
      font-size: var(--fs-18);
      line-height: 1.56;
      padding-bottom: 25rem;
    }

    .bg-less-dark {
      background-color: var(--bg-body2);
    }

    h1,
    h2,
    h3,
    p {
      margin-block-start: 0;
    }

    h1,
    h2,
    h3 {
      line-height: 1;
    }

    .header-xl {
      font-size: 2.5rem;
      font-size: clamp(2.5rem, 0.7rem + 7.68vw, 5.5rem);
      letter-spacing: -0.028em;
      line-height: 1.1;
    }

    p {
      font-size: 1rem;
      font-size: clamp(1rem, 0.79rem + 0.89vw, 1.125rem);
      line-height: 1.5;
      color: var(--text2);
    }

    a {
      transition: color var(--transition);
    }

    a:focus-visible,
    input:focus-visible,
    textarea:focus-visible {
      outline: 2px dashed var(--accent);
      outline-offset: 2px;
    }

    input:invalid,
    textarea:invalid {
      outline-color: var(--invalid);
    }

    a.underline,
    button {
      display: inline-block;
      padding-bottom: 0.625rem;
      font-size: 1rem;
      line-height: 1.625;
      letter-spacing: 0.143em;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--text1);
      text-decoration: none;
      background-image: linear-gradient(to right,
          var(--accent) 75%,
          var(--accent) 75%);
      background-position: 0 2.1em;
      background-repeat: repeat-x;
      background-size: 8px 2px;
    }

    a:hover {
      color: var(--accent);
    }

    img,
    svg {
      display: block;
    }

    .visually-hidden {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }

    .wrapper {
      width: calc(100% - 2rem);
      max-width: var(--container);
      margin-inline: auto;
    }

    /* 600px */
    @media (min-width: 37.5em) {
      .wrapper {
        width: calc(100% - 3.75rem);
      }
    }

    /* UTILITY */

    .bottom-border {
      border-bottom: 1px solid var(--text2);
    }

    /* HEADER */

    .header {
      position: relative;
      z-index: 1;
      margin-block-start: 20px;
    }

    .header__nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
      gap: 20px 25px;
    }

    .header__home {
      font-size: 1.5rem;
      font-size: clamp(1.5rem, 1.02rem + 2.04vw, 2rem);
      line-height: 1;
      color: var(--text1);
      text-decoration: none;
      flex: 1 0 100%;
    }

    .header__social>svg>path {
      transition: fill var(--transition);
    }

    .header__social:hover>svg>path {
      fill: var(--accent);
    }

    @media (min-width: 37.5em) {
      .header {
        margin-block-start: 30px;
        /* margin-block-end: 90px; */
      }

      .header__nav {
        justify-content: flex-start;
        align-items: center;
        text-align: left;
        gap: 32px;
      }

      .header__home {
        flex: 0 1 auto;
        margin-inline-end: auto;
      }
    }

    @media (min-width: 62.5em) {
      .header {
        margin-block-start: 40px;
        margin-block-end: 127px;
      }

      .header__nav {
        padding-right: 30px;
      }
    }

    /*  HERO */

    .hero__wrapper {
      padding-bottom: 80px;
    }

    .hero__image {
      position: absolute;
      top: 0;
      left: 50%;
      translate: -50%;
      width: 174px;
      height: auto;
    }

    .hero__rings {
      position: absolute;
      right: 50%;
      top: 130px;
      /* 8.125rem; */
      z-index: -1;
      /* width: 33.125rem; */
      height: auto;
    }

    .hero__circle {
      position: relative;
      top: 171px;
      margin-bottom: -129px;
      translate: calc(100vw - 64px - 16px);
    }

    .hero__text {
      position: relative;
      text-align: center;
      margin-block-start: 335px;
    }

    .hero__headline {
      margin-block-end: 24px;
    }

    .hero__headline>br {
      display: none;
    }

    h1>span {
      background-image: linear-gradient(to right,
          var(--accent) 75%,
          var(--accent) 75%);
      background-position: 0 1.18em;
      background-repeat: repeat-x;
      background-size: 8px 4px;
    }

    .hero__description {
      margin-block-end: 24px;
    }

    @media (min-width: 37.5em) {
      .hero {
        position: relative;
        margin-block-start: -62px;
      }

      .hero__wrapper {
        padding-bottom: 60px;
      }

      .hero__content {
        display: flex;
        align-items: center;
      }

      .hero__content picture {
        order: 2;
      }

      .hero__image {
        position: relative;
        width: 42vw;
        max-width: 445px;
        /* width: 322px; */
        height: auto;
        left: auto;
        right: 0;
        translate: 0;
      }

      .hero__rings {
        top: 90px;
        right: auto;
        left: 0;
        translate: -50%;
      }

      .hero__circle {
        position: absolute;
        top: auto;
        right: 0;
        bottom: 190px;
        translate: 50%;
        z-index: 1;
      }

      .hero__text {
        /* width: 62vw; */
        margin-block-start: 90px;
        margin-right: -30px;
        flex: 1 0 58vw;
        text-align: left;
        z-index: 1;
      }

      .hero__headline {
        margin-block-end: 60px;
      }

      .hero__headline>br {
        display: inline-block;
      }

      .hero__description {
        /* width: 70%; */
        margin-block-end: 34px;
      }
    }

    @media (min-width: 62.5em) {
      .hero {
        margin-block-start: 0px;
      }

      .hero__wrapper {
        position: relative;
        padding-bottom: 100px;
      }

      .hero__content {
        align-items: flex-start;
      }

      .hero__content picture {
        margin-left: -80px;
      }

      .hero__image {
        margin-block-start: -199px;
      }

      .hero__rings {
        top: 0px;
        translate: -50% -50%;
      }

      .hero__circle {
        top: 322px;
        right: 445px;
      }

      .hero__text {
        margin-block-start: 0;
        margin-right: 0;
        flex: 1;
      }

      .hero__headline {
        margin-block-end: 43px;
      }

      .hero__headline>br {
        display: none;
      }

      .hero__description {
        width: 38ch;
        margin-block-end: 66px;
      }
    }

    /* SKILLS */

    .skills {
      position: relative;
    }

    .skills__wrapper {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
      padding-block: 40px;
    }

    .skills__item {
      text-align: center;
    }

    .skills__title {
      font-size: 2rem;
      font-size: clamp(2rem, 0.33rem + 7.11vw, 3rem);
      line-height: 1.17;
      margin-block-end: 2px;
    }

    .skills__description {
      margin-block-end: 0;
    }

    .skills__rings {
      position: absolute;
      bottom: 0;
      left: 50%;
      translate: 0 50%;
    }

    @media (min-width: 37.5em) {
      .skills__wrapper {
        grid-template-columns: repeat(2, 1fr);
        gap: 52px 24px;
        border: none;
        padding-block: 52px 0;
      }

      .skills__item {
        text-align: left;
      }

      .skills__rings {
        translate: 40% 50%;
      }
    }

    @media (min-width: 62.5em) {
      .skills__wrapper {
        grid-template-columns: repeat(3, 1fr);
        gap: 58px 30px;
        padding-block-start: 72px;
      }

      .skills__rings {
        translate: -40% 50%;
        left: 100%;
      }
    }

    /* PROJECTS */

    .projects__wrapper {
      padding-block: 140px;
    }

    .projects__grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
      justify-items: center;
      text-align: center;
    }

    .projects__headline {
      grid-column: 1 / span 2;
      margin-block-end: 0;
    }

    .projects__contact {
      grid-column: 1 / span 2;
    }

    .projects__item {
      grid-column: 1 / span 2;
    }

    .projects__picture {
      display: block;
      margin-block-end: 20px;
    }

    .projects__image {
      width: 100%;
      height: auto;
    }

    .projects__name {
      font-size: 1.5rem;
      line-height: 1.3;
      font-weight: 700;
      text-transform: uppercase;
      margin-block-end: 7px;
    }

    .projects__tags {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-block-end: 20px;
      text-transform: uppercase;
    }

    .projects__links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    @media (min-width: 37.5em) {
      .projects__grid {
        gap: 60px 24px;
        justify-items: start;
        text-align: left;
      }

      .projects__contact {
        justify-self: end;
      }

      .projects__item {
        grid-column: span 1;
      }

      .projects__headline,
      .projects__contact {
        grid-column: span 1;
      }

      .projects__contact {
        align-self: center;
      }

      .projects__tags,
      .projects__links {
        display: block;
      }

      .projects__tags span {
        margin-inline-end: 18px;
      }

      .projects__links a {
        margin-inline-end: 30px;
      }

      .project__links {
        display: block;
      }
    }

    @media (min-width: 62.5em) {
      .projects__grid {
        gap: 70px 30px;
      }

      .projects__item {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, auto);
      }

      .projects__picture {
        position: relative;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }

      .projects__picture::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        background-color: hsl(0, 0%, 0%);
        opacity: 0;
        transition: opacity 150ms ease-in-out;
      }

      .projects__item:hover .projects__picture::after {
        opacity: 0.5;
      }

      .projects__item:hover .projects__links {
        opacity: 1;
      }

      .projects__item:focus-within .projects__links {
        opacity: 1;
      }

      .projects__item:focus-within .projects__picture::after {
        opacity: 0.5;
      }

      .projects__image {
        width: 100%;
        height: auto;
      }

      .projects__links {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        justify-self: center;
        align-self: center;
        z-index: 1;
        opacity: 0;
        transition: opacity 400ms ease-in-out;
      }

      .projects__links:hover~.projects__picture::after {
        opacity: 0.5;
      }

      .projects__tags {
        margin-block-end: 0;
      }
    }

    /* CONTACT */

    .contact {
      position: relative;
    }

    .contact__wrapper {
      padding-block: 84px;
    }

    .contact__headline {
      margin-block-end: var(--fs-20);
    }

    .contact__control {
      position: relative;
      margin-block-end: 16px;
    }

    .contact__control input,
    .contact__control textarea {
      width: 100%;
      padding-block: 16px;
      padding-inline: 24px;
      border: none;
      border-bottom: 1px solid var(--text1);
      background: transparent;
      font-size: 1rem;
      line-height: 1.625;
      color: var(--text1);
    }

    .contact__control>*::placeholder {
      color: var(--text1);
      opacity: 0.5;
      text-transform: uppercase;
    }

    .contact__control textarea {
      margin-block-end: 32px;
    }

    .contact__control.align-right {
      display: flex;
      justify-content: flex-end;
    }

    .contact__control button {
      background-color: transparent;
      border: none;
    }

    .contact__invalid-icon {
      display: none;
      width: var(--fs-24);
      height: var(--fs-24);
      position: absolute;
      top: 50%;
      right: 0;
      translate: -50% -50%;
    }

    .contact input:focus-visible:invalid~.contact__invalid-icon,
    .contact textarea:focus-visible:invalid~.contact__invalid-icon {
      display: inline-block;
    }

    .contact textarea:focus-visible:invalid~.contact__invalid-icon {
      top: 1.2rem;
      right: 1.5rem;
      translate: none;
    }

    .contact__rings {
      position: absolute;
      left: 0;
      bottom: 97px;
      translate: -75%;
    }

    @media (min-width: 37.5em) {
      .contact__rings {
        bottom: 47px;
        translate: -75%;
      }
    }

    @media (min-width: 62.5em) {
      .contact__wrapper {
        display: grid;
        grid-template-columns: repeat(2, 27.8rem);
        justify-content: space-between;
      }

      .contact__headline {
        margin-block-end: var(--fs-36);
      }

      .contact__rings {
        translate: -40%;
      }
    }

    /* 999.98px */
    @media (max-width: 62.49875em) {
      .contact__wrapper {
        max-width: 27.8rem;
      }

      .contact__text {
        text-align: center;
      }
    }

    footer {
      padding-block: 40px 60px;
    }

    @media (min-width: 37.5em) {
      footer {
        padding-block: 30px 40px;
      }
    }

    @media (min-width: 62.5em) {
      footer {
        padding-block: 47px 92px;
      }
    }
  </style>
</head>

<body>
  <header class="header">
    <h2 class="visually-hidden">Header</h2>
    <div class="wrapper">
      <nav class="header__nav">
        <h2 class="visually-hidden">Navigation</h2>
        <a href="/" class="header__home">
          <span class="visually-hidden">(to home page)</span>
        </a>
        <a href=${githubLink} class="header__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" aria-labelledby="socialGitHub" role="img">
            <title id="socialGitHub">GitHub</title>
            <path fill="#FFF" fill-rule="evenodd"
              d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z" />
          </svg>
        </a>
        <a href=${linkedinLink} class="header__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" aria-labelledby="socialLinkedIn" role="img">
            <title id="socialLinkedIn">LinkedIn</title>
            <path fill="#FFF" fill-rule="evenodd"
              d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z" />
          </svg>
        </a>
        <a href=${twitterLink} class="header__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" aria-labelledby="socialTwitter" role="img">
            <title id="socialTwitter">Twitter</title>
            <path fill="#FFF"
              d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z" />
          </svg>
        </a>
      </nav>
    </div>
  </header>

  <main id="main">
    <section class="hero">
      <div class="wrapper hero__wrapper bottom-border">
        <div class="hero__content">
          <picture>
            <img class="hero__image" src=${profilePicUrl} alt="picture of ${fullName}"
              width-="174" height="383" />
          </picture>
          <img class="hero__rings" src="https://res.cloudinary.com/dj1mhaagb/image/upload/v1707162879/pattern-rings_wxyvk8.svg" alt="" width="530" height="129" />
          <img class="hero__circle" src="https://res.cloudinary.com/dj1mhaagb/image/upload/v1707162835/pattern-circle_amu0ej.svg" alt="" width="129" height="129" />
          <div class="hero__text">
            <h1 class="hero__headline header-xl">
              Nice to<br />
              meet you! I'm <span>${fullName}</span>.
            </h1>
            <p class="hero__description">
              ${aboutMe}
            </p>
            <a href="#contact" class="hero__contact underline">Contact me</a>
          </div>
        </div>
      </div>
    </section>


  ${
    skills.length != 0
      ? `    
      <section class="skills">
        <div class="wrapper skills__wrapper bottom-border">
          <h2 class="visually-hidden">Skills</h2>
            ${Object.values(skills)
              .map(
                (skill) => `
              <div class="skills__item">
                <h3 class="skills__title">${skill.name}</h3>
              </div>`
              )
              .join(``)}
        </div>
        <img class="skills__rings" src="https://res.cloudinary.com/dj1mhaagb/image/upload/v1707162879/pattern-rings_wxyvk8.svg" alt="" width="530" height="129" />
      </section>
  `
      : ``
  }

  ${
    projects.length != 0
      ? `
      <section class="projects">
        <div class="wrapper projects__wrapper">
          <div class="projects__grid">
            <h2 class="projects__headline header-xl">Projects</h2>
            <a href="#contact" class="projects__contact underline">Contact me</a>
            ${Object.values(projects)
              .map(
                (project) => `          
              <div class="projects__item">
                <picture class="projects__picture">
                  <img class="projects__image" src=${project.image}
                    alt="screenshot of design portfolio website" width-="343" height="253" />
                </picture>
                <div class="projects__links">
                  <a href=${project.liveLink} class="underline">View Project</a>
                  <a href=${project.githubLink} class="underline">View Code</a>
                </div>
              </div>`
              )
              .join(``)}
          </div>
        </div>
      </section>
      `
      : ``
  }


    <section id="contact" class="contact bg-less-dark">
      <div class="wrapper contact__wrapper bottom-border">
        <div class="contact__text">
          <h2 class="contact__headline header-xl">Contact</h2>
          <p class="contact__description">
            I would love to hear about your project and how I could help.
            Please fill in the form, and I'll get back to you as soon as
            possible.
          </p>
        </div>
        <form action="mailto:${email}" class="contact__form">
          <div class="contact__control">
            <label for="name" class="visually-hidden">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" required />
            <img src="https://res.cloudinary.com/dj1mhaagb/image/upload/v1707163944/icon-invalid_nyqcma.svg" alt="" class="contact__invalid-icon" width="24" height="24" />
          </div>
          <div class="contact__control">
            <label for="email" class="visually-hidden">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required />
            <img src="https://res.cloudinary.com/dj1mhaagb/image/upload/v1707163944/icon-invalid_nyqcma.svg" alt="" class="contact__invalid-icon" width="24" height="24" />
          </div>
          <div class="contact__control">
            <label for="message" class="visually-hidden">Message</label>
            <textarea name="message" id="message" cols="30" rows="3" placeholder="Message" required></textarea>
            <img src="https://res.cloudinary.com/dj1mhaagb/image/upload/v1707163944/icon-invalid_nyqcma.svg" alt="" class="contact__invalid-icon" width="24" height="24" />
          </div>
          <div class="contact__control align-right">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
      <img class="contact__rings" src="https://res.cloudinary.com/dj1mhaagb/image/upload/v1707162879/pattern-rings_wxyvk8.svg" alt="" width="530" height="129" />
    </section>
  </main>

  <footer class="footer bg-less-dark">
    <h2 class="visually-hidden">Footer</h2>
    <div class="wrapper">
      <nav class="header__nav">
        <h2 class="visually-hidden">Navigation</h2>
        <a href="/" class="header__home">
          <span class="visually-hidden">(to home page)</span>
        </a>
        <a href=${githubLink} class="header__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" aria-labelledby="socialGitHub" role="img">
            <title id="socialGitHub">GitHub</title>
            <path fill="#FFF" fill-rule="evenodd"
              d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z" />
          </svg>
        </a>
        <a href=${linkedinLink} class="header__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" aria-labelledby="socialLinkedIn" role="img">
            <title id="socialLinkedIn">LinkedIn</title>
            <path fill="#FFF" fill-rule="evenodd"
              d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z" />
          </svg>
        </a>
        <a href=${twitterLink} class="header__social">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" aria-labelledby="socialTwitter" role="img">
            <title id="socialTwitter">Twitter</title>
            <path fill="#FFF"
              d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z" />
          </svg>
        </a>
      </nav>
    </div>
  </footer>
</body>

</html>`}
        </pre>
      ) : template == "beginner" ? (
        <pre className="codefile">
          {`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
          <title>Document</title>
        </head>
        <body>
          <div class="div absolute  w-[200px] h-[80px] flex items-center">
            <p class="text-white text-2xl">${fullName}</p>
          </div>
          <section class="hero flex  flex-col  md:flex-row w-full md:h-screen h-[500px]">
            <div class="l  w-[100%] h-screen bg-[#1a2e35] gap-4  flex flex-col items-center  lg:pl-32 justify-center">
              <h1 class="lg:text-[40px] lg:font-extrabold text-white font-bold text-[30px]">
                <span class="font-extrabold ml-20 lg:ml-0"> YOU CAN</span>
                <br />
                <span class="font-extrabold"> HIRE FREELANCER</span> <br />
                <span class="ml-28 font-extrabold lg:ml-0">HERE</span> <br />
              </h1>
              <h1 class="text-2xl font-bold text-white">${fullName}</h1>
              <p class="text-gray-400   font-bold px-4 lg:px-0 ">
              ${selfDesc}
              </p>
              <div class="btn flex ">
                <button class="bg-[#FF4F5A] mr-3 text-white px-14 py-3">
                  About us
                </button>
                <button class="bg-white px-8 py-3 pb-2">Get A Quote</button>
              </div>
            </div>
          
          </section>
        
        
          <section>
            <div class="exp w-full h-full flex flex-col lg:flex-row"> 
              <div class="r w-full  h-full lg:h-screen flex items-center justify-center">
                <img src=${profilePicUrl} class="w-[700px] h-[680px] mt-2" />
              </div>
              <div class="l w-full h-full lg:h-screen flex flex-col gap-8 lg:items-start lg:justify-center">
                <h1 class="font-extrabold text-3xl ml-4">
                  BEXT EXPERIENCED <br />
                  FREELANCER HERE
                </h1>
                <p class="font-bold text-gray-500 text-justify px-4">
                 ${aboutMe}
                </p>
                <div class="btn flex ml-4">
                  <a href=${cvLink} tartget=_blank class="bg-[#FF4F5A] mr-3 text-white px-10  lg:px-14  py-3">
                    CV
                  </a>
                  <a href=${linkedinLink} target=_blank class="bg-black mr-3 text-white px-14 py-3">
                    Hire
                  </a>
                </div>
              </div>
            </div>
          </section>
         ${
           skills.length != 0
             ? `<section>
                    <div class="bg-[#1cbbb4] w-full h-full lg:h-[450px] lg:pt-20 ">
                    <h1 class="underline text-white text-center text-5xl  font-bold pt-10">
                        SKILLS
                    </h1>
                    <div class="flex flex-col items-center lg:grid lg:grid-cols-3 lg:px-52 gap-12 pt-4">
                    ${Object.values(skills)
                      .map(
                        (skill) => `
                        <span class="text-white  text-3xl font-bold">${skill.name}</span>`
                      )
                      .join(``)}
                    </div>
                    </div>
                </section>
         
         
         
         
         
         `
             : ``
         }
        
          <section class="w-full h-full flex flex-col">
            <div class="pic flex items-center justify-center">
         
             
            </div>
            <div class="div flex flex-col items-center lg:gap-20 ">
              <h1 class="font-extrabold lg:text-4xl">ABOUT ME </h1>
              <p class="text-gray-500    lg:px-20 lg:text-lg ">
              ${aboutMe}
              </p>
              <button class="bg-[#FF4F5A] mr-3 text-white w-[250px] py-3">
                Read More
              </button>
            </div>
          </section>
        
          <section class="exp">
            <div class="main w-full h-full flex flex-col ">
              <div class="l w-full  h-full ">
                <h1 class="text-center text-3xl font-bold">
                  WORK FREELANCER HAS DONE
                </h1>
                <div class="div w-full h-full  flex flex-col md:flex-row">
                  <div class="l w-full lg:w-[50%] h-full flex flex-col items-start md:ml-10 justify-center  ">
                    <div class="1 flex gap-8 mt-4 ml-8 lg:ml-0 items-center justify-center">
                     
                      <div class="info">
                        <p class="text-[#FF4F5A] text-xl font-bold">
                       ${yearsOfExperience}
                        </p>
                        <h3 class="text-xl font-extrabold">YEARS OF EXPERIENCE</h3>
                      </div>
                    </div>
                    <div class="1 flex gap-8 mt-4 ml-8 lg:ml-0 items-center justify-center">
                     
                      <div class="info">
                        <p class="text-[#FF4F5A] text-xl font-bold">
                         ${numOfHappyClients}
                        </p>
                        <h3 class="text-xl font-extrabold">NUMBER OF SATISFIED CLIENT</h3>
                      </div>
                    </div>
                    <div class="1 flex gap-8 mt-4 ml-8 lg:ml-0 items-center justify-center">
                     
                      <div class="info">
                        <p class="text-[#FF4F5A] text-xl font-bold">
                         ${totalCustomerReviews}
                        </p>
                        <h3 class="text-xl font-extrabold">NO OF CUSTOMER REVIEWS</h3>
                      </div>
                    </div>
                  </div>
                  <div class="l w-full lg:w-[50%] h-full flex flex-col items-start md:ml-20  justify-center  ">
                    <div class="1 flex gap-8 mt-4 ml-8 lg:ml-0 items-center justify-center">
                     
                      <div class="info">
                        <p class="text-[#FF4F5A] text-xl font-bold">
                          ${numOfProjects}
                        </p>
                        <h3 class="text-xl font-extrabold">NO OF PROJECTS COMPLETED</h3>
                      </div>
                    </div>
                    <div class="1 flex gap-8 mt-4 ml-8 lg:ml-0 items-center justify-center">
                     
                      <div class="info">
                        <p class="text-[#FF4F5A] text-xl font-bold">
                        ${location}
                        </p>
                        <h3 class="text-xl font-extrabold">LOCATION</h3>
                      </div>
                    </div>
                    <div class="1 flex gap-8 mt-4 ml-8 lg:ml-0 items-center justify-center">
                     
                      <div class="info">
                        <p class="text-[#FF4F5A] text-xl font-bold">
                         ${email}
                        </p>
                        <h3 class="text-xl font-extrabold">EMAIL</h3>
                      </div>
                    </div>
                  </div>
                 
                  
                 
        
                </div>
               
        
              </div>
           
            </div>
           
          </section>

          <section id="proj">
          ${
            projects.length != 0
              ? `
            <div class="projects  w-full h-full ">
            <h1 class="text-[#14b8a6] text-center font-bold text-2xl mt-2">
              Portfolio
            </h1>
            <h1 class="text-[#0f172a]   font-extrabold text-4xl text-center mt-2">
              Recent Projects
            </h1>
            <p class="text-gray-400 text-lg text-center">
              Check Out Some Of My Work 😊
            </p>
            <div class="w-full h-full mt-4 grid grid-cols-1 md:grid-cols-3  place-items-center">
            ${Object.values(projects)
              .map(
                (project) =>
                  `
                <div class="card  flex flex-col gap-4 w-[300px] h-[300px] ">
                <img src=${project.image} alt="pic1.png" class='w-[250px]' >
                <h1 class="text-xl font-bold">Login Page</h1>
                <p>Login Page Using Html Css</p>
                <div class="btn flex gap-4">
                  <a href=${project.liveLink} target=_blank>
                      <i class="fa-solid fa-location-arrow border-2 border-gray-500 rounded-full"></i>
                    
  
                  </a>
                  <a href=${project.githubLink} target=_blank>
                      <i class="fa-brands fa-github border-2 border-gray-500 rounded-full"></i>
                     
                   
                  </a>
                </div>
              </div>
                
                
                `
              )
              .join("")}
           
             
      
            </div>
          </div>
            
            `
              : ``
          }
           
          </section>
        
           
        
        
          <div class="testomonial flex flex-col gap-10 items-center justify-center w-full h-full ">
            <h1 class="text-4xl font-extrabold">TESTOMONIALS</h1>
            <div class="DIV w-[360px] h-[400px] lg:w-[800px] lg:h-[280px]  bg-white shadow-lg shadow-black flex items-center justify-evenly flex-col">
              <h1 class="text-center text-2xl font-bold">John Hissona</h1>
              <p class="text-gray-500 text-lg px-4">
                passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words
                which don't look even slightly believable. If youThere are many
                variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in s
              </p>
            </div>
          </div>
        
          <footer class="h-full p-10 mt-4  w-full bg-[#1a2e35]  gap-8 flex items-center lg:flex-row flex-col justify-center">
            <div class="links flex items-center justify-center gap-10 text-xl">
                <a href=${linkedinLink} target=_blank> <i class="fa-brands fa-linkedin bg-blue-500"></i></a>
               <a href=${facebookLink} target=_blank>>      <i class="fa-brands fa-facebook bg-blue-800 rounded text-white"></i>  </a>
                <a href=${twitterLink}><i class="fa-brands fa-twitter bg-red-400 rounded text-white"></i></a>
              </div>
              <div>
              <a href=${cvLink} target=_blank  class="px-6 py-4 font-bold bg-[#14b8a6] rounded-lg">My Resume </a>
            </div>
          </footer>
        </body>
        </html>
        
        `}
        </pre>
      ) : template == "mini" ? (
        <pre className="codefile">{`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${fullName}'s Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    :root {
      /* Light Theme */
      --primary-font: "Poppins", sans-serif;
      --primary-bg-color: #ffffff;
      --primary-text-color: #000000;
      --secondary-color: #575757;
      --btn-bg-color: #2196f3;
      --cta-hover-color: #167bce;
      --btn-bg-light: #eeeeee;

      /* Dark Theme */
      --dark-primary-bg-color: #222222;
      --dark-primary-text-color: #ffffff;
      --dark-secondary-color: #828282;
      --dark-btn-bg-color: #1e88e5;
      --dark-cta-hover-color: #0d5e8c;
      --dark-btn-bg-light: #eeeeee;
    }

    .dark-theme {
      --primary-bg-color: var(--dark-primary-bg-color);
      --primary-text-color: var(--dark-primary-text-color);
      --secondary-color: var(--dark-secondary-color);
      --btn-bg-color: var(--dark-btn-bg-color);
      --cta-hover-color: var(--dark-cta-hover-color);
      --btn-bg-light: var(--dark-btn-bg-light);
    }

    body {
      margin: 0;
      font-family: var(--primary-font, "Arial, sans-serif");
      background-color: var(--primary-bg-color);
      color: var(--primary-text-color);
    }

    .theme-btn {
      position: relative;
      left: 8.5rem;
    }

    h1,
    h2,
    h3,
    p {
      margin: 0;
      cursor: default;
    }

    article,
    footer,
    .hero,
    .logo-container,
    .experience,
    .cta,
    .portfolio-skills,
    .btn-bg,
    .portfolio,
    .skills {
      display: flex;
    }

    .hero,
    .portfolio,
    .skills {
      flex-direction: column;
    }

    .hero,
    .btn-bg,
    .portfolio,
    .skills {
      align-items: center;
    }

    .hero,
    .experience,
    .wrapper {
      text-align: center;
    }

    article,
    .hero,
    .logo-container,
    .portfolio,
    .skills {
      gap: 1rem;
    }

    .hero-pic {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
    }

    .inner-circle {
      content: "";
      position: absolute;
      top: 0.1rem;
      /* Adjust border thickness */
      left: 0.1rem;
      bottom: 0.1rem;
      right: 0.1rem;
      border-radius: 50%;
      border: 0.18rem solid var(--primary-bg-color);
      /* Define your border thickness and color */
      z-index: 1;
      /* Make sure it is above the image */
    }

    .hero-pic img,
    .wrapper img {
      width: 100%;
    }

    .hero-pic img {
      height: 100%;
      object-fit: cover;
      object-position: top 0.4rem right -1.3rem;
      transform: scale(1.9);
    }

    .hero-info h1,
    h2 {
      font-weight: 400;
    }

    article p,
    .hero-info h2 {
      color: var(--secondary-color);
    }

    .hero-info h2 {
      font-size: 1rem;
      margin: 0 0 1rem 0;
    }

    footer,
    .logo-container,
    .experience,
    .cta,
    .portfolio-skills,
    .btn-bg {
      justify-content: center;
    }

    .theme-btn,
    .logo-container a,
    .logo-container img {
      height: 1.5rem;
    }

    .experience {
      margin: auto;
      margin-top: 1.4rem;
      max-width: 20rem;
    }

    .experience b {
      font-weight: 500;
    }

    .experience h2 {
      width: 30%;
      font-weight: 300;
      font-size: 0.9rem;
    }

    .cta {
      margin-top: 1.2rem;
    }

    .cta,
    .btn-bg {
      gap: 2rem;
    }

    .btn,
    .btn-2,
    .btn-bg {
      border-radius: 0.7rem;
      border: none;
    }

    .btn,
    .btn-2,
    .btn-bg,
    .wrapper h3 {
      font-weight: 600;
    }

    .btn,
    .btn-2,
    .btn-bg,
    .wrapper,
    .project-wrapper {
      transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        background-color 0.3s ease, color 0.3s ease;
    }

    .download-btn:hover {
      background-color: var(--cta-hover-color);
    }

    .theme-btn,
    .download-btn:hover,
    .contact-btn:hover,
    .btn-2:hover,
    .wrapper img:hover {
      cursor: pointer;
    }

    .btn:hover,
    .btn-2:hover,
    .project-wrapper:hover,
    .logo-container a:hover {
      transform: scale(0.98);
    }

    .btn:active,
    .btn-2:active,
    .project-wrapper:active,
    .logo-container a:active {
      transform: scale(1);
    }

    .contact-btn:hover,
    .download-btn {
      background-color: var(--btn-bg-color);
      color: white;
    }

    .contact-btn:hover {
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .btn-2:hover,
    .active-btn {
      background-color: white;
    }

    .btn,
    .btn-2 {
      height: 3rem;
    }

    .btn {
      width: 9rem;
    }

    .btn-2 {
      width: 8.5rem;
    }

    .download-btn {
      transition: background-color 0.3s ease;
    }

    .portfolio-skills {
      height: 4rem;
      margin-top: 1.5rem;
      position: relative;
    }

    .btn-bg,
    .wrapper {
      width: 20rem;
    }

    article p,
    .btn-bg {
      background-color: var(--btn-bg-light);
    }

    .hero,
    .portfolio,
    .skills {
      margin-top: 2rem;
    }

    .skills {
      display: none;
    }

    .wrapper img {
      border-radius: 1rem;
    }

    article,
    .wrapper h3 {
      margin-bottom: 1.5rem;
    }

    article {
      flex-wrap: wrap;
    }

    article p {
      border-radius: 0.5rem;
      flex-grow: 20;
      padding: 1rem;
    }

    footer {
      margin: 3rem 0;
    }

    @media screen and (min-width: 900px) {

      .skills,
      .portfolio {
        flex-direction: row;
        width: 45rem;
      }

      .skills {
        margin: 2rem auto 0;
      }

      .portfolio {
        margin: 2rem auto;
        flex-wrap: wrap;
        justify-content: center;
      }

      .wrapper {
        width: calc(48%);
        flex: none;
      }
    }
  </style>
</head>

<body>
  <section class="hero">
    <i id="toggleTheme" class="fas fa-sun theme-btn"></i>
    <div class="hero-pic">
      <div class="inner-circle"></div>
      <img src=${profilePicUrl} alt="" />
    </div>
    <div class="hero-info">
      <h1>${fullName}</h1>
      <h2>${selfDesc}</h2>
      <div class="logo-container">
        <a href=${githubLink}><i class="fab fa-github"></i></a>
        <a href=${linkedinLink}><i class="fab fa-linkedin"></i></a>
        <a href="${twitterLink}"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
  </section>
  <section class="experience">
    <h2><b>${yearsOfExperience}</b><br />Years<br />${workDesc}</h2>
    <h2><b>${numOfProjects}</b><br />Projects<br />Completed</h2>
    <h2><b>${numOfHappyClients}</b><br />Satisfied<br />Clients</h2>
  </section>
  <section class="cta">
    <a href=${cvLink} target=_blank>
      <button class="btn download-btn">Download CV</button>
    </a>
    <a href="mailto:${email}"><button class="btn contact-btn">Contact Me</button></a>
  </section>
  <section class="portfolio-skills">
    <div class="btn-bg">
      <button class="btn-2 active-btn" id="portfolio-btn">Portfolio</button>
      <button class="btn-2" id="skills-btn">Skills</button>
    </div>
  </section>
  <section class="portfolio" id="portfolio">
    ${Object.values(projects)
      .map(
        (project) => `
    <div class="wrapper project-wrapper">
      <a href=${project.githubLink} target=_blank><img src=${project.image} alt=""/></a>
    </div>`
      )
      .join(``)}
  </section>
  <section class="skills" id="skills">
    <div class="">
      <article class="">
        ${Object.values(skills)
          .map((skill) => `<p>${skill.name}</p>`)
          .join(``)}
      </article>
    </div>
  </section>
  <footer>
    <p>&copy ${fullName} 2023</p>
  </footer>
  <script>
    // Click events for buttons
    const portfolio = document.getElementById("portfolio");
    const portfolioBtn = document.getElementById("portfolio-btn");
    const skills = document.getElementById("skills");
    const skillsBtn = document.getElementById("skills-btn");

    portfolioBtn.addEventListener("click", (event) => {
      skills.style.display = "none";
      portfolio.style.display = "flex";
      skillsBtn.classList.remove("active-btn");
      portfolioBtn.classList.add("active-btn");
    });

    skillsBtn.addEventListener("click", (event) => {
      skills.style.display = "flex";
      portfolio.style.display = "none";
      portfolioBtn.classList.remove("active-btn");
      skillsBtn.classList.add("active-btn");
    });

    // Light & Dark Theme
    document.addEventListener("DOMContentLoaded", () => {
      const toggleThemeButton = document.getElementById("toggleTheme");
      const githubLogo = document.getElementsByClassName('fa-github');
      const linkedinLogo = document.getElementsByClassName('fa-linkedin');
      const emailLogo = document.getElementsByClassName('fa-twitter');
      const themeIcon = document.getElementsByClassName('theme-btn');

      const lightLogos = {
        github: "black",
        linkedin: "black",
        email: "black",
        icon: "fas fa-sun theme-btn"
      };

      const darkLogos = {
        github: "#FFFFFF",
        linkedin: "white",
        email: "white",
        icon: "fas fa-moon theme-btn"
      };

      function setTheme(isDark) {
        githubLogo[0].style.color = isDark ? darkLogos.github : lightLogos.github;
        linkedinLogo[0].style.color = isDark ? darkLogos.linkedin : lightLogos.linkedin;
        emailLogo[0].style.color = isDark ? darkLogos.email : lightLogos.email;
        themeIcon[0].className = isDark ? darkLogos.icon : lightLogos.icon;
      }

      toggleThemeButton.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("isDark", isDark);

        setTheme(isDark);
      });

      const loadTheme = () => {
        const isDark = localStorage.getItem("isDark") === "true";
        document.body.classList.toggle("dark-theme", isDark);

        setTheme(isDark);
      };

      // Load saved theme from local storage or default to light theme
      loadTheme();
    });

  </script>
</body>

</html>`}</pre>
      ) : null}
    </div>
  );
}
