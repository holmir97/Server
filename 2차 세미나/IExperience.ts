export interface IExperience{
    title: String;
    company: String;
    location:String;

    // miss
    from: Date;
    to: Date;

    current: Boolean;
    description: String;
}

// require data transfer object

// export interface IExperienceDTO{
//     title: String;
//     company: String;
//     location:String;
//     current: Boolean;
//     description: String;
// }