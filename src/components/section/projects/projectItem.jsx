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
const ProjectItem = ({ title, description, image }) => {
  const [Over, setOver] = useState(false);
  //const [Leave, setLeave] = useState(true);
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 200,
        p: 2,
        background: "#181d29",
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
              sx={{ height: 140, width: 340 }}
              image={image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" noWrap>
                Detalles
              </Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
                Tecnologia: ...
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Box>
        </>
      ) : (
        <>
          <CardMedia
            sx={{ height: 140, width: 340 }}
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
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </>
      )}
    </Card>
  );
};
export default ProjectItem;
