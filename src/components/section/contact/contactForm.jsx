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

const ContactForm = ({ lenguaje }) => {
  const [Nam, setName] = useState("");
  const [LasNam, setLasName] = useState("");
  const [Email, setEmail] = useState("");
  const [No, setNo] = useState("");
  const [Message, setMessage] = useState("");
  const [Loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const Form = useRef();

  const [envio, setEnvio] = useState(0);

  /** */
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(!Loading);
    // console.log(Form.current.value)
    ValidateEmail();
  };
  const ValidateEmail = () => {
    if ((Nam, LasNam, Email, No, Message != "")) {
      setTimeout(() => {
        setLoading(Loading);
        setOpen(!open);
        /*emailjs
          .sendForm(
            "service_zs9t9pj",
            "template_3omhq6s",
            Form.current,
            "IhuHlaT7JrANB4cCL"
          )
          .then(
            (res) => {
              console.log(res.text);
            },
            (err) => {
              console.log(err);
            }
          );*/
        //console.log(open);
        setEnvio(1);
        console.log("enviado");
      }, 1000);
    }
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
          {lenguaje == "en" ? "Email sudmited" : "Correo enviado"}
        </Alert>
      </Snackbar>
      <form ref={Form} onSubmit={sendEmail}>
        <Grid container direction={"row"}>
          <Grid item xs m={1}>
            <TextFieldCustom
              label={lenguaje == "en" ? "Name" : "Nombre"}
              required
              variant="outlined"
              name="user_name"
              type="text"
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
              placeholder={lenguaje == "en" ? "name..." : "nombre..."}
              fullWidth
            />
          </Grid>
          <Grid item xs m={1}>
            <TextFieldCustom
              label={lenguaje == "en" ? "Lastname" : "Apellidos"}
              required
              variant="outlined"
              name="user_lastname"
              type="text"
              onChange={(e) => setLasName(e.currentTarget.value)}
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
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="example@gmail.com"
              fullWidth
            />
          </Grid>

          <Grid item xs sx={{ m: 1 }}>
            <TextFieldCustom
              label={lenguaje == "en" ? "Phone" : "Numero"}
              required
              variant="outlined"
              name="phone"
              type="text"
              onChange={(e) => setNo(e.currentTarget.value)}
              placeholder="809-12..."
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
              onChange={(e) => setMessage(e.currentTarget.value)}
            />
          </Grid>
          <Grid item sx={{ m: 1 }}>
            {Loading ? (
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
                {envio == 1 ? (
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
                    <Typography>Para enviar otro correo actualize la pagina</Typography>
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
