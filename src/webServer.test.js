import {describe, expect, test} from '@jest/globals';
import createWebServer from "./webServer";

describe("Inicializando o Servidor", () => {
  test("Não deve ter erros", () => {
    const webServer = createWebServer();
    expect(()=>{
      webServer.start();
    }).not.toThrow();
  })
})