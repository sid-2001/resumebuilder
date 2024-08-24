// src/App.tsx
import React from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import DownloadButton from "./components/DownloadButton";
// import "./styles.css"; // Import the styles

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      {/* <CssBaseline /> */}
      <div
        id="resume-content"
        style={{
          // padding: "1%",
          paddingLeft: "7%",
          paddingRight: "7%",
          // backgor
        }}
      >
        <Header />

        <Experience />
        <Education />
        <Skills />
      </div>
      <DownloadButton />
    </Container>
  );
};

export default App;
