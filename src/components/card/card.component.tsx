"use client";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const CardComponent = () => {
  return (
    <motion.div
      style={{ height: "200px", width: "200px", backgroundColor: "white" }}
      className="box"
      animate={{
        borderRadius: ["0%", "25%", "50%", "25%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      <Typography>Hello</Typography>
    </motion.div>
  );
};

export default CardComponent;
