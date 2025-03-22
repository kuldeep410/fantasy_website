/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!******************************************************!*\
  !*** ./platform/themes/gerow/assets/js/shortcode.js ***!
  \******************************************************/


$(document).ready(function () {
  var $shortcodeModal = $('.shortcode-admin-config');
  document.addEventListener('core-shortcode-config-loaded', function () {
    if ($shortcodeModal.find('.shortcode-field-select-style').length > 0) {
      var style = $shortcodeModal.find('.shortcode-field-select-style').val().slice(-1);
      changeStyleShortcode(style);
    }
  });
  $($shortcodeModal).on('change', '.shortcode-field-select-style', function (event) {
    var style = $(event.currentTarget).val().slice(-1);
    changeStyleShortcode(style);
  });
  function changeStyleShortcode(style) {
    $shortcodeModal.find('.shortcode-field-style-item').each(function (index, element) {
      var styles = String($(element).data('styles'));
      if (styles.includes(style)) {
        $(element).removeClass('d-none');
      } else {
        $(element).addClass('d-none');
      }
    });
  }
});
/******/ })()
;