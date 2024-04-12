import { Box, useTheme, Typography } from "@mui/material";
import Header from "../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";

function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} varient="h5">
            An important question
          </Typography>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus vitae doloremque rem officiis, ipsa voluptatum. Vitae
              id eveniet, quam ad magnam commodi odio, perspiciatis error, ex
              adipisci facilis a velit.
            </Typography>
          </AccordionDetails>
        </AccordionSummary>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} varient="h5">
            Another important question
          </Typography>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus vitae doloremque rem officiis, ipsa voluptatum. Vitae
              id eveniet, quam ad magnam commodi odio, perspiciatis error, ex
              adipisci facilis a velit.
            </Typography>
          </AccordionDetails>
        </AccordionSummary>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} varient="h5">
            Your Favourite question
          </Typography>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus vitae doloremque rem officiis, ipsa voluptatum. Vitae
              id eveniet, quam ad magnam commodi odio, perspiciatis error, ex
              adipisci facilis a velit.
            </Typography>
          </AccordionDetails>
        </AccordionSummary>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} varient="h5">
            Final question
          </Typography>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus vitae doloremque rem officiis, ipsa voluptatum. Vitae
              id eveniet, quam ad magnam commodi odio, perspiciatis error, ex
              adipisci facilis a velit.
            </Typography>
          </AccordionDetails>
        </AccordionSummary>
      </Accordion>
    </Box>
  );
}
export default Faq;
