define(["require", "exports", '../angularModules', '../../common/commonTest'], function(require, exports, angularModules, commonTest) {
    var TestController = (function () {
        function TestController($scope) {
            this.$scope = $scope;
            $scope.vm = this;
        }
        TestController.prototype.test = function () {
            console.log(commonTest());
        };
        TestController.$inject = ['$scope'];
        return TestController;
    })();

    angularModules.myApp.controller('TestController', TestController);
});
