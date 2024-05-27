"use client";
import {
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import Props from "./props";

const CardComponent = ({
  title,
  shortDescription,
  year,
  longDescription,
  tech,
}: Props) => {
  return (
    <Grid sx={{ height: "fit-content", marginLeft: 1 }} item key={title}>
      <Card
        variant="outlined"
        sx={{
          width: { xs: "89vw", md: 280 }, //280
          height: 320,
          float: "left",
          margin: 1,
          backgroundColor: "#d7d7d7",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {year}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {shortDescription}
          </Typography>
          <Typography variant="body2">
            {longDescription}
            <br />
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "center",
          }}
        >
          {tech.map((value, index) => {
            return (
              <Chip
                key={index}
                label={value}
                variant="outlined"
                sx={{ margin: 0.2 }}
              />
            );
          })}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardComponent;
