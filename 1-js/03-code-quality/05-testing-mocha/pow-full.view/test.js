describe("potência", function() {

  describe("eleva x à potência de 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} na potência de 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  it("se n for negativo, o resultado será NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("se n não for inteiro, o resultado será NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

});
