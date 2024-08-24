import React, { useState, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";

const Education: React.FC = () => {
  const [degree, setDegree] = useState(
    localStorage.getItem("degree") ||
      "Associate of Applied Science – Information Technology"
  );
  const [school, setSchool] = useState(
    localStorage.getItem("school") || "Resume Worded University, New York, NY"
  );
  const [year, setYear] = useState(
    localStorage.getItem("year") || "(2011-2019)"
  );

  const [hsDegree, setHsDegree] = useState(
    localStorage.getItem("hsDegree") || "Higher Secondary Education"
  );
  const [hsSchool, setHsSchool] = useState(
    localStorage.getItem("hsSchool") ||
      "Resume Worded High School, New York, NY"
  );
  const [hsYear, setHsYear] = useState(
    localStorage.getItem("hsYear") || "(2011-2018)"
  );

  // Save to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem("degree", degree);
  }, [degree]);

  useEffect(() => {
    localStorage.setItem("school", school);
  }, [school]);

  useEffect(() => {
    localStorage.setItem("year", year);
  }, [year]);

  useEffect(() => {
    localStorage.setItem("hsDegree", hsDegree);
  }, [hsDegree]);

  useEffect(() => {
    localStorage.setItem("hsSchool", hsSchool);
  }, [hsSchool]);

  useEffect(() => {
    localStorage.setItem("hsYear", hsYear);
  }, [hsYear]);

  const handleEditableChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.FocusEvent<HTMLDivElement>) => {
      const value = e.target.innerText;
      setter(value);
    };

  return (
    <Box sx={{ marginBottom: 0 }}>
      <Divider>
        {" "}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            marginTop: 2,
            color: "grey",
          }}
        >
          Education
        </Typography>
      </Divider>

      <Box sx={{ marginBottom: 0 }}>
        <Typography
          contentEditable
          suppressContentEditableWarning
          onBlur={handleEditableChange(setDegree)}
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontSize: "0.875rem",
            color: "grey",
          }}
        >
          {degree}
        </Typography>
        <Typography
          contentEditable
          suppressContentEditableWarning
          onBlur={handleEditableChange(setSchool)}
          variant="body2"
          sx={{
            fontSize: "0.875rem",
            color: "skyblue",
          }}
        >
          {school}
        </Typography>
        <Typography
          contentEditable
          suppressContentEditableWarning
          onBlur={handleEditableChange(setYear)}
          variant="body2"
          sx={{
            fontSize: "0.875rem",
            color: "grey",
          }}
        >
          {year}
        </Typography>
      </Box>

      <Box>
        <Typography
          contentEditable
          suppressContentEditableWarning
          onBlur={handleEditableChange(setHsDegree)}
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontSize: "0.875rem",
            color: "grey",
          }}
        >
          {hsDegree}
        </Typography>
        <Typography
          contentEditable
          suppressContentEditableWarning
          onBlur={handleEditableChange(setHsSchool)}
          variant="body2"
          sx={{
            fontSize: "0.875rem",
            color: "skyblue",
          }}
        >
          {hsSchool}
        </Typography>
        <Typography
          contentEditable
          suppressContentEditableWarning
          onBlur={handleEditableChange(setHsYear)}
          variant="body2"
          sx={{
            fontSize: "0.875rem",
            color: "grey",
          }}
        >
          {hsYear}
        </Typography>
      </Box>
    </Box>
  );
};

export default Education;
