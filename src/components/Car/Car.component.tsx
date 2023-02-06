import React from "react";

import {
  Container,
  Detail,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
  LineContainer,
} from "./Car.styles";

import GasolineSvg from "../../assets/gasoline.svg";

interface Props {
  data: {
    brand: string;
    name: string;
    rent: {
      period: string;
      price: number;
    };
    thumbnail: string;
  };
}

export function Car({ data }: Props) {
  return (
    <Container>
      <Detail>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>

            <LineContainer>
              <Price>R$ {data.rent.price}</Price>
              <Type>
                <GasolineSvg />
              </Type>
            </LineContainer>
          </Rent>
        </About>
      </Detail>
      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
