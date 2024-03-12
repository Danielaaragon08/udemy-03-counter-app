import { getAllByText, render } from "@testing-library/react";
import { FirsApp } from "../FirsApp";

describe("Pruebas en <FirstApp/>", () => {
  //   test("Debe de hacer match con el snapshot", () => {
  //     const title = "Curso de React";
  //     const {container} = render(<FirsApp title={title} />);

  //     expect(container).toMatchSnapshot();

  //   });

  test("Debe de mostrar el título en un h1", () => {
    const title = "Curso de React";
    const { getByText, getByTestId } = render(<FirsApp title={title} />);

    expect(getByText(title)).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Debe de mostrar el subtitulo enviado por Props", () => {
    const title = "Curso de React";
    const subTitle = "Bienvenidos";
    const { getAllByText } = render(<FirsApp title={title} subTitle={subTitle} />);

    expect(getAllByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
