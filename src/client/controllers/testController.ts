///ts:import=angularModules
import angularModules = require('../angularModules'); ///ts:import:generated

///ts:import=commonTest
import commonTest = require('../../common/commonTest'); ///ts:import:generated

class TestController {
    static $inject = ['$scope'];
    constructor(public $scope) {
        $scope.vm = this;
    }

    test() {
        commonTest();
    }
}

angularModules.myApp.controller('TestController', TestController);