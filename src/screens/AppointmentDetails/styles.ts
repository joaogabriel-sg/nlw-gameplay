import styled, { css } from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { MemberProps } from "../../components";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
`;

export const ShareButton = styled(BorderlessButton)``;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: ${RFValue(234)}px;
`;

export const BannerContent = styled.View`
  padding: 0 24px;
  margin-bottom: 30px;

  flex: 1;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.title700};
    font-size: ${RFValue(28)}px;
    color: ${theme.colors.heading};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.text400};
    font-size: ${RFValue(13)}px;
    line-height: ${RFValue(21)}px;
    color: ${theme.colors.heading};
  `}
`;

export const Members = styled(
  FlatList as new (props: FlatListProps<MemberProps>) => FlatList<MemberProps>
)`
  margin-top: 27px;
  margin-left: 24px;
`;

export const Footer = styled.View`
  padding: 20px 24px;
  margin-bottom: ${getBottomSpace()}px;
`;
