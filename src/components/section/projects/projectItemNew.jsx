import {
  Badge,
  Box,
  Button,
  CardMedia,
  Chip,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types

const ProjectItemNew = ({
  id,
  title,
  description,
  image,
  tecnology,
  repository,
  lenguaje,
  typeP,
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
          mt={5}
          mb={5}
        >
          <Grid
            item
            sx={{
              display: {
                xs: "none",
                md: "grid",
              },
            }}
          >
            <Box
              pl={2}
              pt={2}
              sx={{
                maxWidth: 400,
                width: "100%",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
                {tecnology &&
                  tecnology.map((item, id) => {
                    return (
                      <div key={id}>
                        <Chip
                          label={item}
                          variant="outlined"
                          sx={{
                            pl: 1,
                            pr: 1,
                            color: "#9bc9c0",
                            border: "1px solid #9bc9c0",
                          }}
                        />
                      </div>
                    );
                  })}
              </Box>
            </Box>
            <Box
              mt={2}
              mb={2}
              pl={2}
              sx={{
                display: "grid",
                justifyContent: "right",
                maxWidth: 400,
                width: "100%",
              }}
            >
              <Button
                size="small"
                variant="contained"
                target="_blank"
                href={repository}
                sx={{
                  p: 1,
                  borderRadius: 10,
                  background: "#81CC96",
                  width: 200,
                  transition: "width .5s",
                  ":hover": {
                    background: "#a5dab4",
                    width: 250,
                  },
                  boxShadow: "10px 10px #0B0F16",
                }}
              >
                {lenguaje == "en" ? "View Repository" : "Ver Repositorio"}
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Badge
              badgeContent={typeP == 1 ? "API" : "WEBSITE"}
              color="success"
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                ".css-1v1h8db-MuiBadge-badge": {
                  fontSize: "0.95rem",
                  p: "0 19px",
                  background: "#44b700",
                },
              }}
            >
              <Box
                sx={{
                  boxShadow: "10px 10px #0B0F16",
                  ":hover": {
                    boxShadow: "10px 10px #81b395",
                    borderRadius: 1,
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
            </Badge>
          </Grid>
          <Grid item sx={{ display: { xs: "flex", md: "none" } }}>
            <Paper
              sx={{
                maxWidth: 540,
                width: "100%",
                borderRadius: 1,
                background: "#252C3B",
                boxShadow: "10px 10px #0B0F16",
              }}
            >
              <Badge
                badgeContent={typeP == 1 ? "API" : "WEBSITE"}
                color="success"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                sx={{
                  ".css-1k15tnj-MuiBadge-badge": {
                    background: "#44b700",
                  },
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
              </Badge>
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
                <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
                  {tecnology &&
                    tecnology.map((item, id) => {
                      return (
                        <div key={id}>
                          <Chip
                            size="small"
                            label={item}
                            variant="outlined"
                            sx={{
                              pl: 1,
                              pr: 1,
                              color: "#9bc9c0",
                              border: "1px solid #9bc9c0",
                            }}
                          />
                        </div>
                      );
                    })}
                </Box>
              </Box>
              <Box p={2}>
                <Button
                  size="small"
                  target="_blank"
                  href={repository}
                  variant="contained"
                  sx={{
                    boxShadow: "10px 10px #181d29",
                    background: "#81CC96",
                    ":hover": {
                      background: "#a5dab4",
                    },
                    borderRadius: 10,
                  }}
                >
                  {lenguaje == "en" ? "View Repository" : "Ver Repositorio"}
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
              display: {
                xs: "none",
                md: "grid",
              },
            }}
          >
            <Box
              pr={2}
              pt={2}
              sx={{
                maxWidth: 400,
                width: "100%",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
                {tecnology &&
                  tecnology.map((item, id) => {
                    return (
                      <div key={id}>
                        <Chip
                          label={item}
                          variant="outlined"
                          sx={{
                            pl: 1,
                            pr: 1,
                            color: "#9bc9c0",
                            border: "1px solid #9bc9c0",
                          }}
                        />
                      </div>
                    );
                  })}
              </Box>
            </Box>
            <Box mt={2} mb={2}>
              <Button
                size="small"
                variant="contained"
                target="_blank"
                href={repository}
                sx={{
                  p: 1,
                  borderRadius: 10,
                  width: 200,
                  background: "#81CC96",
                  transition: "width .5s",
                  ":hover": {
                    background: "#a5dab4",
                    width: 250,
                  },
                  boxShadow: "10px 10px #0B0F16",
                }}
              >
                {lenguaje == "en" ? "View Repository" : "Ver Repositorio"}
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Badge
              badgeContent={typeP == 1 ? "API" : "WEBSITE"}
              color="success"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                ".css-1k15tnj-MuiBadge-badge": {
                  fontSize: "0.95rem",
                  p: "0 19px",
                  background: "#44b700",
                },
              }}
            >
              <Box
                sx={{
                  boxShadow: "10px 10px #0B0F16",
                  ":hover": {
                    boxShadow: "10px 10px #81b395",
                    borderRadius: 1,
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
            </Badge>
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
              <Badge
                badgeContent={typeP == 1 ? "API" : "WEBSITE"}
                color="success"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                sx={{
                  ".css-1k15tnj-MuiBadge-badge": {
                    background: "#44b700",
                  },
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
              </Badge>
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
                <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
                  {tecnology &&
                    tecnology.map((item, id) => {
                      return (
                        <div key={id}>
                          <Chip
                            size="small"
                            label={item}
                            variant="outlined"
                            sx={{
                              pl: 1,
                              pr: 1,
                              color: "#9bc9c0",
                              border: "1px solid #9bc9c0",
                            }}
                          />
                        </div>
                      );
                    })}
                </Box>
              </Box>
              <Box p={2}>
                <Button
                  size="small"
                  target="_blank"
                  href={repository}
                  variant="contained"
                  sx={{
                    boxShadow: "10px 10px #131720",
                    borderRadius: 10,
                    background: "#81CC96",
                    ":hover": {
                      background: "#a5dab4",
                    },
                  }}
                >
                  {lenguaje == "en" ? "View Repository" : "Ver Repositorio"}
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
