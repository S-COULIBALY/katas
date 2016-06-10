
// Recette "XIV" + "LX" = "LXXIV

describe("RomanCalculator", function () {
  it("return II when I + I", function () {
    expect(RomanCalculator.plus("I", "I")).toBe("II");
  });
  it("return VI when V + I", function () {
    expect(RomanCalculator.plus("V", "I")).toBe("VI");
  });
  it("return VI when III + III", function () {
    expect(RomanCalculator.plus("III", "III")).toBe("VI");
  });
  it("return X when VII + III", function () {
    expect(RomanCalculator.plus("VII", "III")).toBe("X");
  });
  it("return IX when VII + II", function () {
    expect(RomanCalculator.plus("VII", "II")).toBe("IX");
  });
});