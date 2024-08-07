/*class Car {
    constructor() {
      this.brand= '';
      this.make= '';
      this.year='';

      displayInfo() 
      {
        console.log(this.year + " " + this.brand + "" + this.make);
      }
    }
  }

  let car1 = new Car('a','b', 'c');
  //car1.displayInfo();

  console.log(car1.brand);
  */

  function Product(name,price,stock){
    this.name = name;
    this.price = price;
    this.stock = stock;

    this.stocktake = function()
    {
        return `${this.name} | ${this.stock} available in stock priced at ${price} per unit`
    }
    this.sell = function(sellQuantity)
    {
        if (this.stock >= sellQuantity)
        {
            this.stock = this.stock - sellQuantity;
            return `Sale success, sold ${sellQuantity} of  ${this.name}. Remaining stock ${this.stock}`
        }else {
            return `Sale unsuccessful. Not enough stock to sell ${sellQuantity} of ${this.name}. Remaining stock ${this.stock}`
        }
        //return this.stock >= sellQuantity? this.stock = this.stock - sellQuantity successMsg: failMsg;
    }
  }

  let product1 = new Product('Laptop', 1200, 50);
let product2 = new Product('Phone', 800, 30);

console.log(product1.stocktake());
console.log(product1.sell(10));
console.log(product1.stocktake());
console.log(product1.sell(45));
console.log(product1.stocktake());

