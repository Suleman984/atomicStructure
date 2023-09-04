import styled from "styled-components";
import React from "react";
const Container = styled("div")`
  display: flex;
`;
const Pane = styled("div")`
  flex: 1;
`;

interface SplitscreenProps {
  left: React.ComponentType;
  right: React.ComponentType;
}
export const Splitscreen: React.FC<SplitscreenProps> = ({
  left: Left,
  right: Right,
}) => {
  return (
    <Container>
      <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane>
    </Container>
  );
};
