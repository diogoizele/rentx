import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

interface ImageInndexProps {
  active: boolean;
}

const width = Dimensions.get("window").width;

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 24px;
`;

export const ImageIndex = styled.View<ImageInndexProps>`
  width: 6px;
  height: 6px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};

  margin-left: 8px;
  border-radius: 3px;
`;

export const CarImageWrapper = styled.View`
  width: ${RFValue(width)}px;
  height: ${RFValue(132)}px;

  justify-content: center;
  align-items: center;

  margin-bottom: ${RFValue(16)}px;
  padding: ${RFValue(24)}px;
`;

export const CarImage = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(132)}px;
`;
