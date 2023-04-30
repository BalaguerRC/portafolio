import { Box, Grid, Paper, Slider, Typography } from "@mui/material";
import {
  PaperCustom,
  StyledBadgeBasic,
  StyledBadgeAdvanced,
  StyledBadgeIntermediate,
} from "./style/skills";

// eslint-disable-next-line react/prop-types
const Skills = ({ lenguaje }) => {
  const values = [
    {
      value: 0,
      label: "0%",
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
              {lenguaje == "en" ? "Habilities" : "Habilidades"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color={"gray"} gutterBottom>
              {lenguaje == "en"
                ? "These are the technologies I have used the most, below is the level I am at with the technologies. In addition, I have knowledge of agile methodologies such as Scrum."
                : "Estas son las tecnologías que más he utilizado, a continuación se indica el nivel en el que me encuentro con las tecnologías. Además, tengo conocimientos sobre metodologías ágiles como Scrum."}
            </Typography>
          </Grid>
          <Grid item pt={2}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                borderRadius: 10,
                background: "#181d29",

                boxShadow: "10px 10px #151923",
              }}
            >
              <Box>
                <StyledBadgeBasic
                  overlap="circular"
                  variant="dot"
                  sx={{ pl: 1 }}
                ></StyledBadgeBasic>
                <Typography variant="caption" sx={{ pl: 1, pr: 1 }}>
                  {lenguaje == "en" ? "Basic" : "Basico"}
                </Typography>
              </Box>
              <Box>
                <StyledBadgeIntermediate
                  overlap="circular"
                  variant="dot"
                  sx={{ pl: 1 }}
                ></StyledBadgeIntermediate>
                <Typography variant="caption" sx={{ pl: 1, pr: 1 }}>
                  {lenguaje == "en" ? "Intermediate" : "Intermedio"}
                </Typography>
              </Box>
              <Box>
                <StyledBadgeAdvanced
                  overlap="circular"
                  variant="dot"
                  sx={{ pl: 1 }}
                ></StyledBadgeAdvanced>
                <Typography variant="caption" sx={{ pl: 1, pr: 1 }}>
                  {lenguaje == "en" ? "Advanced" : "Avanzado"}
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
                  src="src/assets/Html.png"
                  width={100}
                  height={100}
                  style={{ borderRadius: 5 }}
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
                  src="src/assets/Js.png"
                  width={100}
                  height={100}
                  style={{ borderRadius: 5 }}
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
                  src="src/assets/React.svg"
                  width={100}
                  height={100}
                  style={{ borderRadius: 5 }}
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
                  src="src/assets/Net.png"
                  width={100}
                  height={100}
                  style={{ borderRadius: 5 }}
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
                  src="src/assets/Sql.jpg"
                  width={100}
                  height={100}
                  style={{ borderRadius: 5 }}
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
                  src="src/assets/Mui.png"
                  width={100}
                  height={100}
                  style={{ borderRadius: 5 }}
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
          <Box sx={{ maxWidth: 600, width: "100%" }}>
            <Grid container direction={"row"} justifyContent="space-between">
              <Typography
                variant="subtitle"
                gutterBottom
                sx={{ color: "#81CC96" }}
              >
                Fron-End
              </Typography>
              <Typography
                variant="subtitle"
                gutterBottom
                sx={{ color: "#81CC96" }}
              >
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
                  height: 10,
                },
                "& .MuiSlider-valueLabel": {
                  fontSize: 12,
                  fontWeight: "normal",
                  top: 0,
                  backgroundColor: "unset",
                  "&:before": {
                    display: "none",
                  },
                  "& *": {
                    background: "transparent",
                  },
                },
                "&.Mui-disabled": {
                  color: "#a5dab4",
                  height: 12,
                  boxShadow: "0px 8px #0B0F16",
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
