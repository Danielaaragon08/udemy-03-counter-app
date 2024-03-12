import { render, screen } from "@testing-library/react";
import { FirsApp } from "../FirsApp";

describe("Pruebas en <FirstApp/>", () => {

  const title = "Curso de React";
  const subTitle = "Bienvenidos";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<FirsApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Curso de React"', () => {
    render(<FirsApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("Debe de mostrar el título en un h1", () => {
    render(<FirsApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("Debe de mostrar el subtitulo enviado por props ", () => {
    render(<FirsApp title={title} subTitle={subTitle} />);

    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
