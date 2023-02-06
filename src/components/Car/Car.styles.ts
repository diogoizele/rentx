import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(126)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(24)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Detail = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text_detail};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.title};
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: ${RFValue(16)}px;
`;

export const LineContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Rent = styled.View`
  margin-right: ${RFValue(24)}px;

  justify-content: center;
`;
export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text_detail};
`;
export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.main};
`;
export const Type = styled.View`
  justify-content: center;

  margin-right: ${RFValue(24)}px;
  margin-left: ${RFValue(16)}px;
  flex-direction: row;
`;
export const CarImage = styled.Image`
  width: ${RFValue(167)}px;
  height: ${RFValue(85)}px;
`;
