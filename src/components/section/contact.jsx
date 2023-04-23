import { Box, Grid, Typography } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Box sx={{ pt: 15, pb: 15, pr: 10, pl: 10, background: "#1D2433" }}>
        <Grid container direction={"column"} alignItems={"center"} textAlign={"center"}>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Contacto
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color={"gray"} gutterBottom>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </Typography>
          </Grid>
          <Grid item>{/**Projects */}</Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Contact;
