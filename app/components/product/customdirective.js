myApp.directive('productDetails', function () {
    return {
        restrict: 'EA',
        template: '<div class="product"> <div class="image"> <a href="shop-detail.html"> <img src="{{obj.ImagePath}}" alt="" class="img-responsive image1"> </a> </div> <!-- /.image --> <div class="text"> <h3><a href="shop-detail.html">{{obj.Title}}</a> </h3> <p class="price"> <p ng-show="obj.Price == obj.DiscountPrice">{{obj.DiscountPrice | currency}} </p> <p ng-show="obj.Price != obj.DiscountPrice"><del>{{obj.Price}}</del> {{obj.DiscountPrice}}</p> </p> <p class="buttons"> <a href="shop-detail.html" class="btn btn-default">View detail</a> <a href="shop-basket.html" class="btn btn-template-main"><i class="fa fa-shopping-cart"></i>Add to cart</a> </p> </div> <!-- /.text --> <div class="ribbon sale" ng-show="obj.OnSale"> <div class="theribbon">SALE</div> <div class="ribbon-background"></div> </div> <!-- /.ribbon --> <div class="ribbon new" ng-show="obj.IsNew"> <div class="theribbon">NEW</div> <div class="ribbon-background"></div> </div> <!-- /.ribbon --> </div>',
        //templateUrl: 'app/views/productTemplate.html',
        scope: {obj: '='}
    };
});
