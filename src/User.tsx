
import cottonAceImage from './Assets/Cotton Ace.png';
import AndroidInstrumentClueter from './Assets/AndoridInstrumentCluster.png';
import AgriAiCollect from './Assets/Farmer Dairy.png';
import Mygate from './Assets/Mygate.png';
import AgriDash from './Assets/Agi-Ai-Dash.png';
import KKMs from './Assets/KKMS.png';
import { title } from 'process';
import Skills from '@components/Skills';


const Info = {
    name : "Siddharth Verma",
    techStack : ["Software Developer Engineer", "Front-End Developer", "Android Developer", "Competative Programmer", "Python Developer", "Java Developer"],
    bio: "Results-driven Android Engineer with 2.7 years of experience in designing, developing, and maintaining robust mobile applications. Proficient in Java and Kotlin, with additional knowledge of React, FastAPI, and Python. Demonstrated ability to work effectively in dynamic environments,contributing to cross-functional teams and driving continuous improvement in application performance and user experience. Strong problem-solving skills and a commitment to delivering high-quality software solutions."
}



const ProjectInfo = [
     {
        title: "Cluster( Ola & Ather)",
        desc:  "Same as the two wheeler DashBoard of OlaTVS iQube. When the user rides the vehicle its speed battery engine health and the average distance the vehicle can go in the remaining battery level.",
        image: AndroidInstrumentClueter,
        live: "Used in Ola and Ather Energy",
        technologies: ["Andoroid" , "Java", "Cluster Hardware", "Jetpack components"]
     },
     {
        title: "Cotton Ace",
        desc:  "Developed and deployed an AI-driven Android application to detect pests in cotton farms, impacting thousands of farmers.\n● Managed the entire development cycle from end to end, implementing features for both Extension Workers and Farmers, resulting in a user-friendly application.\n● Enabled offline functionality using Room DB and scheduled data syncs with WorkManager, ensuring data availability even without internet connectivity.\n● Achieved 10K+ downloads on PlayStore, demonstrating the app's success and wide adoption. This project is funded by Google, USAID, and Walmart.",
        image: cottonAceImage,
        live: "Live on playstore having 10k+ download",
        technologies: ["Andoroid" , "Java","kotlin", "Dependency Injection", "navigation component", "MVVM Architecture", "Jetpack components"]
     },
     {
        title: "Agri AI Collect",
        desc:  "Designed, developed, and deployed an Android application to record crop details and predict crop health using user inputs (images, audio, text, dropdowns), enhancing agricultural efficiency.\n● Implemented local storage with Room DB and managed data retrieval using SQL queries, ensuring reliable data management and quick access.\n● The project is funded by Google, USAID, and Walmart, showcasing its significance and support from major organizations.",
        image: AgriAiCollect,
        live: "Live(1 month ago) on playstore having 100+ download",
        technologies: ["Andoroid" , "Java","kotlin", "Dependency Injection", "navigation component", "MVVM Architecture", "Jetpack components"]
     },{
        title: "MyGate(Security App)",
        desc:  "Enhanced the 'MyGate' app with over 1M+ downloads by fixing 20+ bugs and adding new features, significantly improving user satisfaction.\n● Improved ser engagement through push notifications and frontend development using React.js, increasing app usage and retention rates.",
        image: Mygate,
        live: "Live on playstore having 1M+ download",
        technologies: ["Andoroid" , "Java","kotlin", "Dependency Injection", "navigation component", "MVVM Architecture", "Jetpack components","Push Notification"]
     },
     {
        title: "AgriAI(Dashboard)",
        desc:  "Contribution on solving bugs on web front-end (React.js, React Redux)",
        image: AgriDash,
        live: "Live",
        technologies: ["React js", "Redux", "Javascript" , "css"]
     },
     {
        title: "KKMS(GOVT PROJECT)",
        desc:  "Contributing to both front-end (React.js, React Redux) and back-end development (FastAPI, PostgreSQL, Python), ensuring a seamless user experience.\n● Engaged in UI/UX design and server-side logic development, enhancing the overall functionality and appearance of the application.",
        image: KKMs,
        live: "Live",
        technologies: ["React js", "Redux", "Javascript" , "css", "Python", "FASTAPI"]
     }
    ]

const SkillInfo = [
         {
            title : "Android Native Developement",
            skills : ["Andoroid studio","Work Manager","Retrofit","Jetpack Components","Firebase","Playstore", "Dependency Injection (Dagger-Hilt)","Room DB","Glide for image loading"," RX Java","(Foreground, Background, and Bound Services)","Andorid Sdk","Notification","object-oriented programming (OOP)","Threads", "Handlers and Loopers", "Java","kotlin","Kotlin Coroutines", "MVVM", "Clean Architecture", "OkHttp", "SharedPreferences", "Dependency Injection", "navigation component","Activities and Fragments", "MVVM Architecture", "Jetpack components","Push Notification"]
         },
         {
            title : "Front-End Development",
            skills : ["HTML", "CSS","JAVAScript", "React js", "Tailwind css", "Material UI", "Bootstrap","Redux", "TypeScript"]
         },
         {
            title : "BACKEND Development",
            skills :  ["Python, FastApi, PostgresSQL", "SQL","Firebase"]
         },
         {
           title : "TOOLS",
           skills : ["Postman","Asana","BitBucket","GitHub", "PlayConsole", "Android studio", "VS code"]
         }
    ]


    const ExperinceInfo =[
      {
         role : "Software Developer Engineer - I",
         company : "Wadhwani AI",
         date : "Dec 2023 - Present",
         desc  : "At Wadhwani AI, I played a pivotal role in the development and deployment of AI-driven Android applications aimed at enhancing agricultural practices. I led the development of the Cotton Ace application, which utilizes AI to detect pests in cotton farms, benefiting thousands of farmers by providing them with an intuitive and offline-capable tool. The app has gained widespread adoption, achieving over 10K downloads on the PlayStore."
               + "In addition to Cotton Ace, I developed the Farmer Dairy application, which records crop details and predicts crop health, further supporting farmers in improving agricultural efficiency. My responsibilities included implementing local data storage solutions and managing data synchronization, ensuring consistent performance regardless of internet connectivity."
               + "Moreover, I contributed to the KKMS project, engaging in both front-end (React.js, React Redux) and back-end (FastAPI, PostgreSQL) development. My efforts in UI/UX design and server-side logic significantly improved the application's usability and performance."
               + "My work has not only driven significant technological advancements in agriculture but also demonstrated the power of AI in real-world applications. I have collaborated with cross-functional teams and led projects funded by major organizations such as Google, USAID, and Walmart, reinforcing the impact and scalability of the solutions developed.",
         skills : ["Android studio","jetpack Component", "kotlin","java","javaScript","React Js","Rest Api","Firebase","Python","Postgres","FastAPI"]
      },
      {
         role : "Android Engineer",
         company : "Wadhwani AI",
         date : "Mar 2023 - Dec 2023",
         desc  : "At Wadhwani AI, I played a pivotal role in the development and deployment of AI-driven Android applications aimed at enhancing agricultural practices. I led the development of the Cotton Ace application, which utilizes AI to detect pests in cotton farms, benefiting thousands of farmers by providing them with an intuitive and offline-capable tool. The app has gained widespread adoption, achieving over 10K downloads on the PlayStore."
               + "In addition to Cotton Ace, I developed the Farmer Dairy application, which records crop details and predicts crop health, further supporting farmers in improving agricultural efficiency. My responsibilities included implementing local data storage solutions and managing data synchronization, ensuring consistent performance regardless of internet connectivity."
               + "Moreover, I contributed to the KKMS project, engaging in both front-end (React.js, React Redux) and back-end (FastAPI, PostgreSQL) development. My efforts in UI/UX design and server-side logic significantly improved the application's usability and performance."
               + "My work has not only driven significant technological advancements in agriculture but also demonstrated the power of AI in real-world applications. I have collaborated with cross-functional teams and led projects funded by major organizations such as Google, USAID, and Walmart, reinforcing the impact and scalability of the solutions developed.",
         skills : ["Android studio","jetpack Component", "kotlin","java","javaScript","React Js","Rest Api","Firebase","Python","Postgres","FastAPI"]
      },
      {
         role : "Associate Software Developer",
         company : "MyGate",
         date : "Nov 2022 - Mar 2023",
         desc  : "At MyGate, I played a key role in enhancing the MyGate app, which has over 1 million downloads. My responsibilities included fixing more than 20 critical bugs and implementing new features that significantly improved the app's performance and user satisfaction. I developed and integrated push notifications, which led to increased user engagement and retention. Additionally, I contributed to frontend development using React.js, further optimizing the app's user interface and overall functionality. My contributions were instrumental in driving higher app usage and improving the overall user experience.",
         skills : ["Android studio","jetpack Component", "kotlin","java","Rest Api","Firebase"]
      },
      {
         role : "Intern & Associate Software Developer",
         company : "Antino Labs",
         date : "june 2022 - Nov 2023",
         desc  : "At Antino Labs, I served as an Android Developer Intern and Associate Software Developer. My primary responsibility was to develop an E-commerce application tailored for local vendors, which significantly boosted their sales by enhancing API management and improving user functionalities. I also played a key role in developing Android-based Instrument Clusters for two-wheeler dashboards, as well as a smart billing application. These contributions led to a streamlined billing process and improved real-time vehicle metrics display, thereby enhancing both vehicle usability and vendor operations efficiency. My work at Antino Labs involved close collaboration with cross-functional teams to ensure that the applications met high standards of performance and user satisfaction.",
         skills : ["Android studio","jetpack Component", "kotlin","java","Rest Api","Firebase"]
      } 
    ]

    const slugs = [
      "typescript",
      "javascript",
      "dart",
      "java",
      "react",
      "flutter",
      "android",
      "html5",
      "css3",
      "nodedotjs",
      "express",
      "nextdotjs",
      "prisma",
      "amazonaws",
      "postgresql",
      "firebase",
      "nginx",
      "vercel",
      "testinglibrary",
      "jest",
      "cypress",
      "docker",
      "git",
      "jira",
      "github",
      "gitlab",
      "visualstudiocode",
      "androidstudio",
      "sonarqube",
      "figma",
    ];




export {Info,ProjectInfo,SkillInfo,ExperinceInfo,slugs}