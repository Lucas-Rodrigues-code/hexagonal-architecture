"use strict";
class Product {
    constructor(id, name, status, price) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.price = price;
    }
    IsValid() {
        return this.id > 0;
    }
    Enable() {
        this.status = 'enabled';
    }
    Disable() {
        this.status = 'disabled';
    }
    GetID() {
        return this.id;
    }
    GetName() {
        return this.name;
    }
    GetStatus() {
        return this.status;
    }
    GetPrice() {
        return this.price;
    }
    ChangePrice(price) {
        this.price = price;
    }
}
const produto = new Product(1, 'Produto 1', 'enabled', 100);
