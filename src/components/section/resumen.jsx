import { Avatar, Box, Grid, Typography } from "@mui/material";

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
              Hi!
            </Typography>
            <Typography variant="subtitle1" color={"gray"} gutterBottom>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </Typography>
          </Grid>
          <Grid item xs={2} sm={8} md>
            <Grid
              container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Avatar
                alt="example"
                src="src/assets/download2.png"
                sx={{
                  width: 240,
                  height: 240,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Resumen;
