import {getUser, getUsuarioActivo} from '../../base-pruebas/05-funciones'

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {


    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    console.log(user);

expect (testUser).toEqual (user )

  });

  test('getUsuarioActivo debe de retornar un objeto', () => {

    const name= 'Daniela';
    
    const objRespuesta= getUsuarioActivo(name);

    expect (objRespuesta).toEqual({
        uid:"ABC567",
        username: name
    });
      
  })
  
});
