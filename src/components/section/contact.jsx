import { Box, Grid, Typography } from "@mui/material";
import ContactForm from "./contact/contactForm";

const Contact = () => {
  return (
    <>
      <Box sx={{ pt: 15, pb: 15, pr: 10, pl: 10, background: "#1D2433" }}>
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Contacto
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color={"gray"} gutterBottom>
              Si quiere enviarme un mensaje, escriba sus datos aqui abajo.
            </Typography>
          </Grid>
          {/** */}
          <Grid item>
            <ContactForm />
          </Grid>
          {/**Projects */}
        </Grid>
      </Box>
    </>
  );
};
export default Contact;
