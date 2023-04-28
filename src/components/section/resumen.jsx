import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// eslint-disable-next-line react/prop-types
const Resumen = ({ lenguaje }) => {
  return (
    <>
      <Box sx={{ pt: 30, pb: 25, pr: 10, pl: 10 }}>
        <Grid
          container
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={{ xs: 5, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 10 }}
        >
          <Grid item xs={2} sm={8} md={4}>
            {lenguaje == "en" ? (
              <>
                <Typography
                  variant="h3"
                  gutterBottom
                  textAlign={{ xs: "center", md: "inherit" }}
                >
                  Hi, I am Balaguer Rivera!
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  textAlign={"justify"}
                >
                  I am a graduate of the Software Development Technologist
                  career at the {""}
                  <Link href="https://itla.edu.do/" underline="hover">
                    Instituto Tecnologico de las Americas (ITLA)
                  </Link>
                  , I really like programming and web development, currently I
                  have little experience in the workplace, so I am looking for
                  more experience and continue learning. I want to use my
                  programming skills to collaborate with teams and create
                  efficient and quality solutions.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={"text.secondary"}
                  gutterBottom
                >
                  Email: balaguerrivera@gmail.com
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <IconButton href="https://www.linkedin.com/in/balaguer-rivera-castillo-a5aab9256/">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton>
                    <GitHubIcon href="https://github.com/BalaguerRC"/>
                  </IconButton>
                </Box>
              </>
            ) : (
              <>
                <Typography
                  variant="h3"
                  gutterBottom
                  textAlign={{ xs: "center", md: "inherit" }}
                >
                  Hola, soy Balaguer Rivera!
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  textAlign={"justify"}
                >
                  Soy, egredado de la carrera Tecnologo en Desarrollo de
                  Software del{" "}
                  <Link href="https://itla.edu.do/" underline="hover">
                    Instituto Tecnologico de las Americas (ITLA)
                  </Link>
                  , me gusta mucho la programacion y el ambito de desarrollo
                  web, actualmente tengo poca experiencia en el ambito laboral,
                  por lo cual, busco obtener mas experiencia y seguir
                  aprendiendo. Deseo utilizar mis conocimientos de programacion
                  para colaborar con equipos y crear soluciones eficientes y de
                  calidad.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={"text.secondary"}
                  gutterBottom
                >
                  Correo: balaguerrivera@gmail.com
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <IconButton href="https://www.linkedin.com/in/balaguer-rivera-castillo-a5aab9256/">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton href="https://github.com/BalaguerRC">
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </>
            )}
            <Box
              sx={{
                display: { xs: "flex", md: "grid" },
                flexDirection: "row",
                justifyContent: {xs: "center", md: "left"},
              }}
            >
              <Button
                variant="contained"
                startIcon={<DownloadOutlinedIcon />}
                sx={{
                  width: 100,
                  //width: "100%",
                  borderRadius: 10,
                  p: 1,
                  mt: 2,
                  background: "#81CC96",
                  transition: "width .5s",
                  ":hover": {
                    background: "#a5dab4",
                    width: 150,
                  },
                  boxShadow: "10px 10px #0B0F16",
                }}
              >
                CV
              </Button>
            </Box>
          </Grid>
          <Grid item xs={2} sm={8} md>
            <Grid
              container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Paper sx={{ borderRadius: 50, boxShadow: "10px 10px #0B0F16" }}>
                <Avatar
                  alt="example"
                  src="src/assets/download2.png"
                  sx={{
                    width: 240,
                    height: 240,
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Resumen;
