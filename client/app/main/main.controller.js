'use strict';

angular.module('quoteMachineApp')
  .controller('MainCtrl', function ($scope, $http, $q) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.getQuote = function(){
      $http.get('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json').success(function(quote){
        // $scope.quoteText=quote.text
        // $scope.quoteAuthor=quote.author
        console.log(JSON.stringify(quote));
      })
    }

  });
