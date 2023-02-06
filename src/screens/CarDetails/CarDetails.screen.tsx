import React from "react";
import { BackButton } from "../../components";
import { ImageSlider } from "../../components/ImageSlider/ImageSlider.component";

import {
  About,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Header,
  Name,
  Period,
  Price,
  Rent,
} from "./CarDetails.styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/1ba3757e-5a2e-40c1-b701-147567924ef6/9f8cd72c-15c8-40e0-9e65-c762d7783263.png",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>

          {/* <Accessories>
            <Accessory name="380Km/h" icon={speedSvg} />
            <Accessory name="3.2s" icon={accelerationSvg} />
            <Accessory name="800 HP" icon={forceSvg} />
            <Accessory name="Gasolina" icon={gasolineSvg} />
            <Accessory name="Auto" icon={exchangeSvg} />
            <Accessory name="2 pessoas" icon={peopleSvg} />
          </Accessories> */}
        </Details>
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
    </Container>
  );
}
