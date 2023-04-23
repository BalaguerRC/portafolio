import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  PaperCustom,
  StyledBadgeBasic,
  StyledBadgeAdvanced,
  StyledBadgeIntermediate,
} from "./style/skills";

const Skills = () => {
  return (
    <>
      <Box sx={{ pt: 15, pb: 15, pr: 10, pl: 10, background: "#1D2433" }}>
        <Grid container direction={"column"} alignItems={"center"}  textAlign={"center"}>
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
          <Grid item>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                borderRadius: 10,
              }}
            >
              <Box>
                <StyledBadgeBasic
                  overlap="circular"
                  variant="dot"
                  sx={{ pl: 1 }}
                ></StyledBadgeBasic>
                <Typography variant="caption" sx={{ pl: 1, pr: 1 }}>
                  Basico
                </Typography>
              </Box>
              <Box>
                <StyledBadgeIntermediate
                  overlap="circular"
                  variant="dot"
                  sx={{ pl: 1 }}
                ></StyledBadgeIntermediate>
                <Typography variant="caption" sx={{ pl: 1, pr: 1 }}>
                  Intermedio
                </Typography>
              </Box>
              <Box>
                <StyledBadgeAdvanced
                  overlap="circular"
                  variant="dot"
                  sx={{ pl: 1 }}
                ></StyledBadgeAdvanced>
                <Typography variant="caption" sx={{ pl: 1, pr: 1 }}>
                  Avanzado
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          direction={"row"}
          justifyContent={"space-around"}
          spacing={3}
          pt={5}
        >
          <Grid item>
            <StyledBadgeIntermediate
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <PaperCustom sx={{ p: 1 }}>
                <img
                  alt="test"
                  src="src/assets/html.png"
                  width={100}
                  height={100}
                />
                HTML
              </PaperCustom>
            </StyledBadgeIntermediate>
          </Grid>
          <Grid item>
            <StyledBadgeIntermediate
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <PaperCustom sx={{ p: 1 }}>
                <img
                  alt="test"
                  src="src/assets/js.png"
                  width={100}
                  height={100}
                />
                JAVASCRIPT
              </PaperCustom>
            </StyledBadgeIntermediate>
          </Grid>
          <Grid item>
            <StyledBadgeIntermediate
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              {" "}
              <PaperCustom sx={{ p: 1 }}>
                <img
                  alt="test"
                  src="src/assets/react.svg"
                  width={100}
                  height={100}
                />
                REACT.JS
              </PaperCustom>
            </StyledBadgeIntermediate>
          </Grid>
          <Grid item>
            <StyledBadgeBasic
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <PaperCustom sx={{ p: 1 }}>
                <img
                  alt="test"
                  src="src/assets/net.png"
                  width={100}
                  height={100}
                />
                ASP.NET
              </PaperCustom>
            </StyledBadgeBasic>
          </Grid>
          <Grid item>
            <StyledBadgeBasic
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <PaperCustom sx={{ p: 1 }}>
                <img
                  alt="test"
                  src="src/assets/sql.jpg"
                  width={100}
                  height={100}
                />
                SQL
              </PaperCustom>
            </StyledBadgeBasic>
          </Grid>
          <Grid item>
            <StyledBadgeBasic
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <PaperCustom sx={{ p: 1 }}>
                <img
                  alt="test"
                  src="src/assets/mui.png"
                  width={100}
                  height={100}
                />
                MUI
              </PaperCustom>
            </StyledBadgeBasic>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Skills;
