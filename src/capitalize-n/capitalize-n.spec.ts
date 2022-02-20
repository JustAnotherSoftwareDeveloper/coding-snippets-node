import { capitalizeN } from "./capitalize-n";

describe("CapitalizNTest", () => {
  it("Example Given #1", () => {
    const inputN = 3;
    const inputStr = "Aspiration.com";
    const expected = "asPirAtiOn.cOm";
    const actual = capitalizeN(inputStr, inputN);
    expect(actual).toEqual(expected);
  });

  it("Example Given #2", () => {
    const inputN = 4;
    const inputStr = "Aspiration.com";
    const expected = "aspIratIon.cOm";
    const actual = capitalizeN(inputStr, inputN);
    expect(actual).toEqual(expected);
  });

  it("Numbers", () => {
    const inputN = 3;
    const inputStr = "1234###abcd###ABCD";
    const expected = "1234###aBcd###AbcD";
    const actual = capitalizeN(inputStr, inputN);
    expect(actual).toEqual(expected);
  });

  it("Spaces", () => {
    const inputN = 2;
    const inputStr = "1234   ABCD   abcd";
    const expected = "1234   aBcD   aBcD";
    const actual = capitalizeN(inputStr, inputN);
    expect(actual).toEqual(expected);
  });

  it("Big N", () => {
    const inputN = 100;
    const inputStr = "1234###abcd###ABCD";
    const expected = "1234###abcd###abcd";
    const actual = capitalizeN(inputStr, inputN);
    expect(actual).toEqual(expected);
  });
});
