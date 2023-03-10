import { useState } from "react";
import "./App.css";
import { Container } from "./components/styled-components/Container.styled";
import Header from "./components/Header";
import Global from "./components/styled-components/Global";
import { ThemeProvider } from "styled-components";
import content from "./content";
import Card from "./components/Card";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: '768px'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Global />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
