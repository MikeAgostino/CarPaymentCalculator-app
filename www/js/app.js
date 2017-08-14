// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ui.router', 'ngAnimate'])


  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top


    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      })
      .state('single', {
        url: "/single",
        templateUrl: 'templates/SingleCar.html'
      })
      .state('contact', {
        url: "/contact",
        templateUrl: 'templates/Contact.html'
      })




  })

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      var admobid = {};
      // select the right Ad Id according to platform
      if (ionic.Platform.isAndroid()) {
        admobid = { // for Android
          banner: 'ca-app-pub-3721080012474962/4073028731',
          interstitial: 'ca-app-pub-3721080012474962/4073028731'
        };
        // } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        //     admobid = { // for iOS
        //         banner: 'ca-app-pub-2343423432432423/324324324324',
        //         interstitial: 'ca-app-pub-2343423432432423/324324324324'
        //     };
        // } else {
        //     admobid = { // for Windows Phone
        //         banner: 'ca-app-pub-2343423432432423/324324324324',
        //         interstitial: 'ca-app-pub-2343423432432423/324324324324'
        //     };
      }

      if (window.AdMob) AdMob.prepareInterstitial({
        adId: admobid.interstitial,
        isTesting: false,
      });
    });
  })

angular.module('app.controllers', []);
