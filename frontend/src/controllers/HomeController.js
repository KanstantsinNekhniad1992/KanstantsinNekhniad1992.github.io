'use strict';

class HomeController {

    constructor($scope) {
        $scope.greeting = 'Hello FrontCamp';
    }

}

HomeController.$inject = ['$scope'];
export default HomeController;
