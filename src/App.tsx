import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Form } from "./components/Form";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <Form />
      </Container>
    </>
  );
}

export default App;
