import React from "react";
import { Paper } from "@mui/material";

export default function PokemonCardContainer({ children }: any) {
  return (
    <Paper
      style={{
        display: "flex",
        width: "250px",
        height: "315px",
        borderRadius: "5px",
        margin: "10px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "2px solid cyan",
        borderBottom: "2px solid cyan",
      }}
    >
      {children}
    </Paper>
  );
}
