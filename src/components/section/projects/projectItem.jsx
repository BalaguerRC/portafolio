import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ProjectItem = ({ title, description, image, tecnology, repository }) => {
  const [Over, setOver] = useState(false);
  //const [Leave, setLeave] = useState(true);
  //
  return (
    <Card
      sx={{
        maxWidth: 373,
        minWidth: 100,
        p: 2,
        background: Over ? "#283E46" : "#181d29",
        borderRadius: 5,
      }}
      onMouseOver={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
    >
      {Over ? (
        <>
          <Box
            sx={{
              maxWidth: 345,
              minWidth: 200,
            }}
          >
            <CardMedia
              sx={{
                height: 180,
                width: 340,
              }}
              image={image}
              title="green iguana"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Tecnologias: {tecnology}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="outlined">
                Ver Repositorio
              </Button>
            </CardActions>
          </Box>
        </>
      ) : (
        <>
          <CardMedia
            sx={{ height: 180, width: 340 }}
            image={image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" noWrap>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {description}
            </Typography>
          </CardContent>
        </>
      )}
    </Card>
  );
};
export default ProjectItem;
