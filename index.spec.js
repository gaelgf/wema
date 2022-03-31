const compute = require("./index");

describe("Basic test", () => {
  it("should return 1 when given 1", () => {
    // Arrange
    const input = "1";
    const output = "1";

    // Act
    const result = compute(input);

    // Assert
    expect(result).toEqual(output);
  });

  it("should return 2 when given 2", () => {
    // Arrange
    const input = "2";
    const output = "2";

    // Act
    const result = compute(input);

    // Assert
    expect(result).toEqual(output);
  });

  it("should return 'Foo' when given a number divisible by 3", () => {
    // Arrange
    const input = "3";
    const output = "Foo";

    // Act
    const result = compute(input);

    // Assert
    expect(result).toEqual(output);
  });

  it("should return 'Bar' when given a number divisible by 5", () => {
    // Arrange
    const input = "5";
    const output = "Bar";

    // Act
    const result = compute(input);

    // Assert
    expect(result).toEqual(output);
  });

  it("should return 'Qix' when given a number divisible by 7", () => {
    // Arrange
    const input = "7";
    const output = "Qix";

    // Act
    const result = compute(input);

    // Assert
    expect(result).toEqual(output);
  });
});
