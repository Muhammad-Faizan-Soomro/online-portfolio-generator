import { NextResponse } from "next/server";


export async function POST(req, res) {
  const response = await req.json();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "onlineportfoliogenerator@gmail.com",
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "onlineportfoliogenerator@gmail.com",
    to: response.userEmail,
    subject: `Steps To Host Your Portfolio On Github`,
    html: "<h1>Dear User</h1><br/><p>I hope this email finds you well. We're thrilled that you've decided to download and create your HTML portfolio! To help you showcase your work to the world, we've put together a step-by-step guide on how to host your portfolio online. Follow these instructions, and soon your creations will be accessible to a global audience.</p><br/><h1>Choose a Hosting Provider:</h1><br/><p>Select a reliable hosting provider to make your portfolio accessible on the internet. Popular options include GitHub Pages, Netlify, and Vercel. Each has its own advantages, so choose the one that best fits your needs.</p><br/><h1>Create an Account:</h1><p>Sign up for an account on the hosting platform of your choice. Follow the registration process and verify your email address.</p><br/><h1>Upload Your Portfolio:</h1><p>Once you're logged in, look for an option to upload or deploy your website. This may involve creating a new repository (for GitHub Pages) or connecting your repository (for Netlify and Vercel). Follow the platform-specific instructions for this step.</p>",
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  return NextResponse.json({ result: response });
}
