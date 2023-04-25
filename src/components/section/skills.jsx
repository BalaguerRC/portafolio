import { Box, Grid, Paper, Slider, Typography } from "@mui/material";
import {
  PaperCustom,
  StyledBadgeBasic,
  StyledBadgeAdvanced,
  StyledBadgeIntermediate,
} from "./style/skills";

const Skills = () => {
  const values = [
    {
      value: 0,
      label: "0°%",
    },
    {
      value: 50,
      label: "50%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];
  const valuetext = (value) => {
    return value;
  };
  return (
    <>
      <Box sx={{ pt: 15, pb: 15, pr: 10, pl: 10, background: "#1D2433" }}>
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          textAlign={"center"}
        >
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
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems={"center"}
          pt={10}
        >
          <Box sx={{ width: 500 }}>
            <Grid container direction={"row"} justifyContent="space-between">
              <Typography variant="subtitle" gutterBottom>
                Fron-End
              </Typography>
              <Typography variant="subtitle" gutterBottom>
                Back-End
              </Typography>
            </Grid>
            <Slider
              defaultValue={80}
              step={10}
              getAriaValueText={valuetext}
              marks={values}
              valueLabelDisplay="on"
              disabled
              sx={{
                color: "#81CC96",
                "& .MuiSlider-rail": {
                  color: "#81CC96",
                  height: 3,
                },
                "& .MuiSlider-valueLabel": {
                  fontSize: 12,
                  fontWeight: "normal",
                  top: -6,
                  backgroundColor: "unset",
                  "&:before": {
                    display: "none",
                  },
                  "& *": {
                    background: "transparent",
                  },
                },
                "&.Mui-disabled": {
                  color: "#81CC96",
                },
              }}
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
};
export default Skills;
