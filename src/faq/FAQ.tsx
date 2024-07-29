import { useState } from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { ArrowForwardIos, ExpandMore } from "@mui/icons-material";

interface IFAQ {
  question: string;
  answer: string;
  showAnswer: boolean;
}

export const FAQ = ({ question, answer, showAnswer }: IFAQ) => {
  const [show, setShow] = useState<boolean>(showAnswer);
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          onClick={() => setShow(!show)}
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <IconButton aria-label="expand" size="small">
            {show ? <ExpandMore /> : <ArrowForwardIos />}
          </IconButton>
          {question}
        </Typography>
        {show && (
          <Typography variant="body2" color="textSecondary" component="p">
            {answer}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
