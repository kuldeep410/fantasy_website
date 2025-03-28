/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!************************************************************************!*\
  !*** ./platform/plugins/cookie-consent/resources/js/cookie-consent.js ***!
  \************************************************************************/


$(function () {
  window.botbleCookieConsent = function () {
    var COOKIE_VALUE = 1;
    var COOKIE_NAME = $('div[data-site-cookie-name]').data('site-cookie-name');
    var COOKIE_DOMAIN = $('div[data-site-cookie-domain]').data('site-cookie-domain');
    var COOKIE_LIFETIME = $('div[data-site-cookie-lifetime]').data('site-cookie-lifetime');
    var SESSION_SECURE = $('div[data-site-session-secure]').data('site-session-secure');
    var $cookieDialog = $('.js-cookie-consent');
    $cookieDialog.addClass('cookie-consent--visible');
    function consentWithCookies() {
      setCookie(COOKIE_NAME, COOKIE_VALUE, COOKIE_LIFETIME);
      hideCookieDialog();
    }
    function cookieExists(name) {
      return document.cookie.split('; ').indexOf(name + '=' + COOKIE_VALUE) !== -1;
    }
    function hideCookieDialog() {
      $cookieDialog.hide();
    }
    function setCookie(name, value, expirationInDays) {
      var date = new Date();
      date.setTime(date.getTime() + expirationInDays * 24 * 60 * 60 * 1000);
      document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';domain=' + COOKIE_DOMAIN + ';path=/' + SESSION_SECURE;
    }
    if (cookieExists(COOKIE_NAME)) {
      hideCookieDialog();
    }
    $(document).on('click', '.js-cookie-consent-agree', function () {
      consentWithCookies();
    });
    return {
      consentWithCookies: consentWithCookies,
      hideCookieDialog: hideCookieDialog
    };
  }();
});
/******/ })()
;