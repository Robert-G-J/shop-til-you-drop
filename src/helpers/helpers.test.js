import * as helpers from ".";

describe("Helper functions", () => {
  it("can capitalize a string", () => {
    const string = "peas";
    const capitalizedString = "Peas";
    expect(helpers.capitalizeString(string)).toEqual(capitalizedString);
  });
});
