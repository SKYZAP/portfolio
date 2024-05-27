import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ArrowForward } from "@mui/icons-material";

const Page = () => {
  return (
    <Box
      display={"flex"}
      sx={{
        padding: 5,
        height: "100%",
        textAlign: "left",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "block" }}>
        <Typography
          variant="h5"
          component="span"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            fontSize: 45,
            letterSpacing: ".3rem",
            color: "white",
          }}
        >
          {`Hey there I'm Izzat`}
          <br></br>
          <Typography
            variant="subtitle1"
            component="span"
            sx={{ lineHeight: "normal" }}
          >
            {`A passionate Full Stack Software Developer having an experience of building Web applications with JavaScript / TypeScript / Nest.js / Nextjs / Nodejs / React and some other cool libraries and frameworks.`}
          </Typography>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            display: "flex",
            padding: 2,
            marginTop: 4,
            color: "white",
            width: "30vw",
          }}
          endIcon={<ArrowForward />}
          href="/works"
        >
          Browse Works
        </Button>
      </div>
    </Box>
  );
};

export default Page;
