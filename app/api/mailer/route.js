import { NextResponse } from "next/server";

export async function POST(req, res) {
  const response = await req.json();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 587,
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
    html: "<h1>Dear User</h1><h2>Thank You for Using Our Service!</h2><br/><p>To help you showcase your work to the world, we've put together a step-by-step guide on how to host your portfolio online. Follow these instructions, and soon your creations will be accessible to a global audience.</p><h3>Steps to Upload Your Portfolio on GitHub and Make it Live Using GitHub Pages</h3><ol><li><strong>Create a GitHub Account:</strong><br/>If you don't have one, sign up for a GitHub account at <a href='https://github.com/'>github.com</a>.</li><br/><li><strong>Create a New Repository:</strong><ul><li>Once logged in, click on the "+" sign in the top right corner and select 'New repository.'</li><li>Name your repository. For example, you could name it <code>yourusername.github.io</code>. Make sure to replace <code>yourusername</code> with your actual GitHub username.</li><li>Choose whether the repository will be public or private. For hosting a portfolio with GitHub Pages, it needs to be public.</li></ul></li><br/><li><strong>Upload Your Portfolio to GitHub:</strong><ul><li>On your GitHub account page, navigate to your repository by clicking on its name.</li><li>Click on the 'Add file' dropdown and choose 'Upload files.'</li><li>Drag and drop your portfolio files into the designated area or click on 'choose your files' to browse your computer and select them.</li><li>Once your files are uploaded, scroll down and click on the 'Commit changes' button to save your files to the repository.</li></ul></li><br/><li><strong>Enable GitHub Pages:</strong><ul><li>Go to your repository on GitHub.</li><li>Click on the 'Settings' tab.</li><li>Scroll down to the 'GitHub Pages' section.</li><li>Under 'Source,' select the branch you want to use (typically <code>main</code> branch).</li><li>Click on 'Save.'</li></ul></li><li><strong>Access Your Portfolio:</strong><ul><li>Once GitHub Pages is enabled, you will see a message indicating the URL where your site is published. It should be <code>https://yourusername.github.io</code>.</li></ul></li><br/><p>We appreciate your trust and hope our service has been helpful to you. If you have any feedback or suggestions for improvement, please feel free to reach out to us. Have a wonderful day!</p>",
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  return NextResponse.json({ result: response });
}
