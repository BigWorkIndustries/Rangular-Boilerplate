var module = require('./header');

describe('header', function() {

    var ctrl;
    beforeEach(function() {
        angular.mock.module(module);

        angular.mock.inject(function($controller,$rootScope, _AppServices_){

            var scope = $rootScope.$new();
            ctrl = $controller('HeaderCtrl',{$scope:scope,AppServices:_AppServices_});
        });
    });

    it("has a controller", function() {
        expect(ctrl).toBeObject();
    });
});