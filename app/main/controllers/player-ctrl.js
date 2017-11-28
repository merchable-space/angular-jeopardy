'use strict';
angular.module('main')
.controller('PlayerCtrl', function (Main, $scope, $rootScope, $ionicModal) {

  $rootScope.switchQuestions = switchQuestions;
  $rootScope.openQuestion = openQuestion;
  $rootScope.closeQuestion = closeQuestion;
  $rootScope.awardPoints = awardPoints;
  $rootScope.gameReset = gameReset;

  $rootScope.playerList = {
    one: 'Goku',
    two: 'Mikasa',
    three: 'Naruto'
  };

  if ($rootScope.scoreList === undefined) {
    $rootScope.scoreList = {
      one: 0,
      two: 0,
      three: 0
    };
  }

  $rootScope.disableButtons = {
    'A1': false,
    'A2': false,
    'A3': false,
    'A4': false,
    'A5': false,
    'A6': false,
    'B1': false,
    'B2': false,
    'B3': false,
    'B4': false,
    'B5': false,
    'B6': false,
    'C1': false,
    'C2': false,
    'C3': false,
    'C4': false,
    'C5': false,
    'C6': false,
    'D1': false,
    'D2': false,
    'D3': false,
    'D4': false,
    'D5': false,
    'D6': false,
    'E1': false,
    'E2': false,
    'E3': false,
    'E4': false,
    'E5': false,
    'E6': false
  };

  $rootScope.questionSet = {
    1: {
      'A1': 'Test',
    },
    2: {
      'A1': 'Test2',
    },
    3: {},
    4: {}
  };

  $rootScope.headersSet = {
    1: {
      1: 'Test',
      2: 'Test',
      3: 'Test',
      4: 'Test',
      5: 'Test',
      6: 'Test'
    },
    2: {
      1: 'Test',
      2: 'Test',
      3: 'Test',
      4: 'Test',
      5: 'Test',
      6: 'Test'
    },
    3: {
      1: 'Test',
      2: 'Test',
      3: 'Test',
      4: 'Test',
      5: 'Test',
      6: 'Test'
    },
    4: {
      1: 'Test',
      2: 'Test',
      3: 'Test',
      4: 'Test',
      5: 'Test',
      6: 'Test'
    }
  };

  $ionicModal.fromTemplateUrl('main/templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up',
    backdropClickToClose: false,
    hardwareBackButtonClose: false
  }).then(function (modal) {
    $rootScope.questionModal = modal;
  });

  function switchQuestions (setId) {
    $rootScope.selectedId = setId;
    $rootScope.selectedList = $rootScope.questionSet[setId];
    $rootScope.selectedHeaders = $rootScope.headersSet[setId];
  }

  function openQuestion (questionTag, pointsValue) {
    var currentSet = $rootScope.selectedList;

    $rootScope.thisQuestionText = currentSet[questionTag];
    $rootScope.disableButtons[questionTag] = true;
    $rootScope.pointValue = pointsValue;
    $rootScope.questionModal.show();
  }

  function closeQuestion () {
    $rootScope.questionModal.hide();
  }

  function awardPoints (points, player) {
    $rootScope.scoreList[player] += points;
  }

  function gameReset () {
    $rootScope.scoreList = {
      one: 0,
      two: 0,
      three: 0
    };

    $rootScope.disableButtons = {
      'A1': false,
      'A2': false,
      'A3': false,
      'A4': false,
      'A5': false,
      'A6': false,
      'B1': false,
      'B2': false,
      'B3': false,
      'B4': false,
      'B5': false,
      'B6': false,
      'C1': false,
      'C2': false,
      'C3': false,
      'C4': false,
      'C5': false,
      'C6': false,
      'D1': false,
      'D2': false,
      'D3': false,
      'D4': false,
      'D5': false,
      'D6': false,
      'E1': false,
      'E2': false,
      'E3': false,
      'E4': false,
      'E5': false,
      'E6': false
    };
  }
});
