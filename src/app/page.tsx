import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Page = () => {
  return (
    <Box
      display={"flex"}
      sx={{
        height: "100%",
        textAlign: "left",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
      }}
    >
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
        >{`A passionate Full Stack Software Developer having an experience of building Web applications with JavaScript / TypeScript / Nest.js / Nextjs / Nodejs / React and some other cool libraries and frameworks.`}</Typography>
      </Typography>
    </Box>
  );
};

export default Page;
