import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = ({ lenguaje }) => {
  return (
    <>
      <Box sx={{ position: "static", p: 2 }}>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item>
            <IconButton>
              <GitHubIcon/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item ml={1.5}>
            <Typography variant="h7">
              {lenguaje == "en"
                ? "Designened by Balaguer"
                : "Diseñado por Balaguer"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Footer;
