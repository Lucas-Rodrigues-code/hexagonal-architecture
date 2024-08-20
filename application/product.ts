interface ProductInterface {
  IsValid(): boolean;
  Enable(): string;
  Disable(): string;
  GetID(): number;
  GetName(): string;
  GetStatus(): string;
  GetPrice(): number;
  ChangePrice(price: number): void;
}

class Product implements ProductInterface {
  private id: number;
  private name: string;
  private status: string;
  private price: number;

  constructor(id: number, name: string, status: string, price: number) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.price = price;
  }

  IsValid(): boolean {
    if (this.status === "") {
      this.status = "disabled";
    }
    if (this.status !== "enabled" && this.status !== "disabled") {
      return false;
    }
    if (this.price < 0) {
      return false;
    }
    return true;
  }

  Enable(): string {
    if (this.price > 0) {
      this.status = "enabled";
      return this.status;
    } else {
      throw new Error("the price must be greater than 0 to enable the product");
    }
  }

  Disable(): string {
    if (this.price === 0) {
      this.status = "disabled";
      return this.status;
    } else {
      throw new Error("the price must be equal to 0 to disable the product");
    }
  }

  GetID(): number {
    return this.id;
  }

  GetName(): string {
    return this.name;
  }

  GetStatus(): string {
    return this.status;
  }

  GetPrice(): number {
    return this.price;
  }

  ChangePrice(price: number): void {
    this.price = price;
  }
}

export { Product };
