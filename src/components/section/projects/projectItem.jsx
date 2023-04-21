import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProjectItem = ({ title, description, image }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 200,
        p: 2,
        background: "#181d29",
        borderRadius: 5,
      }}
    >
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
    </Card>
  );
};
export default ProjectItem;
