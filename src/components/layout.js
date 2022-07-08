import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import {
  AppBar,
  Box,
  CssBaseline,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

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

const drawerWidth = 230;

const StyledAppBar = styled(AppBar)`
  width: calc(100% - ${drawerWidth}px);
  margin-left: ${drawerWidth}px;
`;

const Header = () => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Typography component="h1" variant="h6">
          Digiweb
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

const Layout = ({ children }) => {
  const links = useLinks();

  console.log(links);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box width={1} height={1}>
        <Paper>
          <Header />
          {children}
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
