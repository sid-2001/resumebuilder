import React, { useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WebIcon from "@mui/icons-material/Web";

const Header: React.FC = () => {
  const [name, setName] = useState(
    localStorage.getItem("name") || "Siddhant Kaushik"
  );
  const [title, setTitle] = useState(
    localStorage.getItem("title") || "Full Stack Developer"
  );
  const [location, setLocation] = useState(
    localStorage.getItem("location") || "Gurugram, Haryana"
  );
  const [phone, setPhone] = useState(
    localStorage.getItem("phone") || "                 +91-9425369493"
  );
  const [email, setEmail] = useState(
    localStorage.getItem("email") || "siddhantkaushik22@gmail.com"
  );
  const [linkedin, setLinkedin] = useState(
    localStorage.getItem("linkedin") || "linkedin.com/in/username"
  );
  const [twitter, setTwitter] = useState(
    localStorage.getItem("twitter") || "twitter.com/username"
  );
  const [portfolio, setPortfolio] = useState(
    localStorage.getItem("portfolio") || "portfolio.com"
  );
  const [description, setDescription] = useState(
    localStorage.getItem("description") ||
      "Proficient in building RESTful and GraphQL APIs using Node.js, Express, and Apollo Server.Skilled in database management with MongoDB, PostgreSQL, and MySQL, ensuring optimal data storage and retrieval.Experienced in implementing authentication and authorization mechanisms, including OAuth 2.0 and JWT.Proficient in asynchronous programming, event-driven architecture, and real-time communication Knowledgeable in containerization with Docker and orchestration with Kubernetes for scalable deployment and management of applications."
  );

  const handleEditableChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, key: string) =>
    (e: React.FocusEvent<HTMLDivElement>) => {
      const value = e.target.innerText;
      setter(value);
      localStorage.setItem(key, value);
    };

  const handleLinkEdit = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    key: string,
    currentValue: string
  ) => {
    const newLink = prompt("Edit URL:", currentValue);
    if (newLink) {
      setter(newLink);
      localStorage.setItem(key, newLink);
    }
  };

  return (
    <Box sx={{ textAlign: "center", marginBottom: 2, marginTop: 7 }}>
      <Typography
        contentEditable
        suppressContentEditableWarning
        onBlur={handleEditableChange(setName, "name")}
        sx={{
          marginBottom: "4px",
          fontSize: "30px",
          textAlign: "left",
          fontWeight: "bold",
          color: "grey",
        }}
      >
        {name}
      </Typography>
      <Typography
        contentEditable
        suppressContentEditableWarning
        onBlur={handleEditableChange(setTitle, "title")}
        sx={{
          marginBottom: "4px",
          fontSize: "1.5rem",
          textAlign: "left",
          fontWeight: "bold",
          color: "skyblue",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          padding: "0px",
          fontSize: "1rem",
          marginBottom: "4px",
          color: "grey",
        }}
      >
        <Typography
          contentEditable
          suppressContentEditableWarning
          onBlur={handleEditableChange(setLocation, "location")}
          sx={{ marginRight: "4px", fontSize: "1rem" }}
        >
          {location}
        </Typography>
        <Typography
          contentEditable
          suppressContentEditableWarning
          onBlur={handleEditableChange(setPhone, "phone")}
          sx={{ marginRight: "4px", fontSize: "1rem" }}
        >
          {phone}
        </Typography>
        <Typography
          contentEditable
          suppressContentEditableWarning
          onBlur={handleEditableChange(setEmail, "email")}
          sx={{ marginRight: "4px", fontSize: "1rem", width: "50%" }}
        >
          {email}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "left", gap: "10px" }}>
        <Link
          href={`https://${linkedin}`}
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "grey",
          }}
        >
          <LinkedInIcon
            sx={{ cursor: "pointer" }}
            onClick={() => handleLinkEdit(setLinkedin, "linkedin", linkedin)}
          />
          <Typography
            sx={{ marginLeft: "4px", fontSize: "1rem", color: "grey" }}
          >
            {linkedin}
          </Typography>
        </Link>
        <Link
          href={`https://${twitter}`}
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "grey",
          }}
        >
          <TwitterIcon
            sx={{ cursor: "pointer" }}
            onClick={() => handleLinkEdit(setTwitter, "twitter", twitter)}
          />
          <Typography
            sx={{ marginLeft: "4px", fontSize: "1rem", color: "grey" }}
          >
            {twitter}
          </Typography>
        </Link>
        <Link
          href={`https://${portfolio}`}
          target="_blank"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "grey",
          }}
        >
          <WebIcon
            sx={{ cursor: "pointer" }}
            onClick={() => handleLinkEdit(setPortfolio, "portfolio", portfolio)}
          />
          <Typography
            sx={{ marginLeft: "4px", fontSize: "1rem", color: "grey" }}
          >
            {portfolio}
          </Typography>
        </Link>
      </Box>
      <Typography
        contentEditable
        suppressContentEditableWarning
        onBlur={handleEditableChange(setDescription, "description")}
        sx={{
          marginTop: "10px",
          fontSize: "1rem",
          textAlign: "left",
          color: "grey",
          minHeight: "4rem",
          maxHeight: "9rem",
          overflowY: "auto",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Header;
