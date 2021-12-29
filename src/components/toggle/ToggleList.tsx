import { Box } from "@chakra-ui/react";
import React from "react";
import { Toggle, ToggleType } from "./Toggle";

type ToggleListProps = {
  children: ToggleType[];
};

const ToggleList = ({ children }: ToggleListProps) => (
  <Box borderTop="1px" borderTopColor="gray.700">
    {children.map((t) => (
      <Box p={4} key={`toggleItem-${t.title}`}>
        <Toggle title={t.title} selectValues={t?.selectValues} isChild />
      </Box>
    ))}
  </Box>
);

export default ToggleList;
