import React, { useState } from "react";
import { Box, Typography, List, ListItem, Divider } from "@mui/material";

interface ProjectProps {
  projectName: string;
  role: string;
  duration: string;
  highlights: string[];
}

const Project: React.FC<ProjectProps> = ({
  projectName,
  role,
  duration,
  highlights,
}) => {
  // Common size settings
  const size = {
    fontSize: "1rem", // Small font size
    spacing: "4px", // Minimal spacing
  };

  const [projectTitle, setProjectTitle] = useState(projectName);
  const [projectRole, setProjectRole] = useState(role);
  const [projectDuration, setProjectDuration] = useState(duration);
  const [projectHighlights, setProjectHighlights] = useState(highlights);

  const handleEditableChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, index?: number) =>
    (e: React.FocusEvent<HTMLDivElement>) => {
      const value = e.target.innerText;
      if (index !== undefined) {
        const updatedHighlights = [...projectHighlights];
        updatedHighlights[index] = value;
        setProjectHighlights(updatedHighlights);
      } else {
        setter(value);
      }
    };

  return (
    <Box sx={{ marginBottom: size.spacing }}>
      <Typography
        contentEditable
        suppressContentEditableWarning
        onBlur={handleEditableChange(setProjectTitle)}
        variant="body1"
        sx={{
          marginBottom: size.spacing,
          fontSize: size.fontSize,
          fontWeight: "bold",
          color: "grey",
        }}
      >
        {projectTitle}
      </Typography>
      <Typography
        contentEditable
        suppressContentEditableWarning
        onBlur={handleEditableChange(setProjectRole)}
        variant="body2"
        sx={{
          marginBottom: size.spacing,
          fontSize: size.fontSize,
          fontWeight: "bold",
          color: "skyblue",
        }}
      >
        {projectRole}
      </Typography>
      <Typography
        contentEditable
        suppressContentEditableWarning
        onBlur={handleEditableChange(setProjectDuration)}
        variant="body2"
        sx={{
          marginBottom: size.spacing,
          fontSize: size.fontSize,
          fontWeight: "bold",
          color: "grey",
        }}
      >
        {projectDuration}
      </Typography>
      <List sx={{ p: 0 }}>
        {projectHighlights.map((highlight, index) => (
          <ListItem
            key={index}
            sx={{ paddingLeft: 0, marginBottom: "0px", p: 0 }}
          >
            <Typography
              contentEditable
              suppressContentEditableWarning
              onBlur={handleEditableChange(
                //@ts-ignore
                setProjectHighlights,
                index
              )}
              sx={{
                fontSize: size.fontSize,
                padding: "0px",
                color: "grey",
              }}
            >
              {highlight}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const Experience: React.FC = () => {
  const projects = [
    {
      projectName: "E-commerce Platform",
      role: "Full Stack Developer",
      duration: "2020 – Present",
      highlights: [
        "Developed a fully responsive e-commerce platform using React.js, Node.js, and MongoDB.",
        "Implemented a secure user authentication system with JWT and OAuth2.",
        "Optimized database queries to reduce API response time by 50%.",
        "Led a team of 5 developers to deliver the project within a tight deadline.",
      ],
    },
    {
      projectName: "Inventory Management System",
      role: "Backend Developer",
      duration: "2018 – 2020",
      highlights: [
        "Designed and implemented RESTful APIs using Node.js and Express.",
        "Integrated third-party payment gateways and services.",
        "Automated data synchronization between different microservices.",
        "Wrote comprehensive unit and integration tests with Jest and Mocha.",
      ],
    },
  ];

  return (
    <Box>
      <Divider>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: 2, color: "grey" }}
        >
          Projects
        </Typography>
      </Divider>

      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </Box>
  );
};

export default Experience;
