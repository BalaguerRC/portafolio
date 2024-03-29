import { Box, Grid, Typography } from "@mui/material";
// import ProjectItem from "./projects/projectItem";
import ProjectItemNew from "./projects/projectItemNew";
import Admin from "../../assetss/Admin2.png";
import Product from "../../assetss/Products.png";
import Portafolio from "../../assetss/Portafolio.png";
import DoctorDashboard from "../../assetss/ScreenAdmin2.png";
import AdminDashboard from "../../assetss/ScreenAdmin1.png";

// eslint-disable-next-line react/prop-types
const Projects = ({ lenguaje }) => {
  //Type = 0 = "Web", Type = 1 = "Api"
  const Projectos = [
    {
      id: 1,
      title: "Tienda Products",
      description: `${
        lenguaje == "en"
          ? "Product store for customers. Contains: page layout, product details, shopping cart, user profile, product search, purchase history and purchase invoice."
          : "Tienda de productos para clientes. Contiene: diseño de página, detalles del producto, carrito de la compra, perfil de usuario, búsqueda de productos, historial de compras y factura de compra."
      }`,
      image: Product,
      tecnology: ["HTML", "Javascript", "React.js", "MaterialUI"],
      repository: "https://github.com/BalaguerRC/Project_Web_Client.git",
      type: 0
    },
    {
      id: 2,
      title: "Administracion de Tienda Products",
      description: `${
        lenguaje == "en"
          ? "Administrative page of products, category, users and invoices."
          : "Página administrativa de productos, categoría, usuarios y facturas."
      }`,
      image: Admin,
      tecnology: ["HTML", "Javascript", "React.js", "daisyUI"],
      repository: "https://github.com/BalaguerRC/Project_web_1.git",
      type: 0
    },
    {
      id: 3,
      title: "API de Tienda Producs",
      description: `${
        lenguaje == "en"
          ? "API used in the 'Tienda Producs' and 'Administracion de Tienda Products ' pages."
          : "API utilizada en las páginas 'Tienda Producs' y 'Administracion de Tienda Producs'."
      }`,
      image: Admin,
      tecnology: ["ASP.NET", "C#", "JWT"],
      repository: "https://github.com/BalaguerRC/Proyect_1.git",
      type: 1
    },
    {
      id: 4,
      title: "Portafolio",
      description: `${
        lenguaje == "en" ? "My first web portfolio" : "Mi primer portafolio web"
      }`,
      image: Portafolio,
      tecnology: ["HTML", "Javascript", "React.js", "MaterialUI", "EmailJS"],
      repository: "https://github.com/BalaguerRC/portafolio.git",
      type: 0
    },
    {
      id: 5,
      title: "PMS-API",
      description: `${
        lenguaje == "en" ? "Api used for the website Patient_Management_System (PMS)." : "Api usada para la pagina web Patient_Management_System (PMS)."
      }`,
      image: AdminDashboard,
      tecnology: ["ASP.NET", "C#", "JWT"],
      repository: "https://github.com/BalaguerRC/Api_PMS.git",
      type: 1
    },
    {
      id: 6,
      title: "Patient_Management_System",
      description: `${
        lenguaje == "en" ? "Website for patient and medical appointments management." : "Página web para la gestión de pacientes y citas médicas."
      }`,
      image: DoctorDashboard,
      tecnology: ["HTML", "Javascript", "React.js", "MaterialUI", "Sweetalert"],
      repository: "https://github.com/BalaguerRC/Patient_Management_System.git",
      type: 0
    },
  ];

  return (
    <>
      <Box sx={{ pt: 15, pb: 15, pr: 10, pl: 10, background: "#0f141f" }}>
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              {lenguaje == "en" ? "Projects" : "Proyectos"}
            </Typography>
          </Grid>
          <Grid item textAlign={"center"}>
            <Typography variant="subtitle2" color={"gray"} gutterBottom>
              {lenguaje == "en"
                ? "These are personal projects I have worked on, each of them has the technologies I have used and a button to view the source code on github."
                : "Estos son proyectos personales en los que he trabajado, cada uno de ellos tiene las tecnologías que he utilizado y un botón para ver el código fuente en github."}
            </Typography>
          </Grid>
          <Grid item pt={2}>
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
                    typeP={item.type}
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
