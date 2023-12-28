import { Grid } from "@mui/material";
import '../style.css'

export const Layout = ({ children, title = '' }) => {
  return (
    <Grid
      className='animate__animated animate__fadeIn animate__faster'
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", padding: 4 }}
    >
      <Grid 
        item
        className="container"
        xs={3}
        sx={{ padding: 3, borderRadius: 2 }}
      >
        <h2 className="title">{title}</h2>
        {children}
      </Grid>
    </Grid>
  );
};
