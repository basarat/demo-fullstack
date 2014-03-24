define(["require", "exports", './../../common/commonTest'], function(require, exports, commonTest) {
    var TestController = (function () {
        function TestController($scope) {
            this.$scope = $scope;
            $scope.foo = commonTest();
        }
        TestController.$inject = ['$scope'];
        return TestController;
    })();
});
