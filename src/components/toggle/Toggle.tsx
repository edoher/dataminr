import { Box, Flex, Heading, Spacer, Switch, Select } from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import styled from "@emotion/styled";
import ToggleList from "./ToggleList";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const Square = styled("span")`
  display: inline-block;
  background: gray;
  margin-right: 0.7em;
  width: 2em;
  height: 2em;
  border-radius: 10%;
  vertical-align: middle;
`;

export type ToggleType = {
  title: string;
  selectValues?: number[];
};

export type ToggleProps = ToggleType & {
  children?: ToggleType[];
  isChild?: boolean;
};

export function Toggle({
  title,
  selectValues,
  children,
  isChild,
}: ToggleProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (checked) {
    }
  }, [checked]);

  return (
    <Box bg="gray.900" borderRadius={6}>
      <Flex p={4}>
        <Box>
          <header className="App-header">
            <Heading as={isChild ? "h3" : "h2"} size="xs">
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
          {children?.length && !checked && <ChevronDownIcon ml={2} />}
          {children?.length && checked && <ChevronUpIcon ml={2} />}
        </Box>
      </Flex>
      {children?.length && checked && <ToggleList children={children} />}
    </Box>
  );
}
