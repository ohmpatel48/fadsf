'use strict';

angular.module('sidebar').component('sidebar', {
  templateUrl: '/js/app/sidebar/sidebar.html',
  bindings: {
    onAction: '&'
  },
  controller: function () {
    this.connect = function (action, item) {
      if (this.onAction) {
        this.onAction({ action, item });
      }
    };
  }
})