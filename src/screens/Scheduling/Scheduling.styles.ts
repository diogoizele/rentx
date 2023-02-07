import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface BorderBottomProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: center;
  padding: 25px;

  padding-top: ${getStatusBarHeight() + 32}px;
`;

export const Title = styled.Text`
  font-size: 30px;

  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_600};

  margin-top: 24px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin: 16px 0;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const DateValue = styled.Text`
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_500};

  margin-top: 5px;
`;

export const BorderBottom = styled.View<BorderBottomProps>`
  border-bottom-width: ${({ selected }) => (selected ? 1 : 0)}px;
  border-bottom-color: ${({ theme }) => theme.colors.text};

  padding-bottom: 5px;
  margin-bottom: 5px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  padding: 24px;
`;
