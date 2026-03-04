(function () {
  'use strict';

  angular
    .module('pvoilApp', [])
    .controller('LoginController', LoginController);

  function LoginController() {
    var vm = this;

    vm.credentials = {
      username: '',
      password: ''
    };
    vm.remember = false;
    vm.showPassword = false;

    vm.togglePassword = function togglePassword() {
      vm.showPassword = !vm.showPassword;
    };

    vm.submit = function submit() {
      // Hook up to real authentication when available.
      // For now, this is a no-op to keep the page static.
    };
  }
})();

