export interface IEducation{
    school: String;
    degree: String;
    fieldofstudy: String;
    
    // miss
    from: Date;
    to: Date;
    
    current: boolean;
    description: String;
}


// require data transfer object

// export interface IEducationDTO{
//     school: String;
//     degree: String;
//     fieldofstudy: String;
//     current: boolean;
//     description: String;
// }