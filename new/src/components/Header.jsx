import React from "react";
import styled from "styled-components";
import {
  Styledheader,
  Logo,
  Nav,
  Imagenew,
} from "./styled-components/Header.styled";
import { Container } from "./styled-components/Container.styled";
import { Btn } from "./styled-components/Button.style";
import { Flex } from "./styled-components/flex.style";

const Header = () => {
  return (
    <Styledheader>
      <Container>
        <Nav>
          <Logo src='./images/logo.png' />
          <Btn>try it free</Btn>
        </Nav>

        <Flex>
          <div>
            <h1>build the community Your Fans Will Love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad
              culpa aperiam eaque, iure veniam ullam at architecto.
            </p>
            <Btn bg="#ff0099" color="#fff">
              Get Started For Free
            </Btn>
          </div>
          <Imagenew src="./images/imgmain.png" alt="" />
        </Flex>
      </Container>
    </Styledheader>
  );
};

export default Header;
