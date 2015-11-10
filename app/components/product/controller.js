myApp.controller("ProductListCtrl", function ($scope, productService) {
	$scope.products = productService.getproducts();
});