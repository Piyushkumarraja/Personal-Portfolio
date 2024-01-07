import {
  apiDocumenterImage,
  twitterCloneImgae,
  chatSpeherImage,
  ApiIcon,
  TwitterIcon,
  chatIcon,
} from "assets/Images";
import { techListArray } from "./techList";

/* *********************************************************************************************************** */
/* *********************************************************************************************************** */

export const projectsList = [
  {
    name: "API Documenter",
    icon: ApiIcon,
    overviewImg: apiDocumenterImage,
    iconSize: "32px",
    duration: ``,
    techList: techListArray.filter((tech) =>
      [
        "javascript",
        "react",
        "nodejs",
        "expressjs",
        "mongo",
        "html",
        "css",
        "sass",
        "git",
        "api",
        "materialUi",
        "docker",
      ].includes(tech.id)
    ),
    description: `An application for documenting all APIs for all microservices in an
    organization. One can also call the API from here and see the results.
    It provides controls to maintain different levels of access to a user
    for a microservice.`,
    externalUrls: [
      {
        type: "demovideo",
        url: `https://drive.google.com/uc?id=1oqpiK_GMw-hmTxofoCppJiHeh9y7X5y7`,
        isVideo: true,
      },
      {
        type: "website",
        url: `https://api-documenter.web.app`,
      },
      {
        type: "github",
        url: `https://github.com/piyushkumarraja/api-documenter`,
        iconSize: "23px",
      },
    ],
  },
  {
    name: "Twitter Clone",
    icon: TwitterIcon,
    overviewImg: twitterCloneImgae,
    iconSize: "28px",
    duration: ``,
    techList: techListArray.filter((tech) =>
      ["javascript", "nodejs", "websocket", "html", "css", "sass", "git", "api", "docker"].includes(
        tech.id
      )
    ),
    description: `This project is a Twitter clone, offering users a familiar social media experience. It includes features like user registration and authentication with unique usernames and passwords. Utilizing JWT for secure authentication, the system employs MongoDB to organize user data, tweets, and follower information. Users can follow/unfollow, create, edit, and delete tweets. The timeline feature mirrors Twitter's functionality, displaying tweets from followed users in chronological order. This Twitter clone provides a platform where users can engage in social interactions, share thoughts, and stay connected with a user-friendly interface reminiscent of the popular social media platform.`,
    externalUrls: [
      {
        type: "demovideo",
        url: `https://github.com/Piyushkumarraja/Personal-Portfolio/assets/43479446/3ae9809e-78b3-4518-9b39-a85ebe59fcf3`,
        isVideo: true,
      },
      {
        type: "github",
        url: `https://github.com/Piyushkumarraja/Twitter.git`,
        iconSize: "23px",
      },
    ],
  },
  {
    name: "Chat-Sphere",
    icon: chatIcon,
    overviewImg: chatSpeherImage,
    iconSize: "30px",
    duration: ``,
    techList: techListArray.filter((tech) =>
      [
        "javascript",
        "react",
        "redux",
        "nodejs",
        "expressjs",
        "mongo",
        "html",
        "css",
        "sass",
        "git",
        "api",
        "materialUi",
        "socket",
      ].includes(tech.id)
    ),
    description: `Designed & Developed a web-based chat.
    application. Allows users to communicate with each other personally and within a group. Real Time Chatting with Typing indicators and notification.`,
    externalUrls: [
      {
        type: "github",
        url: `https://github.com/Piyushkumarraja/Chat-Sphere`,
        iconSize: "23px",
      },
    ],
  },
];
