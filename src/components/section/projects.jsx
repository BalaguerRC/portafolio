import { Box, Grid, Typography } from "@mui/material";
import ProjectItem from "./projects/projectItem";

const Projectos = [
  {
    id: 1,
    title: "Tienda V",
    description: "Tienda para clientes",
    image: "...",
  },
  {
    id: 2,
    title: "Administracion de Tienda V",
    description: "Pagina web administrativa",
    image: "...",
  },

  {
    id: 3,
    title: "test3",
    description: "description",
    image: "...",
  },
  {
    id: 4,
    title: "test4",
    description: "Pagina web administrativa",
    image: "...",
  },

  {
    id: 5,
    title: "test5",
    description: "Pagina web administrativa",
    image: "...",
  },
];
const Projects = () => {
  return (
    <>
      <Box sx={{ pt: 15, pb: 15, pr: 5, pl: 5, background: "#0f141f" }}>
        <Grid container direction={"column"} alignItems={"center"}>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Projects
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color={"gray"} gutterBottom>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} spacing={2}>
          {Projectos.map((item) => (
            <Grid item /*xs={0} sm={6} md={2} key={item.id}*/>
              <ProjectItem
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </Grid>
          ))}
        </Grid>
        {/* <Box paddingTop={2}>
          <Grid
            container
            spacing={{ xs: 1, md: 3 }}
            columns={{ xs: 2, sm: 12, md: 8 }}
          >
            {Projectos.map((item) => (
              <Grid item xs={0} sm={6} md={2} key={item.id}>
                <ProjectItem
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </Grid>
            ))}
          </Grid>
        </Box> */}
      </Box>
    </>
  );
};

export default Projects;
