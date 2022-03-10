class Product {
    constructor(id, name, price, category, image = null) {
      this.id = id.toString();
      this.title = name;
      this.image = image;
      this.category = category;
      this.price = price;
    }
  }
  
  export default Product;