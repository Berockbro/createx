import React, { ReactNode } from "react";
import styled from "styled-components";

interface StyledTextProps {
  color: string;
  textSize: string;
}

const StyledText = styled.text<StyledTextProps>`
  color: ${(props) => props.color}:#424551;
  text-size: ${(props) => props.textSize}:"16px";
  font-family: "Lato";
  
`;

interface TextProps {
  children: ReactNode;
  color: string;
  textSize: string;
}

const Text: React.FC<TextProps> = ({ children, color, textSize }) => {
  return <StyledText color={color} textSize={textSize}>{children}</StyledText>;
};

export default Text;