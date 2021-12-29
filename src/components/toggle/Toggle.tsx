import { Box, Flex, Heading, Spacer, Switch } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";

const Square = styled("span")`
  display: inline-block;
  background: gray;
  margin-right: 0.7em;
  width: 2em;
  height: 2em;
  border-radius: 10%;
  vertical-align: middle;
`;

type ToggleProps = {
  title: string;
  children?: JSX.Element[];
};

function Toggle({ title, children }: ToggleProps) {
  const titleAs = children ? "h2" : "h3";
  return (
    <Flex bg="gray.900" p={4}>
      <Box>
        <header className="App-header">
          <Heading as={titleAs} size="xs">
            <Square />
            {title}
          </Heading>
        </header>
      </Box>
      <Spacer />
      <Box>
        <Switch size="sm" />
      </Box>
    </Flex>
  );
}

export default Toggle;
