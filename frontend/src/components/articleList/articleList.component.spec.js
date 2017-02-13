'use strict';

describe('articleList', () => {

    let suit = {},
        listElement,
        getCompiledTemplate;

    beforeAll(angular.mock.module('FrontCampApp'));

    beforeEach(inject(function ($rootScope, componentController, $compile) {
        suite.componentController = componentController;

        var articles = [{
            id: "5856ae1a3605b70ff0d080d1",
            title: "First Article",
            description: "First Article Description",
            author: "Kostya",
            date: "2016-12-18T15:41:14.539Z",
            tags: [
                "tag",
                "news",
                "froncamp"
            ]
        }, {
            id: "587fd318866c0555146769db",
            title: "Second Article",
            description: "Second Article Description",
            author: "Kostya",
            date: "2016-12-18T15:41:14.539Z",
            tags: [
                "tag",
                "news",
                "football"
            ]
        }];

        suite.$scope = $rootScope.new();
        suite.$scope.articles = articles;
        
        componentController.$scope = suite.$scope;
    
        getCompiledTemplate = function () {
            var element = angular.element('<article-list></article-list>');
            var compiledElement = compile(element)(suite.$scope);
            suite.$scope.$digest();
            return compiledElement;
        }

        listElement = getCompiledTemplate();

    }));

    afterAll(function () {
        suite = null;
    });

    it('should applied template', function () {
        //expect(listElement.html()).not.toEqual('');
    });

    it('should have another-person element', function () {
        //expect(listElement.find('.article').length).toEqual(2);
    });

});