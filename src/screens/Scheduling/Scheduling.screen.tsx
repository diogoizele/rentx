import React from "react";
import { useTheme } from "styled-components/native";
import { BackButton, Button, Calendar } from "../../components";

import ArrowSvg from "../../assets/arrow.svg";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  BorderBottom,
  Content,
  Footer,
} from "./Scheduling.styles";
import { StatusBar } from "expo-status-bar";

export function Scheduling() {
  const { colors } = useTheme();

  return (
    <Container>
      <Header>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <BackButton color={colors.shape} onPress={() => {}} />
        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>18/06/2023</DateValue>
            <BorderBottom selected={true} />
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>18/06/2023</DateValue>
            <BorderBottom selected={true} />
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button>Confirmar</Button>
      </Footer>
    </Container>
  );
}
