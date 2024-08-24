// src/components/ProjectExperience.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
//@ts-ignore
import Project from "./Project";

const ProjectExperience: React.FC = () => {
  const projects = [
    {
      projectName: "E-commerce Platform Revamp",
      role: "Lead Frontend Developer",
      duration: "2021 – 2023",
      responsibilities: [
        "Led the front-end revamp of an e-commerce platform, improving performance by 50%.",
        "Implemented responsive design, resulting in a 30% increase in mobile user engagement.",
        "Collaborated with backend teams to define API contracts and ensure seamless integration.",
        "Conducted A/B testing to optimize UI/UX, leading to a 20% increase in conversion rates.",
      ],
    },
    {
      projectName: "Real-Time Chat Application",
      role: "React Developer",
      duration: "2019 – 2021",
      responsibilities: [
        "Developed a real-time chat application using React and Socket.io.",
        "Implemented state management using Redux, reducing app crashes by 80%.",
        "Integrated WebSocket for real-time communication, resulting in a latency of less than 200ms.",
        "Designed and executed unit tests, achieving 95% code coverage.",
      ],
    },
  ];

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Project Experience
      </Typography>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </Box>
  );
};

export default ProjectExperience;
