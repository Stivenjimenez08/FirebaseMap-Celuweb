import React, { useEffect } from "react";
import {
  startUpdateDisplayName,
  startUpdatePhoto,
} from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import EmailIcon from "@mui/icons-material/Email";
import Person2Icon from "@mui/icons-material/Person2";
import LinkIcon from "@mui/icons-material/Link";
import {
  Alert,
  Button,
  Grid,
  InputAdornment,
  Link,
  TextField,
} from "@mui/material";
import "../../style.css";
import Swal from "sweetalert2";

export const EditProfile = () => {
  const dispatch = useDispatch();
  const { email} = useSelector((state) => state.auth);

  const onSubmit = (event) => {

    event.preventDefault();

    if (displayName !== "" && photoURL !== "") {
      dispatch(startUpdateDisplayName({ displayName }));
      dispatch(startUpdatePhoto({ photoURL }));
      return
    }else if (displayName !== "") {
      dispatch(startUpdateDisplayName({ displayName }));
      return
    }else if (photoURL !== "") {
      dispatch(startUpdatePhoto({ photoURL }));
      return
    } 
  };

  const handleReloadClick = () => {
    window.location.reload();
  };

  const { photoURL, displayName, onInputChange } = useForm({
    displayName: "",
    photoURL: "",
  });

  return (
    <div>
      <form onSubmit={onSubmit} className="formProfile">
        <div className="containerProfile">
          <h1 className="titleProfile" >Edita tu perfil</h1>
          <div className="input">
            <TextField
              id="standard-read-only-input"
              label="Correo Electronico"
              defaultValue={email}
              fullWidth
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="input">
            <TextField
              sx={{ mt: 1 }}
              placeholder="Nombre"
              label="Nombre "
              type="text"
              name="displayName"
              value={displayName}
              fullWidth
              onChange={onInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Person2Icon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="input">
            <TextField
              placeholder="Url Photo"
              label="Url Photo "
              type="text"
              name="photoURL"
              value={photoURL}
              fullWidth
              onChange={onInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LinkIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          

          <div className="input btnProfile">
            <Button
              type="submit"
              variant="contained"
              id="btnProfile"
              fullWidth
              onClick={handleReloadClick}
            >
              Guardar Cambios
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
