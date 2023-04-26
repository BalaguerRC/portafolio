import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const Resumen = () => {
  return (
    <>
      <Box sx={{ pt: 20, pb: 20, pr: 10, pl: 10 }}>
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 10 }}
        >
          <Grid item xs={2} sm={8} md={4}>
            <Typography variant="h3" gutterBottom>
              Balaguer Rivera
            </Typography>
            <Typography variant="subtitle2" gutterBottom textAlign={"justify"}>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi. Provident cupiditate
              voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id
              nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
              assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.
            </Typography>
            {/* <Typography variant="subtitle2" gutterBottom>
              balaguerrivera@gmail.com
            </Typography> */}
            <Button
              variant="contained"
              startIcon={<DownloadOutlinedIcon />}
              sx={{
                maxWidth: 100,
                width: "100%",
                p: 1,
                mt: 2,
                background: "#81CC96",
                ":hover": {
                  background: "#a5dab4",
                },
                boxShadow: "10px 10px #0B0F16",
              }}
            >
              CV
            </Button>
          </Grid>
          <Grid item xs={2} sm={8} md>
            <Grid
              container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Paper sx={{ borderRadius: 50, boxShadow: "10px 10px #0B0F16" }}>
                <Avatar
                  alt="example"
                  src="src/assets/download2.png"
                  sx={{
                    width: 240,
                    height: 240,
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Resumen;
