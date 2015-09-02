'use strict';

angular.module('quoteMachineApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

$httpProvider.defaults.useXDomain = true;
$httpProvider.defaults.withCredentials = true;
delete $httpProvider.defaults.headers.common["X-Requested-With"];
$httpProvider.defaults.headers.common["Accept"] = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
$httpProvider.defaults.headers.common["Content-Type"] = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

 
  });