/* eslint-disable no-dupe-keys */
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = ({ lenguaje }) => {
  //const lenguaje = localStorage.getItem("lenguaje");

  const [anchorElNav, setAnchorElNav] = useState(null);
  //const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  /*const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };*/

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /*const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };*/

  //5390FF
  return (
    <>
      <AppBar sx={{ background: "#181d29" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 0,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Balaguer
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  ".css-at26bj-MuiPaper-root-MuiMenu-paper-MuiPopover-paper": {
                    background: "#181d29",
                  },
                }}
              >
                <MenuItem href="#resumen" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {lenguaje == "en" ? "Home" : "Inicio"}
                  </Typography>
                </MenuItem>
                <MenuItem href="#skills" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {lenguaje == "en" ? "Habilities" : "Habilidades"}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} href="#projects">
                  <Typography textAlign="center">
                    {lenguaje == "en" ? "Projects" : "Proyectos"}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu} href="#contact">
                  <Typography textAlign="center">
                    {lenguaje == "en" ? "Contact" : "Contacto"}
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Balaguer
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                href={"#resumen"}
                sx={{
                  my: 2,
                  display: "block",
                  fontWeight: 700,
                  color: "#81CC96",
                }}
              >
                {lenguaje == "en" ? "Home" : "Inicio"}
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                href="#skills"
                sx={{
                  my: 2,
                  display: "block",
                  fontWeight: 700,
                  color: "#81CC96",
                }}
              >
                {lenguaje == "en" ? "Skills" : "Habilidades"}
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                href="#projects"
                sx={{
                  my: 2,
                  display: "block",
                  fontWeight: 700,
                  color: "#81CC96",
                }}
              >
                {lenguaje == "en" ? "Projects" : "Proyectos"}
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                href="#contact"
                sx={{
                  my: 2,
                  display: "block",
                  fontWeight: 700,
                  color: "#81CC96",
                }}
              >
                {lenguaje == "en" ? "Contact" : "Contacto"}
              </Button>
            </Box>
            <Box display={"flex"}>
              <Link
                p={1}
                onClick={() => localStorage.setItem("lenguaje", "es")}
                href="/"
                color={lenguaje == "es" ? "#e07400" : "primary"}
                fontWeight={lenguaje == "es" ? 800 : 400}
              >
                ES
              </Link>
              <Divider orientation="vertical" flexItem />
              <Link
                p={1}
                onClick={() => localStorage.setItem("lenguaje", "en")}
                href="/"
                color={lenguaje == "en" ? "#e07400" : "primary"}
                fontWeight={lenguaje == "en" ? 800 : 400}
              >
                EN
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
