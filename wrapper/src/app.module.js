var app = angular.module('app', ['ui.router', 'oc.lazyLoad']);

app.config(
    ['$locationProvider', '$stateProvider', '$ocLazyLoadProvider',
        function ($locationProvider, $stateProvider, $ocLazyLoadProvider) {
            $locationProvider.html5Mode(true);

            //$ocLazyLoadProvider --> fazer config por module...
            //quebrar em modules como o NG2+
            //https://oclazyload.readme.io/docs/dependency-injection
            //https://github.com/ui-router/sample-app-angularjs/blob/ac107905c6eba60aca4229f0648102c33b3ee128/app/main/app.states.js#L88-L97
            //https://github.com/GopherLabsLtd/angularMaterial-webpack2-ocLazyLoad
            //https://ui-router.github.io/guide/lazyloading
            //https://oclazyload.readme.io/docs/oclazyloadprovider

            //https://ui-router.github.io/ng1/tutorial/hellogalaxy
            //https://plnkr.co/edit/jbZgIg?p=info


            var states = [
                { name: 'hello', url: '/hello', component: 'hello' },
                { name: 'about', url: '/about', component: 'about' },
                {
                    name: 'people', url: '/people', component: 'people',
                    resolve: {
                        people: function (PeopleService) {
                            return PeopleService.getAllPeople();
                        }
                    },
                    lazyLoad: function ($transition$) {
                        //console.log($transition$);
                        //return $transition$.injector().get('$ocLazyLoad').load('http://localhost:8080/app/data/people2.json?lazy=load');
                    }
                },
                {
                    name: 'people.person', url: '/{personId}', component: 'person',
                    resolve: {
                        person: function (people, $stateParams) {
                            return people.find(function (person) {
                                return person.id === $stateParams.personId;
                            });
                        }
                    }
                }
            ];

            states.forEach(function (state) {
                $stateProvider.state(state);
            });
        }]);

app.run(function ($http, $uiRouter) {
    $http.get('data/people.json', { cache: true });
});