import mongoose from "mongoose";

// miss
import {IExperience} from "./IExperience";
import {IEducation} from "./IEducation";
import {ISocial} from "./ISocial";

export interface IProfile{
    user: mongoose.SchemaTypes.ObjectID;
    company: String;
    website: String;
    location: String;
    status: String;
    skills: [String];
    bio: String;
    githubusername: String;
    experience: [IExperience];
    education: [IEducation];
    social: [ISocial];
    date: Date;
}

export interface IProfileDTO{
    user: mongoose.SchemaTypes.ObjectID;
    company: String;
    website: String;
    location: String;
    status: String;
    skills: [String];
    bio: String;
    githubusername: String;
    experience: [IExperience];
    education: [IEducation];
    social: [ISocial];
    date: Date;
}

