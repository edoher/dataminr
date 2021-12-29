import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import { Toggle, ToggleProps } from "./components/toggle/Toggle";

const formScheme: ToggleProps[] = [
  {
    title: "testing one",
  },
  {
    title: "testing two",
    selectValues: [10, 50, 100],
  },
  {
    title: "testing three",
  },
  {
    title: "testing four",
  },
  {
    title: "testing five",
  },
];

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
            {formScheme.map((t) => (
              <Toggle
                key={`toggle${t.title}`}
                title={t.title}
                selectValues={t?.selectValues}
              />
            ))}
          </SimpleGrid>
        </section>
      </Container>
    </div>
  );
}

export default App;
