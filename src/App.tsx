import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import Toggle from "./components/toggle/Toggle";

function App() {
  return (
    <div className="App">
      <Container maxW="container.lg">
        <header>
          <Heading as={"h1"} size="lg">
            <span className="toggle-header"></span>
            Dataminr App!
          </Heading>
        </header>
        <section>
          <Toggle title="testing testing" />
        </section>
      </Container>
    </div>
  );
}

export default App;
