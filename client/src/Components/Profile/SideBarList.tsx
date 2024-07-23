import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const SideBarList: React.FC<Props> = ({ title, elements }) => {
  return (
    <Container className="bg-[#ffff] ">
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffff;
  border: 1px solid lightgray;
  border-radius: 14px;
`;

export const Item = styled.div`
  padding: 10px 16px;

  & + div {
    border-top: 1px solid lightgray;
  }

  &:first-child {
    padding-top: 13px;
  }

  &:last-child {
    padding-bottom: 17px;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;
`;

export default SideBarList;
