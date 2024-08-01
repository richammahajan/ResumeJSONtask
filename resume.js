const resume = {
    "name": "Richa Mahajan",
    "contact_information": {
      "location": "Pune",
      "phone": "7768014651",
      "email": "richammahajan@gmail.com"
    },
    "skills": [
      "Python",
      "Java (basics)",
      "OOPS concepts",
      "DBMS",
      "SQL Queries",
      "HTML & CSS",
      "Microsoft PowerPoint",
      "Figma",
      "Canva",
      "Critical thinking",
      "Communication Skills",
      "Leadership",
      "Teamwork"
    ],
    "languages": [
      "English",
      "Marathi",
      "Hindi"
    ],
    "education": [
      {
        "institution": "Vishwakarma Institute of Technology, Pune",
        "duration": "December 2021 — June 2025",
        "degree": "Artificial Intelligence and Data Science",
        "percentage": ""
      },
      {
        "institution": "M.P. International School & Junior College, Pune",
        "duration": "July 2019 — July 2021",
        "degree": "HSC",
        "percentage": "91.67%"
      },
      {
        "institution": "D.A.V. Public School, Aundh, Pune",
        "duration": "June 2018 — June 2019",
        "degree": "SSC",
        "percentage": "93.6%"
      }
    ],
    "projects": [
      {
        "name": "MedichainAI",
        "description": "Used Blockchain Technology and Generative AI to securely handle test data for patients and offer individualized medical treatment.",
        "technologies_used": ["Blockchain Technology", "Generative AI"]
      },
      {
        "name": "Talkify: A tool to help people with stuttering condition",
        "description": "Obtained the 'sep-28k' dataset from Apple, comprising podcast episodes of approximately one hour each and utilized it for accurate labeling, integrating NLP methods to discern characteristics of stuttering. Implemented a Convolutional Neural Network (CNN) model tailored for speech feature extraction.",
        "technologies_used": ["NLP methods", "Convolutional Neural Network (CNN)"]
      },
      {
        "name": "Traffic Management System using YOLO Algorithm (Scopus Indexed)",
        "description": "Applied computer vision and deep learning for real-time traffic estimation, allowing the model to recognize intricate traffic patterns. Deployed YOLOv7, a neural network model for precise object detection to determine traffic density in a dynamic traffic environment.",
        "technologies_used": ["computer vision", "deep learning", "YOLOv7"]
      }
    ],
    "extra_curricular_activities": [
      {
        "activity": "Internal SIH winner, Pune",
        "description": "Our team 'ByteClub' won the internal SIH held from 23rd to 24th September 2023. Problem Statement: Developing a Blockchain-based eVault for Legal Records",
        "duration": "September 2023 — September 2023"
      },
      {
        "activity": "Volunteer, Poona Geriatric care center, Pune",
        "description": "Assisted elderly residents with daily activities, creating a supportive and caring environment. Organized entertaining events to enhance residents’ well-being and developed communication skills through diverse interactions.",
        "duration": "November 2022"
      },
      {
        "activity": "Dance club (Zephyr)",
        "description": "I was in the dance club of our college and have led various dance groups. Choreographed various dances and participated in competitions.",
        "duration": ""
      }
    ],
    "courses": [
      {
        "course_name": "Microsoft Excel - Excel from Beginner to Advanced",
        "platform": "Udemy"
      },
      {
        "course_name": "Microsoft Power BI Data Analyst",
        "platform": "Coursera"
      },
      {
        "course_name": "Artificial Intelligence A-Z 2024",
        "platform": "Udemy"
      }
    ]
  };
  
  function displayResume() {
    const resumeContainer = document.getElementById('resume-container');
    
    // Display Name
    const nameElement = document.createElement('h1');
    nameElement.textContent = resume.name;
    resumeContainer.appendChild(nameElement);
    
    // Display Contact Information
    const contactInfo = resume.contact_information;
    const contactElement = document.createElement('p');
    contactElement.innerHTML = `
      Location: ${contactInfo.location}<br>
      Phone: ${contactInfo.phone}<br>
      Email: ${contactInfo.email}
    `;
    resumeContainer.appendChild(contactElement);
    
    // Display Skills
    const skillsElement = document.createElement('h2');
    skillsElement.textContent = 'Skills';
    resumeContainer.appendChild(skillsElement);
    
    const skillsList = document.createElement('ul');
    resume.skills.forEach(skill => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      skillsList.appendChild(skillItem);
    });
    resumeContainer.appendChild(skillsList);
    
    // Display Languages
    const languagesElement = document.createElement('h2');
    languagesElement.textContent = 'Languages';
    resumeContainer.appendChild(languagesElement);
    
    const languagesList = document.createElement('ul');
    resume.languages.forEach(language => {
      const languageItem = document.createElement('li');
      languageItem.textContent = language;
      languagesList.appendChild(languageItem);
    });
    resumeContainer.appendChild(languagesList);
    
    // Display Education
    const educationElement = document.createElement('h2');
    educationElement.textContent = 'Education';
    resumeContainer.appendChild(educationElement);
    
    resume.education.forEach(edu => {
      const eduItem = document.createElement('p');
      eduItem.innerHTML = `
        Institution: ${edu.institution}<br>
        Duration: ${edu.duration}<br>
        Degree: ${edu.degree}<br>
        Percentage: ${edu.percentage}
      `;
      resumeContainer.appendChild(eduItem);
    });
    
    // Display Projects
    const projectsElement = document.createElement('h2');
    projectsElement.textContent = 'Projects';
    resumeContainer.appendChild(projectsElement);
    
    resume.projects.forEach(proj => {
      const projItem = document.createElement('p');
      projItem.innerHTML = `
        Name: ${proj.name}<br>
        Description: ${proj.description}<br>
        Technologies Used: ${proj.technologies_used.join(', ')}
      `;
      resumeContainer.appendChild(projItem);
    });
    
    // Display Extra Curricular Activities
    const extraCurricularElement = document.createElement('h2');
    extraCurricularElement.textContent = 'Extra Curricular Activities';
    resumeContainer.appendChild(extraCurricularElement);
    
    resume.extra_curricular_activities.forEach(activity => {
      const activityItem = document.createElement('p');
      activityItem.innerHTML = `
        Activity: ${activity.activity}<br>
        Description: ${activity.description}<br>
        Duration: ${activity.duration}
      `;
      resumeContainer.appendChild(activityItem);
    });
    
    // Display Courses
    const coursesElement = document.createElement('h2');
    coursesElement.textContent = 'Courses';
    resumeContainer.appendChild(coursesElement);
    
    resume.courses.forEach(course => {
      const courseItem = document.createElement('p');
      courseItem.innerHTML = `
        Course Name: ${course.course_name}<br>
        Platform: ${course.platform}
      `;
      resumeContainer.appendChild(courseItem);
    });
  }
  
  document.addEventListener('DOMContentLoaded', displayResume);
  
