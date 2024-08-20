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
    product.Disable();
    expect(product.GetStatus()).toBe("disabled");
  });

  test("should return true when the product is valid", () => {
    expect(product.IsValid()).toBe(true);
  });

  test("should return false when the product is invalid", () => {
    const invalidProduct = new Product(0, "Produto 1", "enabled", 100);
    expect(invalidProduct.IsValid()).toBe(false);
  });
});
