/******/ (() => { // webpackBootstrap
/*!***************************************************!*\
  !*** ./platform/themes/gerow/assets/js/script.js ***!
  \***************************************************/
$(function () {
  'use strict';

  window.Theme = window.Theme || {};
  window.Theme.isRtl = function () {
    return document.body.getAttribute('dir') === 'rtl';
  };
  $(document).on('submit', '.newsletter-form', function (event) {
    event.preventDefault();
    event.stopPropagation();
    var _self = $(event.target);
    var _btn = _self.find('button[type="submit"]');
    $.ajax({
      type: 'POST',
      cache: false,
      url: _self.closest('form').prop('action'),
      data: new FormData(_self.closest('form')[0]),
      contentType: false,
      processData: false,
      beforeSend: function beforeSend() {
        _btn.addClass('button-loading');
        _btn.attr('disable');
      },
      success: function success(res) {
        if (!res.error) {
          _self.closest('form').find('input[type=email]').val('');
          Theme.showSuccess(res.message);
        } else {
          Theme.handleError(res.message);
        }
      },
      error: function error(res) {
        Theme.handleError(res);
      },
      complete: function complete() {
        if (typeof refreshRecaptcha !== 'undefined') {
          refreshRecaptcha();
        }
        _btn.removeClass('button-loading');
        _btn.removeAttr('disable');
      }
    });
  });
  $(document).on('submit', '.cons-contact-form', function (event) {
    var _this = this;
    event.preventDefault();
    event.stopPropagation();
    var $button = $(this).find('button[type="submit"]');
    $.ajax({
      type: 'POST',
      cache: false,
      url: $(this).closest('form').prop('action'),
      data: new FormData($(this).closest('form')[0]),
      contentType: false,
      processData: false,
      beforeSend: function beforeSend() {
        $button.addClass('button-loading');
        $button.prop('disabled', true);
      },
      success: function success(_ref) {
        var error = _ref.error,
          message = _ref.message;
        if (!error) {
          $(_this).closest('form').find('input[type=text]').val('');
          $(_this).closest('form').find('input[type=email]').val('');
          $(_this).closest('form').find('textarea').val('');
          Theme.showSuccess(message);
        } else {
          Theme.showError(message);
        }
      },
      error: function error(_error) {
        Theme.handleError(_error);
      },
      complete: function complete() {
        if (typeof refreshRecaptcha !== 'undefined') {
          refreshRecaptcha();
        }
        $button.removeClass('button-loading');
        $button.prop('disabled', false);
      }
    });
  });
  $(document).on('submit', '#request-quote-form', function (event) {
    event.preventDefault();
    var $form = $(this);
    var $button = $(this).find('button[type="submit"]');
    $.ajax({
      url: $form.prop('action'),
      method: 'POST',
      data: $form.serialize(),
      beforeSend: function beforeSend() {
        $button.addClass('button-loading');
      },
      success: function success(_ref2) {
        var error = _ref2.error,
          message = _ref2.message;
        if (error) {
          Theme.showError(message);
          return;
        }
        Theme.showSuccess(message);
        $form.find('input[type="text"], input[type="number"], input[type="email"], select, textarea').val('');
      },
      error: function error(_error2) {
        Theme.handleError(_error2);
      },
      complete: function complete() {
        $button.removeClass('button-loading');
      }
    });
  });
});
/******/ })()
;