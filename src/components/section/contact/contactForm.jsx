import {
  Box,
  Grid,
  TextField,
  Button,
  styled,
  Snackbar,
  Alert,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import LoadingButton from "@mui/lab/LoadingButton";

const TextFieldCustom = styled(TextField)({
  "& label.Mui-focused": {
    color: "#81CC96",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#81CC96",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#a5dab4",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#81CC96",
    },
  },
});

const serviceId = import.meta.env.VITE_SERVICE_ID;
const template = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const ContactForm = ({ lenguaje }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const form = useRef();

  const [send, setSend] = useState(0);

  /** */
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(!loading);
    ValidateEmail();
  };
  const ValidateEmail = () => {
    setTimeout(() => {
      setLoading(loading);
      setOpen(!open);
      emailjs.sendForm(serviceId, template, form.current, publicKey).then(
        (res) => {
          console.log(res.text);
        },
        (err) => {
          console.log(err);
        }
      );
      setSend(1);
      console.log("enviado");
    }, 1000);
  };
  return (
    <Box>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" variant="filled">
          {lenguaje == "en" ? "Email submitted" : "Correo enviado"}
        </Alert>
      </Snackbar>
      <form ref={form} onSubmit={sendEmail}>
        <Grid container direction={"row"}>
          <Grid item xs m={1}>
            <TextFieldCustom
              label={lenguaje == "en" ? "Name" : "Nombre"}
              required
              variant="outlined"
              name="user_name"
              type="text"
              placeholder={lenguaje == "en" ? "name..." : "nombre..."}
              fullWidth
            />
          </Grid>
          <Grid item xs m={1}>
            <TextFieldCustom
              label={lenguaje == "en" ? "Lastname" : "Apellidos"}
              variant="outlined"
              name="user_lastname"
              type="text"
              placeholder={lenguaje == "en" ? "lastname..." : "apellidos..."}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container direction={"row"}>
          <Grid item xs sx={{ m: 1 }}>
            <TextFieldCustom
              label="Email @"
              required
              variant="outlined"
              name="user_email"
              type="email"
              placeholder="example@gmail.com"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container direction={"column"}>
          <Grid item xs sx={{ m: 1 }}>
            <TextFieldCustom
              multiline
              name="message"
              required
              rows={6}
              label={lenguaje == "en" ? "Message" : "Mensaje"}
              fullWidth
              type="text"
              placeholder={lenguaje == "en" ? "message..." : "mensaje..."}
            />
          </Grid>
          <Grid item sx={{ m: 1 }}>
            {loading ? (
              <LoadingButton
                loading
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: 20,
                }}
              >
                Submit
              </LoadingButton>
            ) : (
              <>
                {send == 1 ? (
                  <>
                    <Button
                      variant="contained"
                      disabled
                      fullWidth
                      sx={{
                        background: "#81CC96",
                        boxShadow: "10px 10px #151923",
                        ":hover": {
                          background: "#a5dab4",
                        },
                        borderRadius: 20,
                      }}
                    >
                      {lenguaje == "en" ? "Submit" : "Enviar"}
                    </Button>
                    <Typography variant="caption">
                      {lenguaje == "en"
                        ? "To send another email, refresh the page."
                        : "Para enviar otro correo, actualize la pagina"}
                    </Typography>
                  </>
                ) : (
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{
                      background: "#81CC96",
                      boxShadow: "10px 10px #151923",
                      ":hover": {
                        background: "#a5dab4",
                      },
                      borderRadius: 20,
                    }}
                  >
                    {lenguaje == "en" ? "Submit" : "Enviar"}
                  </Button>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
