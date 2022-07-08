import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { CssBaseline } from "@mui/material";

const useLinks = () => {
  const data = useStaticQuery(graphql`
    {
      r02 {
        links {
          id
          name
          url
        }
      }
    }
  `);

  return data.r02.links;
};

const Layout = ({ children }) => {
  const links = useLinks();

  console.log(links);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
