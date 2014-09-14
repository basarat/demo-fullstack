define(["require", "exports", './angularModules', './controllers/testController'], function(require, exports, angularModules_file, testController_file) {
    exports.angularModules = angularModules_file;

    exports.testController = testController_file;

    var $injector = angular.bootstrap(document, [exports.angularModules.mainModuleName]);
});
