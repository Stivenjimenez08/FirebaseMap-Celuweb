import "../style.css";
import MapIcon from "@mui/icons-material/Map";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Drawer, AppBar, Toolbar} from "@mui/material";
import {
  List,
  Typography,
  Divider,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { startLogout } from "../store/auth";

const drawerWidth = 240;

export const LayoutHome = ({ children, title = "" }) => {

  const url="https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk="

  const dispatch = useDispatch()
  const onLogout = () => {

    dispatch(startLogout())
  }

  const { displayName, photoURL } = useSelector((state) => state.auth);

  return (
      
      <Box className='animate__animated animate__fadeIn animate__faster'>
      <AppBar color="Nav"
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar id="appBar">
          <Typography variant="h6" noWrap component="div" color='primary'>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        id='Nav'
      >
        { 
            (photoURL!==null) 
            ? <img src={photoURL} alt="foto de perfil" className="photo"/> 
            : <img src={url} alt="foto de perfil" className="photo"/>
          }
        
        <p className="name">{displayName}</p>

        <Divider />

        <List disablePadding>
          <ListItemButton component={RouterLink} to={"/profile"} sx={{ mt: 3}}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            Editar Perfil
          </ListItemButton>

          <ListItemButton component={RouterLink} to={"/home"}>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            Ver Mapa
          </ListItemButton>

          <ListItemButton sx={{ mt: 50}} onClick={onLogout} >
            <ListItemIcon >
              <LogoutIcon color='warning'/>
            </ListItemIcon>
            Cerrar Sesión
          </ListItemButton>

        </List>
      </Drawer>

      <Box component="main" sx={{ mt: 8.3, ml: 29 }}>
        {children}
      </Box>
    </Box>
  );
};
