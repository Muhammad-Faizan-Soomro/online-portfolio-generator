import mongoose, { Schema } from "mongoose";

export const DetailSchema = new Schema({
  user_id : {
    // type: Schema.Types.ObjectId,
    // ref: 'User'
    type: String
  },
  template: {
    type: String
  },
  fullName: {
    type: String
  },
  profilePicUrl: {
    type: String
  },
  workDesc: {
    type: String
  },
  selfDesc: {
    type: String
  },
  cvLink: {
    type: String,
  },
  image: String,
  aboutMe: {
    type: String
  },
  numOfProjects: {
    type: String
  },
  yearsOfExperience: {
    type: String
  },
  numOfHappyClients: {
    type: String
  },
  totalCustomerReviews: {
    type: String
  },
  skills: [
    {
      name: { type: String},
      percentage: { type: String}
    }
  ],
  experience: [
    {
      jobTitle: { type: String},
      companyName: { type: String},
      jobDescription: { type: String},
      startDate: { type: String},
      endDate: { type: String}
    }
  ],
  projects: [
    {
      image: String,
      githubLink: String,
      liveLink: String
    }
  ],
  location: String,
  email: {
    type: String
  },
  mobileNumber: String,
  facebookLink: String,
  githubLink: String,
  linkedinLink: String,
  twitterLink: String
},
{
    timestamps:true
});

export const Detail = mongoose.models.detail || mongoose.model('detail',DetailSchema);