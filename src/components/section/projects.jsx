import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
// import ProjectItem from "./projects/projectItem";
import ProjectItemNew from "./projects/projectItemNew";
import Admin from "../../assets/Admin2.png";
import Product from "../../assets/Products.png";

const Projectos = [
  {
    id: 1,
    title: "Tienda Products",
    description: "Tienda para clientes",
    image: Product,
    tecnology: ["HTML", "Javascript", "React.js", "MaterialUI"],
    repository: "https://github.com/BalaguerRC/Project_Web_Client.git",
  },
  {
    id: 2,
    title: "Administracion de Tienda Producs",
    description: "Pagina web administrativa",
    image: Admin,
    tecnology: ["HTML", "Javascript", "React.js", "daisyUI"],
    repository: "https://github.com/BalaguerRC/Project_web_1.git",
  },
  {
    id: 3,
    title: "Administracion de Tienda Producs",
    description: "Pagina web administrativa",
    image: Admin,
    tecnology: ["HTML", "Javascript", "React.js", "daisyUI"],
    repository: "",
  },
];

const Projects = () => {
  return (
    <>
      <Box sx={{ pt: 15, pb: 15, pr: 10, pl: 10, background: "#0f141f" }}>
        <Grid container direction={"column"} alignItems={"center"} justifyContent={"center"}>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Proyectos
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color={"gray"} gutterBottom>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              direction={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {Projectos.map((item) => (
                <Grid item key={item.id}>
                  <ProjectItemNew
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    tecnology={item.tecnology}
                    repository={item.repository}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
