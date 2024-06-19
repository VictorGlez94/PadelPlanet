import { Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [imageAdded, setImageAdded] = useState(false);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dcw7qaxig",
        uploadPreset: "sjpisvff",
      },
      function (error, result) {
        if (result.event === "success") {
          setImageAdded(true);
        }
        console.log(result);
      }
    );
  }, []);

  return (
    <>
      <Button
        onClick={() => widgetRef.current.open()}
        variant="contained"
        sx={{
          color: "#04233A",
          fontWeight: "bold",
          backgroundColor: "#CCFF00",
          "&:hover": {
            backgroundColor: "#e9ff60",
          },
        }}
      >
        Añadir imagen
      </Button>
      {imageAdded && (
        <Typography sx={{ marginTop: "16px", color: "green" }}>
          Imagen añadida
        </Typography>
      )}
    </>
  );
};

export default UploadWidget;
