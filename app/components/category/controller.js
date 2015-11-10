myApp.controller("CategoryCtrl", function ($scope, $location) {
    $scope.appDetails = {};
    $scope.appDetails.title = "productart";
    $scope.appDetails.tagline = "We have collection of 1 Million products";

    $scope.nav = {};
    $scope.nav.isActive = function (path) {
        if (path === $location.path()) {
            return true;
        }

        return false;
    }
});