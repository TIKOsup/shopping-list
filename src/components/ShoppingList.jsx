import { Container, Box, Typography, TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
import Grid from '@mui/material/Grid2';
import AddIcon from '@mui/icons-material/Add';
import { products } from "../data";

export default function ShoppingList() {
  return (
    <Container sx={{ marginTop: "220px" }}>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      }}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{ marginBottom: "80px" }}
        >
          Shopping List
        </Typography>
        <Grid container spacing={2} sx={{justifyContent: "center", alignItems: "center", margin: "0 40px"}}>
          <Grid size={10} sx={{marginRight: "20px"}}>
            <TextField
              id="outlined-basic"
              label="Product name"
              variant="outlined"
              size="small"
              sx={{width: "100%"}}
            />
          </Grid>
          <Grid
            size={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Button variant="contained" startIcon={<AddIcon />}>
              Add
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{display: "flex", flexDirection: "column", margin: "60px 60px 0 100px"}}>
        {products.map((item) => (
          <FormControlLabel
            control={<Checkbox checked={false} />}
            label={item.name}
            key={item.id}
          />
        ))}
      </Box>

    </Container>
  );
} 