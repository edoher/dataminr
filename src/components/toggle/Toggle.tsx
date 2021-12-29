import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";

const Square = styled("span")`
  display: inline-block;
  background: gray;
  margin-right: 0.5em;
  width: 1em;
  height: 1em;
  border-radius: 10%;
  vertical-align: text-bottom;
`;

type ToggleProps = {
  title: string;
  children?: JSX.Element[];
};

function Toggle({ title, children }: ToggleProps) {
  const titleAs = children ? "h2" : "h3";
  return (
    <Box>
      <header className="App-header">
        <Heading as={titleAs} size="sm">
          <Square />
          {title}
        </Heading>
      </header>
    </Box>
  );
}

export default Toggle;
