import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const ProjectItemNew = ({
  id,
  title,
  description,
  image,
  tecnology,
  repository,
}) => {
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    if (id % 2 == 0) {
      setValidate(!validate);
    }
  }, []);
  return (
    <>
      {validate ? (
        <Grid
          container
          direction={"row-reverse"}
          alignItems={"center"}
          justifyContent={"center"}
          m={2}
        >
          <Grid
            item
            sx={{
              display: { xs: "none", md: "grid" },
            }}
          >
            <Box pl={2} pt={2}>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {tecnology}
              </Typography>
            </Box>
            <Box
              mt={2}
              mb={2}
              pl={2}
              sx={{ display: "grid", justifyContent: "right" }}
            >
              <Button
                size="small"
                variant="contained"
                sx={{
                  p: 1,
                  background: "#81CC96",
                  ":hover": {
                    background: "#a5dab4",
                  },
                  boxShadow: "10px 10px #0B0F16",
                }}
              >
                Ver Repositorio
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              sx={{
                boxShadow: "10px 10px #0B0F16",
                ":hover": {
                  boxShadow: "10px 10px #81b395",
                },
              }}
            >
              <img
                src={image}
                style={{
                  maxWidth: 540,
                  width: "100%",
                  maxHeight: 480,
                  height: "100%",
                  borderRadius: 5,
                }}
              />
            </Box>
          </Grid>
          <Grid item sx={{ display: { xs: "flex", md: "none" } }}>
            <Paper
              sx={{
                maxWidth: 540,
                width: "100%",
                borderRadius: 1,
                background: "#393e4b",
                boxShadow: "10px 10px #0B0F16",
              }}
            >
              <CardMedia>
                <img
                  src={image}
                  style={{
                    maxWidth: 540,
                    width: "100%",
                    maxHeight: 480,
                    height: "100%",
                    borderRadius: 5,
                  }}
                />
              </CardMedia>
              <Box p={2}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontSize={20}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize={12}
                >
                  {description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize={12}
                >
                  {tecnology}
                </Typography>
              </Box>
              <Box p={2}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ boxShadow: "10px 10px #181d29" }}
                >
                  Ver Repositorio
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          m={2}
        >
          <Grid
            item
            sx={{
              display: { xs: "none", md: "grid" },
            }}
          >
            <Box pr={2} pt={2}>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {tecnology}
              </Typography>
            </Box>
            <Box mt={2} mb={2}>
              <Button
                size="small"
                variant="contained"
                sx={{
                  p: 1,
                  background: "#81CC96",
                  ":hover": {
                    background: "#a5dab4",
                  },
                  boxShadow: "10px 10px #0B0F16",
                }}
              >
                Ver Repositorio
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              sx={{
                boxShadow: "10px 10px #0B0F16",
                ":hover": {
                  boxShadow: "10px 10px #81b395",
                },
              }}
            >
              <img
                src={image}
                style={{
                  maxWidth: 540,
                  width: "100%",
                  maxHeight: 480,
                  height: "100%",
                  borderRadius: 5,
                }}
              />
            </Box>
          </Grid>
          <Grid item sx={{ display: { xs: "flex", md: "none" } }}>
            <Paper
              sx={{
                maxWidth: 540,
                width: "100%",
                borderRadius: 1,
                background: "#181d29",
                boxShadow: "10px 10px #0B0F16",
              }}
            >
              <CardMedia>
                <img
                  src={image}
                  style={{
                    maxWidth: 540,
                    width: "100%",
                    maxHeight: 480,
                    height: "100%",
                    borderRadius: 5,
                  }}
                />
              </CardMedia>
              <Box p={2}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontSize={20}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize={12}
                >
                  {description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize={12}
                >
                  {tecnology}
                </Typography>
              </Box>
              <Box p={2}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ boxShadow: "10px 10px #131720" }}
                >
                  Ver Repositorio
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ProjectItemNew;
