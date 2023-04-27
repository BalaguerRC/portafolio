import { Box, Grid, Typography } from "@mui/material";
// import ProjectItem from "./projects/projectItem";
import ProjectItemNew from "./projects/projectItemNew";
import Admin from "../../assets/Admin2.png";
import Product from "../../assets/Products.png";



// eslint-disable-next-line react/prop-types
const Projects = ({lenguaje}) => {
  const Projectos = [
    {
      id: 1,
      title: "Tienda Products",
      description: `${lenguaje == "en" ? "Product store for customers. Contains: page layout, product details, shopping cart, user profile, product search, purchase history and purchase invoice." : "Tienda de productos para clientes. Contiene: diseño de página, detalles del producto, carrito de la compra, perfil de usuario, búsqueda de productos, historial de compras y factura de compra."}`,
      image: Product,
      tecnology: ["HTML", "Javascript", "React.js", "MaterialUI"],
      repository: "https://github.com/BalaguerRC/Project_Web_Client.git",
    },
    {
      id: 2,
      title: "Administracion de Tienda Products",
      description: `${lenguaje == "en" ? "Administrative page of products, category, users and invoices." : "Página administrativa de productos, categoría, usuarios y facturas."}`,
      image: Admin,
      tecnology: ["HTML", "Javascript", "React.js", "daisyUI"],
      repository: "https://github.com/BalaguerRC/Project_web_1.git",
    },
    {
      id: 3,
      title: "API de Tienda Producs",
      description: `${lenguaje == "en" ? "API used in the 'Tienda Producs' and 'Administracion de Tienda Products ' pages." : "API utilizada en las páginas 'Tienda Producs' y 'Administracion de Tienda Producs'."}`,
      image: Admin,
      tecnology: ["ASP.NET", "C#"],
      repository: "",
    },
  ];

  return (
    <>
      <Box sx={{ pt: 15, pb: 15, pr: 10, pl: 10, background: "#0f141f" }}>
        <Grid container direction={"column"} alignItems={"center"} justifyContent={"center"}>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              {lenguaje == "en" ? "Projects" : "Proyectos"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color={"gray"} gutterBottom>
              {lenguaje == "en" ? "These are personal projects I have worked on, each of them has the technologies I have used and a button to view the source code on github." : "Estos son proyectos personales en los que he trabajado, cada uno de ellos tiene las tecnologías que he utilizado y un botón para ver el código fuente en github."}
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
                    lenguaje={lenguaje}
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
