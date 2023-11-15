import createWebServer from './webServer.js';

const webServer = createWebServer();

try {
    webServer.start(8080);
} catch (err){
    console.log(`${0} Erro Encontrado`, err);
}

// https://www.youtube.com/watch?v=tgYztVxL41Y
// https://www.youtube.com/watch?v=ldYcgPKEZC8

// TODO - Single responsibility principle
// TODO - Ecma Script
// TODO - API service