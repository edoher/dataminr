import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import "./App.css";
import { Toggle, ToggleProps } from "./components/toggle/Toggle";

const formScheme: ToggleProps[] = [
  {
    title: "testing one",
    value: "one",
  },
  {
    title: "testing two",
    value: "two",
    selectValues: [10, 50, 100],
  },
  {
    title: "testing three",
    value: "three",
    children: [
      {
        title: "I'm a child!",
        value: "a",
      },
      {
        title: "Me too",
        value: "b",
        selectValues: [10, 50, 100],
      },
      {
        title: "And me!",
        value: "c",
      },
    ],
  },
  {
    title: "testing four",
    value: "four",
  },
  {
    title: "testing five",
    value: "five",
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
          <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={5}>
            {formScheme.map((t) => (
              <Box key={`toggle${t.title}`}>
                <Toggle
                  title={t.title}
                  value={t.value}
                  selectValues={t?.selectValues}
                  children={t?.children}
                />
              </Box>
            ))}
          </SimpleGrid>
        </section>
      </Container>
    </div>
  );
}

export default App;
