import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById de retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroeById de retornar un undefined", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe de retornar heroes de DC", () => {
    const owner = "DC";
    const herosDc = getHeroesByOwner(owner);

    expect(herosDc.length).toBe(3);
    expect(herosDc).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
    expect(herosDc).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  test("getHeroesByOwner debe de retornar heroes de Marver", () => {
    const owner = "Marvel";
    const heroesMarvel = getHeroesByOwner(owner);
    expect(heroesMarvel.length).toBe(2);
  });
});
