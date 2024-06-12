import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { styled } from "@mui/system";

const IconStyle = {
  color: "#CCFF00",
  bgcolor: "transparent",
};

const addButtonStyle = {
  my: 2,
  color: "#04233A",
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
  textTransform: "capitalize",
  padding: "6px 15px",
  backgroundColor: "#CCFF00",
  "&:hover": {
    backgroundColor: "#e9ff60",
  },
};

const StyledMenu = styled(Menu)({
  ".MuiMenu-list": {
    paddingTop: 0,
    paddingBottom: 0,
    border: "2px solid #04233A",
  },
});

const pages = [
  <Link to="/perfil/ventas" key="sales-link">
  <Tooltip title="Productos Vendidos" key="store-tooltip">
    <IconButton>
      <StorefrontOutlinedIcon sx={IconStyle} />
    </IconButton>
  </Tooltip>
  </Link>,
  <Link to="/perfil/favoritos" key="favorite-link">
    <Tooltip title="Mis favoritos" key="favorite-tooltip">
      <IconButton>
        <FavoriteBorderOutlinedIcon sx={IconStyle} />
      </IconButton>
    </Tooltip>
  </Link>,
  <Button key="add-product-button" sx={addButtonStyle}>
    <DriveFolderUploadOutlinedIcon sx={{ mr: 0.5 }} />
    Añadir Producto
  </Button>,
];

const settings = [
  "Perfil",
  "Mis Favoritos",
  "Productos vendidos",
  "Cerrar sesión",
];

function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#04233A", marginBottom: "40px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img
              src="src/assets/images/logo.png"
              alt="Logo"
              style={{ maxWidth: 250 }}
            />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              mr: 2,
            }}
          >
            {pages.map((page, index) => (
              <Button key={index}>{page}</Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar />
            </IconButton>
            <StyledMenu
              sx={{ mt: "55px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={{ backgroundColor: "#e4ff7c", color: "#04233A" }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </StyledMenu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
