import FAQList from "./faq/FAQList";
import { ThemeContextProvider } from "./ThemeContext";


function App() {
  return (
    <div>
    <ThemeContextProvider>
      <FAQList />
    </ThemeContextProvider>
    </div>
  );
}

export default App;
