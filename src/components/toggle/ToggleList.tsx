import { Box } from "@chakra-ui/react";
import React from "react";
import { Toggle, ToggleType } from "./Toggle";

type ToggleListProps = {
  children: ToggleType[];
};

const ToggleList = ({ children }: ToggleListProps) => (
  <Box p={4}>
    {children.map((t) => (
      <Box key={`toggleItem-${t.title}`}>
        <Toggle title={t.title} selectValues={t?.selectValues} />
      </Box>
    ))}
  </Box>
);

export default ToggleList;
