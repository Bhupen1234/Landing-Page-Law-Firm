import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactComponent as AccordianButton } from "../../assets/AccordianButton.svg";

export default function BasicAccordion({ faqQuestions }) {
  return (
    <div>
     
        {faqQuestions.map((data) => {
          return (
            <>
             <Accordion>
              <AccordionSummary
                expandIcon={<AccordianButton />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{data.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                 {data.content}
                </Typography>
              </AccordionDetails>
              </Accordion>
              
            </>
          );
        })}
      
    </div>
  );
}
