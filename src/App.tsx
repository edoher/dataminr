import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import Toggle from "./components/toggle/Toggle";

function App() {
  return (
    <div className="App">
      <Container maxW="container.lg">
        <header>
          <Heading as={"h1"} size="lg" textAlign={"center"} p={10}>
            <span className="toggle-header"></span>
            Dataminr App!
          </Heading>
        </header>
        <section>
          <SimpleGrid columns={3} spacing={5}>
            <Toggle title="testing one" />
            <Toggle title="testing two" selectValues={[10, 50, 100]} />
            <Toggle title="testing three" />
            <Toggle title="testing four" />
            <Toggle title="testing five" />
          </SimpleGrid>
        </section>
      </Container>
    </div>
  );
}

export default App;
