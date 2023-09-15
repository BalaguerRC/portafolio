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
import Perfil from "../../assetss/Perfil.jpg";
import ResumePDF from "../../assetss/Desarrollo de Software_BalaguerRC (1).pdf";

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
                  Graduated from the {""}
                  <Link href="https://itla.edu.do/" underline="hover">
                    Instituto Tecnologico de las Americas (ITLA)
                  </Link> {""}
                  as a Software Development Technologist. I am passionate about programming 
                  and web development.Currently I have little experience in the work 
                  environment, so I am looking to gain more experience and continue learning.
                  I am always willing to share my knowledge and work in a team creating efficient 
                  and quality solutions.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={"text.secondary"}
                  gutterBottom
                >
                  Email: balaguerrivera@gmail.com
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <IconButton href="https://www.linkedin.com/in/balaguer-rivera-castillo-a5aab9256/" sx={{":hover": {
                      color: "#81CC96"
                    } }}>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton sx={{":hover": {
                      color: "#81CC96"
                    } }}>
                    <GitHubIcon href="https://github.com/BalaguerRC" />
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
                  Egresado del {" "}
                  <Link href="https://itla.edu.do/" underline="hover">
                    Instituto Tecnologico de las Americas (ITLA)
                  </Link> {""}
                  como Tecnólogo en Desarrollo de Software. Me apasiona la programación y el 
                  desarrollo de páginas web. Actualmente cuento con poca experiencia en el ámbito
                  laboral, por lo que busco adquirir más experiencia y seguir aprendiendo. 
                  Siempre estoy dispuesto a compartir mis conocimientos y trabajar en equipo
                  creando soluciones eficientes y de calidad.
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={"text.secondary"}
                  gutterBottom
                >
                  Correo: balaguerrivera@gmail.com
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <IconButton
                    href="https://www.linkedin.com/in/balaguer-rivera-castillo-a5aab9256/"
                    sx={{
                      ":hover": {
                        color: "#81CC96",
                      },
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    href="https://github.com/BalaguerRC"
                    sx={{
                      ":hover": {
                        color: "#81CC96",
                      },
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </>
            )}
            <Box
              sx={{
                display: { xs: "flex", md: "grid" },
                flexDirection: "row",
                justifyContent: { xs: "center", md: "left" },
              }}
            >
              <Button
                variant="contained"
                startIcon={<DownloadOutlinedIcon />}
                href={ResumePDF}
                sx={{
                  width: 150,
                  //width: "100%",
                  borderRadius: 10,
                  p: 1,
                  mt: 2,
                  background: "#81CC96",
                  transition: "width .5s",
                  ":hover": {
                    background: "#a5dab4",
                    width: 200,
                  },
                  boxShadow: "10px 10px #0B0F16",
                }}
              >
                {lenguaje == "en" ? "Resume" : "Curriculum"}
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
              <Paper
                sx={{
                  borderRadius: 50,
                  boxShadow: "10px 10px #0B0F16",
                  background: "#4B7C59",
                  borderTopRightRadius: "30%",
                  borderBottomLeftRadius: "30%",
                }}
              >
                <Avatar
                  alt="example"
                  src={Perfil}
                  sx={{
                    width: 240,
                    height: 240,
                    boxShadow: "10px 10px #0B0F16",
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
