import { Box, Flex, Heading, Spacer, Switch, Select } from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
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

export type ToggleProps = {
  title: string;
  selectValues?: number[];
  children?: JSX.Element[];
};

export function Toggle({ title, selectValues, children }: ToggleProps) {
  const [checked, setChecked] = useState(false);
  const titleAs = children ? "h2" : "h3";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (checked) {
    }
  }, [checked]);

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
      {selectValues?.length && (
        <Box mr={4}>
          <Select size="xs">
            {selectValues.map((v) => (
              <option key={`option_${v}`} value={v}>
                {v}
              </option>
            ))}
          </Select>
        </Box>
      )}
      <Box>
        <Switch size="sm" checked={checked} onChange={handleChange} />
      </Box>
    </Flex>
  );
}
