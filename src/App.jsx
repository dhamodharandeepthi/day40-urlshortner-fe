import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShortUrlRedirect from "./components/ShortUrlRedirect ";
import Toggle from "./components/Toggle";
import { Heading, Text } from "@chakra-ui/react";
import { InputForm } from "./components/InputForm";

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path='/:urlCode'
          element={<ShortUrlRedirect />}
        />
      </Routes>
      <>
        <Toggle />
        <Heading as="h3" size="xl" m={'3% 0% 2% 0%'}>
          URL Shortener
        </Heading>
        <InputForm />
      </>
    </div>
  );
}

export default App;