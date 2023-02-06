import React from "react";
import { StatusBar } from "expo-status-bar";
import { RFValue } from "react-native-responsive-fontsize";

import { Car } from "../../components";

import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars,
} from "./Home.styles";

import Logo from "../../assets/logo.svg";

export function Home() {
  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/1ba3757e-5a2e-40c1-b701-147567924ef6/9f8cd72c-15c8-40e0-9e65-c762d7783263.png",
  };

  return (
    <Container>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 4 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
}

/**
 * Status bar:
 *
 * style = "light" < muda a cor para branco dos itens da barra de status
 * backgroundColor = "transparent" < deixa a barra de status transparente
 * translucent = true < "remove" a altura padrão da barra de espaços - android
 */
