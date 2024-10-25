import { useState } from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { ArrowForwardIos, ExpandMore } from "@mui/icons-material";
import React from "react";

interface IFAQ {
  question: string;
  answer: string;
  showAnswer?: boolean;
}

export const FAQ = React.memo(
  ({ question, answer, showAnswer = false }: IFAQ) => {
    const [show, setShow] = useState(showAnswer);

    return (
      <Card variant="outlined" sx={{ marginBottom: 2 }}>
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            onClick={() => setShow((prev) => !prev)}
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            aria-expanded={show}
            aria-controls={`faq-answer-${question
              .replace(/\s+/g, "-")
              .toLowerCase()}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setShow((prev) => !prev);
              }
            }}
          >
            <IconButton
              aria-label={show ? "collapse answer" : "expand answer"}
              size="small"
            >
              {show ? <ExpandMore /> : <ArrowForwardIos />}
            </IconButton>
            {question}
          </Typography>
          {show && (
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              id={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {answer}
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  }
);
