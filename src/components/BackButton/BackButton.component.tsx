import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { Container } from "./BackButton.styles";

interface Props extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color }: Props) {
  const { colors } = useTheme();

  return (
    <Container>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ?? colors.text}
      />
    </Container>
  );
}
