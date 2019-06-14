//Prueba para validar operación de suma
QUnit.test("Test sum", function (assert) {
  var n = sum(15, 5);
  assert.ok(n === 20, "Passed!");
});

//Prueba para validar operación de resta
QUnit.test("Test subtract", function (assert) {
  var n = subtract(15, 5);
  assert.ok(n === 10, "Passed!");
});

//Prueba para validar operación de multiplicación
QUnit.test("Test multiply", function (assert) {
  var n = multiply(15, 5);
  assert.ok(n === 75, "Passed!");
});

//Prueba para validar operación de división
QUnit.test("Test divide", function (assert) {
  var n = divide(15, 5);
  assert.ok(n === 3, "Passed!");
});

//Prueba para validar si número es cero
QUnit.test("Test number zero", function (assert) {
  var sw = validateNumberZero(5);
  assert.ok(sw === true, "Passed!");
});

//Prueba para validar si una entrada es un número
QUnit.test("Test is Number", function (assert) {
  var sw = validateIsNumber(5);
  assert.ok(sw === true, "Passed!");
});

