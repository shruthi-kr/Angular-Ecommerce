ProductModel = (function () {
    var productModel = function ProductModel(data) {  
        this.Title = data ? data.Title : null;
        this.ImagePath = data ? data.ImagePath : null;
        this.OnSale = data ? data.OnSale : false;
        this.IsNew = data ? data.IsNew : false;
        this.Price = data ? data.Price : null;
        this.DiscountPrice = data ? data.Price : null;
    }
    return productModel;
}());