import { Container, IconButton, Typography } from "@mui/material";
import { FAQ } from "./FAQ";
import data from "./data";
import { Brightness7, Brightness4 } from "@mui/icons-material";
import { useThemeContext } from "../ThemeContext";

const FAQList = () => {
  const { toggleTheme, mode } = useThemeContext();

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        FAQs
      </Typography>
      <IconButton
        onClick={toggleTheme}
        color="inherit"
        aria-label="Toggle theme"
      >
        {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
      {data.map(({ question, answer, id }, index) => (
        <FAQ
          key={id || index}
          question={question}
          answer={answer}
          showAnswer={index === 0}
        />
      ))}
    </Container>
  );
};

export default FAQList;
