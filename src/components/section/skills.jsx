import {
  Avatar,
  Box,
  Button,
  CardMedia,
  CircularProgress,
  Grid,
  ListItemIcon,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";

const Skills = () => {
  return (
    <>
      <Box sx={{ pt: 15, pb: 15, pr: 5, pl: 5, background: "#1D2433" }}>
        <Grid container direction={"column"} alignItems={"center"}>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Skills
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
        <Grid container direction={"row"} justifyContent={"center"} spacing={5}>
          <Grid item>
            <Box sx={{ position: "relative", m: 8, alignItems: "center" }}>
              <MenuItem
                sx={{
                  position: "absolute",
                  top: "40%",
                }}
              >
                Html & CSS
              </MenuItem>
              <CircularProgress
                variant="determinate"
                value={100}
                size={150}
                sx={{
                  color: (theme) => theme.palette.grey[800],
                }}
              />
              <CircularProgress
                variant="determinate"
                value={40}
                size={150}
                sx={{
                  position: "absolute",
                  left: 0,
                }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ position: "relative", m: 8 }}>
              <CircularProgress
                variant="determinate"
                value={100}
                size={150}
                sx={{
                  color: (theme) => theme.palette.grey[800],
                }}
              />
              <CircularProgress
                variant="determinate"
                value={40}
                size={150}
                sx={{
                  position: "absolute",
                  left: 0,
                }}
              />
              <MenuItem
                sx={{
                  position: "absolute",
                  top: "40%",
                  ml: "10%",
                }}
              >
                Javascript
              </MenuItem>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ position: "relative", m: 8 }}>
              <CircularProgress
                variant="determinate"
                value={100}
                size={150}
                sx={{
                  color: (theme) => theme.palette.grey[800],
                }}
              />
              <CircularProgress
                variant="determinate"
                value={40}
                size={150}
                sx={{
                  position: "absolute",
                  left: 0,
                }}
              />
              <MenuItem
                sx={{
                  position: "absolute",
                  top: "40%",
                  ml: "10%",
                }}
              >
                React.JS
              </MenuItem>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ position: "relative", m: 8 }}>
              <CircularProgress
                variant="determinate"
                value={100}
                size={150}
                sx={{
                  color: (theme) => theme.palette.grey[800],
                }}
              />
              <CircularProgress
                variant="determinate"
                value={40}
                size={150}
                sx={{
                  position: "absolute",
                  left: 0,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  top: "40%",
                  ml: "23%",
                }}
              >
                ASP.NET
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ position: "relative", m: 8 }}>
              <CircularProgress
                variant="determinate"
                value={100}
                size={150}
                sx={{
                  color: (theme) => theme.palette.grey[800],
                }}
              />
              <CircularProgress
                variant="determinate"
                value={40}
                size={150}
                sx={{
                  position: "absolute",
                  left: 0,
                }}
              />
              <MenuItem
                sx={{
                  position: "absolute",
                  top: "40%",
                  ml: "10%",
                }}
              >
                SQL Server
              </MenuItem>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Skills;
