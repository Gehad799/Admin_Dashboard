import { Box } from "@mui/material";
import Header from "../components/Header";
import GeographyChart from "../components/GeographyChart";
function Geo() {
  return (
    <Box>
      <Header title="Geo Chart" subtitle="Simple Geo Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
}
export default Geo;
