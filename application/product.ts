interface ProductInterface {
  IsValid(): boolean;
  Enable(): void;
  Disable(): void;
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
    return this.id > 0;
  }

  Enable(): void {
    this.status = "enabled";
  }

  Disable(): void {
    this.status = "disabled";
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
