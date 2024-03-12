import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe("Pruebas en <CounterApp>", () => {
  const valorInicialContador = 100;

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(
      <CounterApp valorInicialContador={valorInicialContador} />
    );

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el valor inicial de 100", () => {
    render(<CounterApp valorInicialContador={valorInicialContador} />);
    expect(screen.getByText(valorInicialContador)).toBeTruthy();

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
  });

  test("debe de incrementar con el botón +1", () => {
    render(<CounterApp valorInicialContador={10} />);
    fireEvent.click(screen.getByText("+1"));

    expect(screen.getByText("11")).toBeTruthy();
  });

  test("debe de decrementar con el botón -1", () => {
    render(<CounterApp valorInicialContador={10} />);
    fireEvent.click(screen.getByText("-1"));

    expect(screen.getByText("9")).toBeTruthy();
  });

  test("debe de funcionar el bot+on de reset", () => {

    render(<CounterApp valorInicialContador={355} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));

    fireEvent.click(screen.getByRole('button', {name: "btn-reset"}));

    expect(screen.getByText(355)).toBeTruthy();

  });

});
