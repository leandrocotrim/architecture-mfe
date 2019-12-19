angular
    .module('app')
    .component('hello', {
        template:
            '<h3>{{$ctrl.greeting}} galaxy!</h3><button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',

        controller: function () {
            this.greeting = 'Oi';

            this.toggleGreeting = function () {
                this.greeting = (this.greeting == 'Oi') ? 'Blz?' : 'Oi';
            }
        }
    });