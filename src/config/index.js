// IMPORTs HERE
import { calculateYearsOfExperience } from "utils/functions";

// GLOBAL VARIABLEs
const space = `\u00A0`;

/* *********************************************************************************************************** */
/* *********************************************************************************************************** */

export const fullName = "Piyush Kumar";
export const currentCompanyName = "Pinnacle Infotech";
export const currentCompanySite = "www.pinnacleway.work";
export const emailId = "varshneypiyush67@gmail.com";
export const designation = "Software Enginner";
export const careerStartDate = "01-10-2022"; // 15 July 2019; Format: MM-DD-YYYY;
export const YOE = calculateYearsOfExperience(careerStartDate);
export const RESUME_URL = "https://drive.google.com/uc?id=1yBdmFvsmzKpEB2c203g0rK8oOWWqU8DQ";
export const SELF_PICTURE_URL = "";
export const shortDescriptionHtml = `Hello! 👋🏼${space.repeat(2)}I'm a guy slightly obsessed 
  with code quality. I have ${YOE} years of experience in full-stack development. I am currently working 
  at <a href="${currentCompanySite}" target="_blank">${currentCompanyName}</a>.`;
