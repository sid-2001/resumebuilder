import React from "react";
import { Box, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
//@ts-ignore
import html2pdf from "html2pdf.js";

const DownloadButton: React.FC = () => {
  const downloadResume = () => {
    const input = document.getElementById("resume-content") as HTMLElement;

    if (input) {
      // Temporarily apply styles to remove borders
      input.classList.add("pdf-mode");

      const opt = {
        margin: 0,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 4 }, // Higher scale improves the quality of the PDF
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      // Generate PDF
      html2pdf()
        .from(input)
        .set(opt)
        .save()
        .finally(() => {
          // Remove the temporary styles after the PDF is generated
          input.classList.remove("pdf-mode");
        });
    }
  };

  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />}
        onClick={downloadResume}
        sx={{ marginTop: 3 }}
      >
        Download Resume as PDF
      </Button>
    </Box>
  );
};

export default DownloadButton;
