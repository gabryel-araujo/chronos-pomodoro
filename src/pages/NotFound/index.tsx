import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <h1>404 Not Found</h1>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
