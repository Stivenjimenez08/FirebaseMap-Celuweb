import { startLoginWithEmailPassword } from "../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useMemo } from "react";
import { Layout } from "./Layout";
import { useForm } from "../hooks";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Alert, Button, Grid, InputAdornment, Link, TextField } from "@mui/material";
import "../style.css";

export const Login = () => {

  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  return (
    <Layout title="Iniciar sesion" id="layout">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              placeholder="Correo Electronico"
              label="Correo Electronico "
              type="email"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
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
              placeholder="Contraseña"
              label="Contraseña "
              type="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          
          <Grid item xs={12} sx={{mt:1}} display={!!errorMessage ? '' : 'none'}>
            <Alert severity='error'>Datos de inicio erroneos</Alert>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                id="button"
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Link
            component={RouterLink}
            underline="none"
            to="/auth/register"
            id="link"
          >
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </Layout>
  );
};
