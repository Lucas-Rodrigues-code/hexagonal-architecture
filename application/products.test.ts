import { Product } from "./product"; // Ajuste o caminho conforme necessário

describe("Product", () => {
  let product: Product;

  beforeEach(() => {
    product = new Product(1, "Produto 1", "enabled", 100);
  });

  test("should return the correct ID", () => {
    expect(product.GetID()).toBe(1);
  });

  test("should return the correct name", () => {
    expect(product.GetName()).toBe("Produto 1");
  });

  test("should return the correct status", () => {
    expect(product.GetStatus()).toBe("enabled");
  });

  test("should return the correct price", () => {
    expect(product.GetPrice()).toBe(100);
  });

  test("should change the price correctly", () => {
    product.ChangePrice(200);
    expect(product.GetPrice()).toBe(200);
  });

  test("should enable the product correctly", () => {
    product.Enable();
    expect(product.GetStatus()).toBe("enabled");
  });

  test("should disable the product correctly", () => {
    product.ChangePrice(0);
    product.Disable();
    expect(product.GetStatus()).toBe("disabled");
  });

  test("should return true when the product is valid", () => {
    expect(product.IsValid()).toBe(true);
  });
});

describe("Product error", () => {
  test("should throw an error when enabling a product with a price less than or equal to 0", () => {
    const product = new Product(1, "Produto 1", "enabled", 0);
    expect(() => product.Enable()).toThrowError(
      "the price must be greater than 0 to enable the product"
    );
  });
  test("should throw an error when disabling a product with a price greater than 0", () => {
    const product = new Product(1, "Produto 1", "enabled", 100);

    expect(() => product.Disable()).toThrowError(
      "the price must be equal to 0 to disable the product"
    );
  });

  test("should return false when the product is invalid (price)", () => {
    const product = new Product(1, "Produto 1", "enabled", -1);
    expect(product.IsValid()).toBe(false);
  });
  test("should return false when the product is invalid (status)", () => {
    const product = new Product(1, "Produto 1", "invalid", 100);
    expect(product.IsValid()).toBe(false);
  });
});
