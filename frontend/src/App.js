import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to the Pro Shop</h1>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
