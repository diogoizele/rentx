import React from "react";
import { Accessory, BackButton, Button, ImageSlider } from "../../components";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";
import peopleSvg from "../../assets/people.svg";

import {
  Accessories,
  Brand,
  CalendarIcon,
  CarImages,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
} from "./SchedulingDetails.styles";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderBottom } from "../Scheduling/Scheduling.styles";

export function SchedulingDetails() {
  const { colors } = useTheme();

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
        </Details>

        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Accessories>
      </Content>
      <RentalPeriod>
        <CalendarIcon>
          <Feather name="calendar" size={RFValue(24)} color={colors.shape} />
        </CalendarIcon>

        <DateInfo>
          <DateTitle>DE</DateTitle>
          <DateValue>18/06/2021</DateValue>
          <BorderBottom selected={false} />
        </DateInfo>

        <Feather name="chevron-right" size={RFValue(10)} color={colors.text} />

        <DateInfo>
          <DateTitle>DE</DateTitle>
          <DateValue>18/06/2021</DateValue>
          <BorderBottom selected={false} />
        </DateInfo>
      </RentalPeriod>

      <Footer>
        <Button>Criar</Button>
      </Footer>
    </Container>
  );
}
