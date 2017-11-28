'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/players');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
      .state('main.boardone', {
        url: '/board/one',
        cache: true,
        views: {
          'tab-boardOne': {
            templateUrl: 'main/templates/board.html',
            controller: 'PlayerCtrl as playerControl'
          }
        }
      })
      .state('main.players', {
        url: '/players',
        cache: true,
        views: {
          'tab-players': {
            templateUrl: 'main/templates/players.html',
            controller: 'PlayerCtrl as playerControl'
          }
        }
      })
      .state('main.scores', {
        url: '/scores',
        cache: true,
        views: {
          'tab-scores': {
            templateUrl: 'main/templates/scores.html',
            controller: 'PlayerCtrl as playerControl'
          }
        }
      });
});
