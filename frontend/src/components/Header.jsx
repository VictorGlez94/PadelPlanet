/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Badge,
} from "@mui/material";
import { styled } from "@mui/system";
import logo from "/src/assets/images/logo.png";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

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

const Header = () => {
  const { cartItemCount } = useCart();
  const { isAuthenticated, login, logout } = useAuth();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    logout();
  };

  const pages = isAuthenticated
    ? [
        {
          to: "/perfil/productos-en-venta",
          title: "Productos en venta",
          icon: <StorefrontOutlinedIcon sx={IconStyle} />,
        },
        {
          to: "/perfil/favoritos",
          title: "Mis favoritos",
          icon: <FavoriteBorderOutlinedIcon sx={IconStyle} />,
        },
        {
          component: (
            <Link to="/perfil/nuevo-producto" style={{ textDecoration: "none" }}>
              <Button key="add-product-button" sx={addButtonStyle}>
                <DriveFolderUploadOutlinedIcon sx={{ mr: 0.5 }} />
                Añadir Producto
              </Button>
            </Link>
          ),
        },
        {
          to: "/perfil/carrito",
          title: "Carrito",
          icon: (
            <Badge badgeContent={cartItemCount} color="primary">
              <ShoppingCartOutlinedIcon sx={IconStyle} />
            </Badge>
          ),
        },
      ]
    : [{
      to: "/login",
      title: "Productos en venta",
      icon: <StorefrontOutlinedIcon sx={IconStyle} />,
    },
    {
      to: "/login",
      title: "Mis favoritos",
      icon: <FavoriteBorderOutlinedIcon sx={IconStyle} />,
    },
    {
      component: (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button key="add-product-button" sx={addButtonStyle}>
            <DriveFolderUploadOutlinedIcon sx={{ mr: 0.5 }} />
            Añadir Producto
          </Button>
        </Link>
      ),
    },
    {
      to: "/login",
      title: "Carrito",
      icon: (
        <Badge badgeContent={cartItemCount} color="primary">
          <ShoppingCartOutlinedIcon sx={IconStyle} />
        </Badge>
      ),
    },];

  const settings = isAuthenticated
    ? [
        { to: "/perfil", label: "Mi Perfil" },
        { to: "/perfil/favoritos", label: "Mis Favoritos" },
        { to: "/perfil/productos-en-venta", label: "Productos en venta" },
        { to: "/", label: "Cerrar Sesión" },
      ]
    : [{ to: "/login", label: "Iniciar Sesión" }];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#04233A" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img src={logo} alt="Logo" style={{ maxWidth: 250 }} />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {pages.map((page, index) =>
              page.component ? (
                <Box key={index} sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                  {page.component}
                </Box>
              ) : (
                <Box key={index} sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                  <Link to={page.to} style={{ textDecoration: "none" }}>
                    <Tooltip title={page.title}>
                      <IconButton>
                        {page.icon}
                      </IconButton>
                    </Tooltip>
                  </Link>
                </Box>
              )
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar sx={{ bgcolor: "#04233A", color: "#CCFF00" }} />
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
              {settings.map((setting, index) => (
                <MenuItem
                  key={index}
                  component={Link}
                  to={setting.to}
                  onClick={setting.label === "Cerrar Sesión" ? handleLogout : handleCloseUserMenu}
                  sx={{ backgroundColor: "#e4ff7c", color: "#04233A" }}
                >
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </StyledMenu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
