import React from "react";
import { useTheme } from "styled-components";

import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./Button.styles";

interface Props extends RectButtonProps {
  children: string;
  color?: "primary" | "secondary" | "info";
}

export function Button({ children, color = "primary", ...rest }: Props) {
  const { colors } = useTheme();

  const buttonBgColor = {
    primary: colors.main,
    secondary: colors.success,
    info: colors.text,
  };

  return (
    <Container {...rest} color={buttonBgColor[color]}>
      <Title>{children}</Title>
    </Container>
  );
}
