import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {styled } from "@mui/material/styles";

const Item = styled(Paper)(() => ({
  textAlign: "center",
  color: "tomato",
  height: 60,
  lineHeight: "60px",
}));

const NoAuthPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 1,
          width: 228,
          height: 60,
        },
      }}
    >
      <Item elevation={3} sx={{ alignItems: "center" }}>
        You are not AUTHORIZED
      </Item>
    </Box>
  );
};

export default NoAuthPage;
