import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Chip,
  Paper,
  Divider,
} from "@mui/material";

const Skills: React.FC = () => {
  const [frameworks, setFrameworks] = useState<string[]>([
    "AngularJS (Advanced)",
    "ReactJS (Experienced)",
    "BackboneJS",
    "MVC Architecture",
    "NodeJS",
  ]);
  const [languages, setLanguages] = useState<string[]>([
    "English (Native)",
    "German (Fluent)",
    "French (Conversational)",
  ]);
  const [frameworkInput, setFrameworkInput] = useState<string>("");
  const [languageInput, setLanguageInput] = useState<string>("");

  const handleFrameworkKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && frameworkInput.trim()) {
      setFrameworks([...frameworks, frameworkInput.trim()]);
      setFrameworkInput("");
    }
  };

  //@ts-ignore
  const handleLanguageKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && languageInput.trim()) {
      setLanguages([...languages, languageInput.trim()]);
      setLanguageInput("");
    }
  };

  const handleDeleteFramework = (chipToDelete: string) => {
    setFrameworks((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  //@ts-ignore
  const handleDeleteLanguage = (chipToDelete: string) => {
    setLanguages((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const size = {
    fontSize: "0.875rem", // Small font size
    spacing: "4px", // Minimal spacing
    color: "grey",
  };

  return (
    <Box sx={{ marginBottom: 0, alignContent: "left" }}>
      <Divider>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: 0, color: "grey" }}
        >
          Skills
        </Typography>
      </Divider>

      <Paper
        component="ul"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
          boxShadow: "none",
          alignContent: "left",
          padding: 0.5,
          marginTop: "0px",
          paddingLeft: "0px",
          marginBottom: 0,
        }}
      >
        {frameworks.map((framework, index) => (
          <li key={index}>
            <Chip
              label={framework}
              onDelete={() => handleDeleteFramework(framework)}
              sx={{
                margin: 0.5,
                marginLeft: "0px",
                "& .MuiChip-deleteIcon": {
                  display: "none",
                },
                "&:hover .MuiChip-deleteIcon": {
                  display: "inline-flex",
                },
              }}
            />
          </li>
        ))}
        <TextField
          value={frameworkInput}
          onChange={(e) => setFrameworkInput(e.target.value)}
          onKeyDown={handleFrameworkKeyDown}
          variant="standard"
          fullWidth
          placeholder=""
          InputProps={{
            disableUnderline: true,
            style: { fontSize: size.fontSize },
          }}
          sx={{ margin: 0.5, flexGrow: 1 }}
        />
      </Paper>
    </Box>
  );
};

export default Skills;
