/* *********************************************************************************************************** */
/* *********************************************************************************************************** */

// Skill category
export const categories = [
  {
    id: "backend",
    displayName: "Backend",
    show: true,
    sortOrder: 2,
  },
  {
    id: "frontend",
    displayName: "Frontend",
    show: true,
    sortOrder: 1,
  },
  {
    id: "devops",
    displayName: "DevOps",
    show: true,
    sortOrder: 3,
  },
  {
    id: "others",
    displayName: "Others",
    show: true,
    sortOrder: 4,
  },
];
const FRONTEND = categories?.find((s) => s.id === "frontend");
const BACKEND = categories?.find((s) => s.id === "backend");
const DEVOPS = categories?.find((s) => s.id === "devops");
const OTHERS = categories?.find((s) => s.id === "others");

export const experienceList = [
  {
    companyName: "Pinnacle Infotech",
    employmentType: "Full-Time",
    designation: "Full-stack Developer",
    duration: "Aug 2023 - Present",
    companyType: "Product-based",
    companyWebsite: "",
    companyIntro: "",
    works: [
      {
        bulletPoint: `Currently working as a frontend developer in Curamei’s product
        team, contributing to a US healthcare management solution utilized
        by hospitals.`,
        category: FRONTEND,
      },
      {
        bulletPoint: `Developing a patient summary screen with complex data involves
        component structure, data modeling, UI design, state management,
        and API integration to efficiently display and manage extensive
        patient information.`,
        category: FRONTEND,
      },
      {
        bulletPoint: `Implementing the visit feature to track patient encounters, ensuring a comprehensive and seamless healthcare experience. This feature encompasses functionalities such as scheduling, logging, and managing patient visits, contributing to an efficient encounter tracking system within the healthcare management solution.`,
        category: FRONTEND,
      },
      {
        bulletPoint: `Implementing Web Sockets for real-time updating of drop-down values. `,
        category: BACKEND,
      },
      {
        bulletPoint: `Developing multiple REST APIs to facilitate seamless communication and data exchange within the healthcare management solution. These APIs cover various functionalities, including patient data retrieval, encounter management, and visit tracking, ensuring robust and efficient backend support for the entire system.`,
        category: BACKEND,
      },
      {
        bulletPoint: `When implementing the patient registration feature with multiple forms, it's crucial to optimize API calls and manage state efficiently. Leveraging Recoil for state management can greatly enhance the overall performance and maintainability of the application. `,
        category: FRONTEND,
      },
    ],
  },
  {
    companyName: "Nference",
    employmentType: "Full-Time",
    designation: "Software Engineer",
    duration: "July 2022 - Aug 2023",
    companyType: "Product-based",
    companyWebsite: "",
    companyIntro: "",
    works: [
      {
        bulletPoint: `Developing next-generation interfaces for high throughput scanning
        clusters and clinical workflows. It includes integration of outputs from
        different micro-services and conveying on UI in a meaningful manner.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Developed global search & auto-suggestion feature which involved
        writing complex pipelines in MongoDB.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Utilized HTML, CSS, JavaScript and React to create 10+ responsive
        landing pages.`,
        category: FRONTEND,
      },
      {
        bulletPoint: `Developed other features like error alert mechanism with a due date
        & a setting page for inline quality check and scan metrics.`,
        category: FRONTEND,
      },
      {
        bulletPoint: `Proficient in using Kafka for efficient data transfer and integration.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Experienced in implementing Web Sockets for real-time
        communication between front-end and back-end.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Knowledgeable in leveraging MongoDB aggregation pipeline for
        efficient data processing.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Proficient in using Kafka for efficient data transfer and integration.`,
        category: BACKEND,
      },
    ],
  },
  {
    companyName: "Nference",
    employmentType: "Internship",
    designation: "Software Engineer Intern",
    duration: "Jan 2022 - July 2022",
    companyType: "Product-based",
    companyWebsite: "",
    companyIntro: "",
    works: [
      {
        bulletPoint: "Developed multi-layered & intelligent forms for Quality Check module.",
        category: FRONTEND,
      },
      {
        bulletPoint:
          "Contributed to authentication module with features like password expiry & account recovery modules.",
        category: FRONTEND,
      },
      {
        bulletPoint:
          "Successfully optimized queries, reducing response time from 30 seconds to 800 milliseconds, resulting in significant performance improvements.",
        category: BACKEND,
      },
      {
        bulletPoint: `Integrated Kafka to facilitate real-time data synchronization across multiple applications.`,
        category: BACKEND,
      },
      {
        bulletPoint: `Achieved a 75% reduction in deployment time by implementing a seamless deployment method of the applications in multiple modes and environments.`,
        category: DEVOPS,
      },
    ],
  },
];
