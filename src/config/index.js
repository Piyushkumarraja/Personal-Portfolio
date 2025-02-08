// IMPORTs HERE
import { calculateYearsOfExperience } from "utils/functions";

// GLOBAL VARIABLEs
const space = `\u00A0`;

/* *********************************************************************************************************** */
/* *********************************************************************************************************** */

export const fullName = "Piyush Kumar";
export const currentCompanyName = "Leena AI";
export const currentCompanySite = "https://leena.ai/";
export const emailId = "varshneypiyush67@gmail.com";
export const designation = "Frontend Developer";
export const careerStartDate = "01-10-2022"; // 15 July 2019; Format: MM-DD-YYYY;
export const YOE = calculateYearsOfExperience(careerStartDate);
export const RESUME_URL =
  "https://drive.google.com/file/d/1Ab-gZVAzxTpAkFMTU-uOI4XX4sjprD-9/view?usp=sharing";
export const SELF_PICTURE_URL =
  "https://github.com/Piyushkumarraja/Personal-Portfolio/assets/43479446/1c0e3e44-7370-4504-9d86-252d9eaa3f66";
export const shortDescriptionHtml = `Hello!👋🏼I am a passionate frontend developer with ${YOE} years of experience, deeply committed to maintaining high standards of code quality. Currently contributing to the development team at <b><a href="${currentCompanySite}" target="_blank">${currentCompanyName}</a></b>, where I focus on building robust and efficient software solutions.`;
