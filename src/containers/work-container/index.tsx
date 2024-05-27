"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import CardComponent from "../../components/card/card.component";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import works from "../../data/projects.json";

const WorksContainer = () => {
  const [worksList, setWorksList] = useState(works);
  return (
    <Grid sx={{ marginLeft: 2, maxHeight: "100%", overflow: "auto" }}>
      <Box display={"flex"}>
        <TextField
          sx={{ margin: 2, input: { color: "white" } }}
          color="secondary"
          fullWidth
          placeholder="Search Works"
          id="search"
          onChange={(e) => {
            const searchText = e.target.value.toLowerCase();
            setWorksList(
              works.filter((work) =>
                work.title.toLowerCase().includes(searchText),
              ),
            );
          }}
          focused
        />
      </Box>
      <Grid container>
        {worksList.map((work, index) => {
          const { title, year, shortDescription, longDescription, tech } = work;
          return (
            <CardComponent
              key={index}
              title={title}
              year={year}
              shortDescription={shortDescription}
              longDescription={longDescription}
              tech={tech}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default WorksContainer;
