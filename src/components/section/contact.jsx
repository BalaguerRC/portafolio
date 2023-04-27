import { Box, Grid, Typography } from "@mui/material";
import ContactForm from "./contact/contactForm";

const Contact = ({lenguaje}) => {
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
              {lenguaje == "en" ? "Contact": "Contacto"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color={"gray"} gutterBottom>
            {lenguaje == "en" ? "If you wish to contact me and send me a message, please write your contact information below.": "Si desea ponerse en contacto conmigo y enviarme un mensaje, escriba a continuación sus datos de contacto."}
            </Typography>
          </Grid>
          {/** */}
          <Grid item>
            <ContactForm lenguaje={lenguaje}/>
          </Grid>
          {/**Projects */}
        </Grid>
      </Box>
    </>
  );
};
export default Contact;
