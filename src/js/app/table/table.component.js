'use strict';

angular.module('table').component('table', {
  templateUrl: '/js/app/table/table.html',
  bindings: {
    items: '<', // Input data passed to the table
    onAction: '&', // Callback for actions on items
  },
  controller: function ($scope, $timeout) {
    this.$postLink = function () {
      // Ensure MDL components are upgraded after rendering
      $timeout(() => {
        componentHandler.upgradeDom();
      });
    };

    this.handleAction = function (action, item) {
      if (this.onAction) {
        this.onAction({ action, item });
      }
    };
  },
});
