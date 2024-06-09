const sayHello = require('./hello');

test('retorna "Hola Mundo"', () => {
    expect(sayHello()).toBe("Hola Mundo");
});
