import { Box, Grid, TextField, Button, styled } from "@mui/material";
import {useState } from "react";

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

const ContactForm = ({lenguaje}) => {
  const [Nam, setName] = useState(0);
  const [LasNam, setLasName] = useState(0);
  const [Email, setEmail] = useState(0);
  const [No, setNo] = useState(0);
  const [Message, setMessage] = useState(0);

  const Response = (Name, Lastname, Email, No, Message) => {
    console.log(Name, Lastname, Email, No, Message);
  };
  return (
    <Box>
      <Grid container direction={"row"}>
        <Grid item xs m={1}>
          <TextFieldCustom
            label={lenguaje == "en" ? "Name":"Nombre"}
            variant="outlined"
            type="text"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder={lenguaje == "en" ? "name...":"nombre..."}
            fullWidth
          />
        </Grid>
        <Grid item xs m={1}>
          <TextFieldCustom
            label={lenguaje == "en" ? "Lastname":"Apellidos"}
            variant="outlined"
            type="text"
            onChange={(e) => setLasName(e.currentTarget.value)}
            placeholder={lenguaje == "en" ? "lastname...":"apellidos..."}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container direction={"row"}>
        <Grid item xs sx={{ m: 1 }}>
          <TextFieldCustom
            label="Email @"
            variant="outlined"
            type="email"
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="example@gmail.com"
            fullWidth
          />
        </Grid>

        <Grid item xs sx={{ m: 1 }}>
          <TextFieldCustom
            label={lenguaje == "en" ? "Phone":"Numero"}
            variant="outlined"
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
            rows={6}
            label={lenguaje == "en" ? "Message":"Mensaje"}
            fullWidth
            type="text"
            placeholder={lenguaje == "en" ? "message...":"mensaje..."}
            onChange={(e) => setMessage(e.currentTarget.value)}
          />
        </Grid>
        <Grid item sx={{ m: 1 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              background: "#81CC96",
              boxShadow: "10px 10px #151923",
              ":hover": {
                background: "#a5dab4",
              },
              borderRadius: 20
            }}
            onClick={() =>
              Response(
                Nam,
                LasNam,
                Email,
                No,
                Message
              )
            }
          >
            {lenguaje == "en" ? "Submit":"Enviar"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
