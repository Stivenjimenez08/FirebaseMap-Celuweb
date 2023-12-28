import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useMemo, useState } from "react";
import { useForm } from "../hooks";
import { Layout } from "./Layout";
import Swal from "sweetalert2";
import { Alert, Button, Grid, InputAdornment, Link, TextField } from "@mui/material";
import { startCreatingUserWithEmailPassword } from "../store/auth";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import "../style.css";

const formData = {
  displayName: '',
  email: '',
  password: '',
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener una @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener más de 6 letras.",
  ],
  displayName: [(value) => value.length >= 3, "El nombre es obligatorio."],
};

export const Register = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setformSubmitted(true);

    if(!errorMessage){
      Swal.fire('Ocurrio un error mientras se creaba el usuario')
    }
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
    
  };

  return (
    <Layout title="Crea una cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              placeholder="Nombre de usuario"
              label="Nombre de usuario"
              type="user"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              name="email"
              label="Correo"
              type="email"
              placeholder="Correo Electronico"
              fullWidth
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name="password"
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          
          <Grid item xs={12} sx={{mt:1}} display={ !!errorMessage ? '': 'none' }>
              <Alert severity="error">{errorMessage}</Alert>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                id="button"
                disabled={isCheckingAuthentication}
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="end">
          <p sx={{ mr: 1 }}>¿ya tienes cuenta?</p>
          <Link
            component={RouterLink}
            underline="none"
            to="/login"
            sx={{ mt: 2, ml: 1 }}
            id="link"
          >
            Ingresar
          </Link>
        </Grid>
      </form>
    </Layout>
  );
};
