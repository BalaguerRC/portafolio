import { Box, Grid, TextField, Button } from "@mui/material";

const ContactForm = () => {
  return (
    <Box>
      <Grid container direction={"row"}>
        <Grid item xs m={1}>
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs m={1}>
          <TextField
            id="outlined-basic"
            label="Apellidos"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container direction={"row"}>
        <Grid item xs sx={{ m: 1 }}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs sx={{ m: 1 }}>
          <TextField
            id="outlined-basic"
            label="No."
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container direction={"column"}>
        <Grid item xs sx={{ m: 1 }}>
          <TextField multiline rows={6} label="Mensaje" fullWidth />
        </Grid>
        <Grid item sx={{ m: 1 }}>
          <Button variant="contained" fullWidth sx={{background: "#81CC96"}}>
            Publicar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
