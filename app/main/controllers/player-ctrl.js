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
  $rootScope.playMusic = playMusic;
  $rootScope.stopMusic = stopMusic;

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
      'A3': 'This 2016 film took in 355 million dollars worldwide to make it the highest-grossing anime of all time.',
      'B3': 'With a total gross of 55 million dollars, this 2012 title is Mamoru Hosoda\'s best-selling film.',
      'C3': 'At 60 million dollars, this 2012 Evangelion movie is the most successful of them all.',
      'D3': 'Grossing 66 million dollars, this 2016 film is the highest earning Detective Conan film.',
      'E3': 'At 85 million dollars worldwide sales and released in 2012, this is the best selling One Piece film.',
      'A4': '<img src="main/assets/images/game/ichigo.png" height="400px"></img>',
      'B4': '<img src="main/assets/images/game/inuyasha.png" height="400px"></img>',
      'C4': '<img src="main/assets/images/game/duo.png" height="400px"></img>',
      'D4': '<img src="main/assets/images/game/ranka.png" height="400px"></img>',
      'E4': '<img src="main/assets/images/game/dark.png" height="400px"></img>',
      'A5': 'Famous for being in almost everything, this American VA voices characters named Greed, Snow and Kanji.',
      'B5': 'Everyone\'s favourite mispronounciation, this American VA has been Fai, Tamaki and Junpei.',
      'C5': 'This Japanese VA has devilishly good style, musical range and is also Riku, Rin and Light.',
      'D5': 'Starting in 1999, this American VA has leant her voice to Lust, Maka and Trunks.',
      'E5': 'A part-time radio presenter, this Japanese VA is the voice of Izaya, Penguin and Levi.',
      'A6': 'This year saw the release of "The Secret World of Arriety" and "Mardock Scramble: The First Combustion".',
      'B6': 'Released in this year: "Death Note: The Last Name" and "The Girl Who Leapt Through Time".',
      'C6': '"Pokémon: The First Movie" and "Gundam Wing: Endless Waltz" were out this year.',
      'D6': '"The Boy and the Beast" and "Digimon Tri: Reunion" made an appearance in this year.',
      'E6': 'In cinemas in this year: "Kiki\'s Delivery Service" and "Patlabor: The Movie".',
    },
    2: {
      'A1': '<img src="main/assets/images/play.png" ng-click="playMusic(1)"></img><img src="main/assets/images/stop.png" ng-click="stopMusic()"></img>',
      'B1': '<button class="button button-balanced icon-left ion-play button-block" ng-click="playMusic(1)">Play Audio</button><button class="button button-assertive icon-left ion-stop button-block" ng-click="stopMusic()">Stop Audio</button>',
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
      'A3': 'your name.',
      'B3': 'Wolf Children',
      'C3': 'Evangelion 3.0 - You Can (Not) Redo',
      'D3': 'Detective Conan: The Darkest Nightmare',
      'E3': 'One Piece Film: Z',
      'A4': 'Ichigo Kurasaki (Bleach)',
      'B4': 'Inuyasha',
      'C4': 'Duo Maxwell (Gundam Wing)',
      'D4': 'Ranka Lee (Macross)',
      'E4': 'Dark Mousy (DN Angel)',
      'A5': 'Troy Baker',
      'B5': 'Vic Mignogna',
      'C5': 'Mamoru Miyano',
      'D5': 'Laura Bailey',
      'E5': 'Hiroshi Kamiya',
      'A6': '2010',
      'B6': '2007',
      'C6': '1998',
      'D6': '2015',
      'E6': '1989',
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
    $rootScope.audio.pause();
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

  function playMusic (file) {
    switch (file) {
      case 1:
        file = 'test.mp3';
        break;
      case 2:
        file = 'test2.mp3';
        break;
    }
    $rootScope.audio = new Audio('main/assets/audio/' + file);
    $rootScope.audio.play();
  }

  function stopMusic () {
    $rootScope.audio.pause();
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
}).directive('compile', ['$compile', function ($compile) {
  return function (scope, element, attrs) {
    scope.$watch(
      function (scope) {
        // watch the 'compile' expression for changes
        return scope.$eval(attrs.compile);
      },
      function (value) {
        // when the 'compile' expression changes
        // assign it into the current DOM
        element.html(value);

        // compile the new DOM and link it to the current
        // scope.
        // NOTE: we only compile .childNodes so that
        // we don't get into infinite loop compiling ourselves
        $compile(element.contents())(scope);
      }
    );
  };
}]);
