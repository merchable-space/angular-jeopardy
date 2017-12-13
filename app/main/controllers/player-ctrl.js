'use strict';
angular.module('main')
.controller('PlayerCtrl', function (Main, $scope, $rootScope, $ionicModal, $window, $interval) {

  $rootScope.switchQuestions = switchQuestions;
  $rootScope.openQuestion = openQuestion;
  $rootScope.closeQuestion = closeQuestion;
  $rootScope.awardPoints = awardPoints;
  $rootScope.gameReset = gameReset;
  $rootScope.openAnswer = openAnswer;
  $rootScope.closeAnswer = closeAnswer;
  $rootScope.showSettings = showSettings;
  $rootScope.closeSettings = closeSettings;

  if ($rootScope.playerList === undefined) {
    $rootScope.playerList = {
      one: 'Goku',
      two: 'Mikasa',
      three: 'Naruto'
    };
  }

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
      'A1': 'A word that describes a character that starts off cold-hearted, but gradually warms to another character. Usually voiced by Rie Kugimiya.',
      'B1': 'Referencing the space between skirt and stockings, this phrase translates as "absolute territory".',
      'C1': 'A small tuft or strand of hair that sticks out in a different direction to the rest of a character\'s hair.',
      'D1': 'The name used to refer to male fans of yaoi.',
      'E1': 'This term is used to describe a phenomenon in manga where a character will explode out of the page\'s frames, usually for emphasis.',
      'A2': '"May all your bacon burn."',
      'B2': '"You are already dead."',
      'C2': '"It\'s not bad to dream. But you also have to consider what\'s realistic."',
      'D2': '"A true man never dies, even when he is killed!"',
      'E2': '"Even if I lose this feeling, I\'m sure that I\'ll just fall in love with you all over again."',
      'A3': '',
      'B3': '',
      'C3': '',
      'D3': '',
      'E3': '',
      'A4': '',
      'B4': '',
      'C4': '',
      'D4': '',
      'E4': '',
      'A5': '',
      'B5': '',
      'C5': '',
      'D5': '',
      'E5': '',
      'A6': '',
      'B6': '',
      'C6': '',
      'D6': '',
      'E6': '',
    },
    2: {
      'A1': '',
      'B1': '',
      'C1': '',
      'D1': '',
      'E1': '',
      'A2': '',
      'B2': '',
      'C2': '',
      'D2': '',
      'E2': '',
      'A3': '',
      'B3': '',
      'C3': '',
      'D3': '',
      'E3': '',
      'A4': '',
      'B4': '',
      'C4': '',
      'D4': '',
      'E4': '',
      'A5': '',
      'B5': '',
      'C5': '',
      'D5': '',
      'E5': '',
      'A6': '',
      'B6': '',
      'C6': '',
      'D6': '',
      'E6': '',
    },
    3: {
      'A1': '',
      'B1': '',
      'C1': '',
      'D1': '',
      'E1': '',
      'A2': '',
      'B2': '',
      'C2': '',
      'D2': '',
      'E2': '',
      'A3': '',
      'B3': '',
      'C3': '',
      'D3': '',
      'E3': '',
      'A4': '',
      'B4': '',
      'C4': '',
      'D4': '',
      'E4': '',
      'A5': '',
      'B5': '',
      'C5': '',
      'D5': '',
      'E5': '',
      'A6': '',
      'B6': '',
      'C6': '',
      'D6': '',
      'E6': '',
    },
    4: {
      'A1': '',
      'B1': '',
      'C1': '',
      'D1': '',
      'E1': '',
      'A2': '',
      'B2': '',
      'C2': '',
      'D2': '',
      'E2': '',
      'A3': '',
      'B3': '',
      'C3': '',
      'D3': '',
      'E3': '',
      'A4': '',
      'B4': '',
      'C4': '',
      'D4': '',
      'E4': '',
      'A5': '',
      'B5': '',
      'C5': '',
      'D5': '',
      'E5': '',
      'A6': '',
      'B6': '',
      'C6': '',
      'D6': '',
      'E6': '',
    }
  };

  $rootScope.answerSet = {
    1: {
      'A1': 'Tsundere',
      'B1': 'Zettai ryōiki',
      'C1': 'Ahoge',
      'D1': 'Fudanshi',
      'E1': 'Buchinuki',
      'A2': 'Howl\'s Moving Castle (Calcifer)',
      'B2': 'Fist Of The North Star (Kenshirou)',
      'C2': 'My Hero Academia (All-Might)',
      'D2': 'Gurren Lagaan (Kamina)',
      'E2': 'Cardcaptor Sakura (Syaoran Li)',
      'A3': '',
      'B3': '',
      'C3': '',
      'D3': '',
      'E3': '',
      'A4': '',
      'B4': '',
      'C4': '',
      'D4': '',
      'E4': '',
      'A5': '',
      'B5': '',
      'C5': '',
      'D5': '',
      'E5': '',
      'A6': '',
      'B6': '',
      'C6': '',
      'D6': '',
      'E6': '',
    },
    2: {
      'A1': '',
      'B1': '',
      'C1': '',
      'D1': '',
      'E1': '',
      'A2': '',
      'B2': '',
      'C2': '',
      'D2': '',
      'E2': '',
      'A3': '',
      'B3': '',
      'C3': '',
      'D3': '',
      'E3': '',
      'A4': '',
      'B4': '',
      'C4': '',
      'D4': '',
      'E4': '',
      'A5': '',
      'B5': '',
      'C5': '',
      'D5': '',
      'E5': '',
      'A6': '',
      'B6': '',
      'C6': '',
      'D6': '',
      'E6': '',
    },
    3: {
      'A1': '',
      'B1': '',
      'C1': '',
      'D1': '',
      'E1': '',
      'A2': '',
      'B2': '',
      'C2': '',
      'D2': '',
      'E2': '',
      'A3': '',
      'B3': '',
      'C3': '',
      'D3': '',
      'E3': '',
      'A4': '',
      'B4': '',
      'C4': '',
      'D4': '',
      'E4': '',
      'A5': '',
      'B5': '',
      'C5': '',
      'D5': '',
      'E5': '',
      'A6': '',
      'B6': '',
      'C6': '',
      'D6': '',
      'E6': '',
    },
    4: {
      'A1': '',
      'B1': '',
      'C1': '',
      'D1': '',
      'E1': '',
      'A2': '',
      'B2': '',
      'C2': '',
      'D2': '',
      'E2': '',
      'A3': '',
      'B3': '',
      'C3': '',
      'D3': '',
      'E3': '',
      'A4': '',
      'B4': '',
      'C4': '',
      'D4': '',
      'E4': '',
      'A5': '',
      'B5': '',
      'C5': '',
      'D5': '',
      'E5': '',
      'A6': '',
      'B6': '',
      'C6': '',
      'D6': '',
      'E6': '',
    }
  };

  $rootScope.headersSet = {
    1: {
      1: 'Anime to Z',
      2: 'Quote Me On That',
      3: 'High Earners',
      4: 'Who Are You?',
      5: 'Vox Populi',
      6: 'Way Back When'
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

  $ionicModal.fromTemplateUrl('main/templates/modal_answer.html', {
    scope: $scope,
    animation: 'slide-in-up',
    backdropClickToClose: false,
    hardwareBackButtonClose: false
  }).then(function (modal) {
    $rootScope.answerModal = modal;
  });

  $ionicModal.fromTemplateUrl('main/templates/modal_settings.html', {
    scope: $scope,
    animation: 'slide-in-up',
    backdropClickToClose: false,
    hardwareBackButtonClose: false
  }).then(function (modal) {
    $rootScope.settingsModal = modal;
  });

  function checkTimer () {
    if ($rootScope.questionTimer === 0) {
      $interval.cancel($rootScope.questionTicker);
    }
    else {
      $rootScope.questionTimer--;
    }
  }

  function switchQuestions (setId) {
    $rootScope.selectedId = setId;
    $rootScope.selectedList = $rootScope.questionSet[setId];
    $rootScope.selectedAnswers = $rootScope.answerSet[setId];
    $rootScope.selectedHeaders = $rootScope.headersSet[setId];
  }

  function openQuestion (questionTag, pointsValue) {
    var currentSet = $rootScope.selectedList;
    var currentHeaders = $rootScope.selectedHeaders;
    var currentColumn = questionTag.substring(1);

    $rootScope.thisQuestionText = currentSet[questionTag];
    $rootScope.thisQuestionColumn = currentHeaders[currentColumn];
    $rootScope.disableButtons[questionTag] = true;
    $rootScope.pointValue = pointsValue;
    $rootScope.questionModal.show();
  }

  function openAnswer (questionTag, pointsValue) {
    var currentSet = $rootScope.selectedList;
    var currentAnswers = $rootScope.selectedAnswers;
    var currentHeaders = $rootScope.selectedHeaders;
    var currentColumn = questionTag.substring(1);

    $rootScope.questionTimer = 10;
    $rootScope.thisQuestionText = currentSet[questionTag];
    $rootScope.thisQuestionColumn = currentHeaders[currentColumn];
    $rootScope.thisQuestionAnswer = currentAnswers[questionTag];
    $rootScope.pointValue = pointsValue;
    $rootScope.answerModal.show();
    $rootScope.questionTicker = $interval(checkTimer, 1000, 10);
  }

  function closeQuestion () {
    $rootScope.questionModal.hide();
  }

  function closeAnswer () {
    $rootScope.answerModal.hide();
    $interval.cancel($rootScope.questionTicker);
  }

  function showSettings () {
    $rootScope.settingsModal.show();
  }

  function closeSettings () {
    $rootScope.settingsModal.hide();
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

    $window.location.reload();
  }
});
