import { Grid, Box, Paper, Typography } from "@mui/material";
import Form from "../components/form";

function Login() {
  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(../assets/cat.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography fontWeight="bold" fontSize="32px" color="primary">
              CatLover
            </Typography>
            <Typography fontWeight="500" variant="h5" sx={{ mb: "2rem" }}>
              Welcome to Catlover, the Social Media for cat lover!
            </Typography>
            <Form />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
