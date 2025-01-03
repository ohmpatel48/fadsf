'use strict';

angular.module('dashboard').component('dashboard', {
  templateUrl: '/js/app/dashboard/dashboard.html',
  controller: function ($scope) {
    this.items = [
      {
        serialNo: 1,
        image: 'assets/images/earth.png',
        content: 'This is the content for the first row.',
        time: '2025-01-02 10:00 AM',
      },
      {
        serialNo: 2,
        image: 'assets/images/Almalogo.png',
        content: 'This is the content for the second row.',
        time: '2025-01-02 11:30 AM',
      },
      {
        serialNo: 3,
        image: 'assets/images/image3.jpg',
        content: 'This is the content for the third row.',
        time: '2025-01-02 01:15 PM',
      },
    ];

    this.handleTableAction = function (action, item) {
      if (action === 'edit') {
        alert(`Editing item: ${item.serialNo}`);
      } else if (action === 'analyze') {
        var dialog = document.querySelector('dialog');
        this.selectedItem = item;
        dialog.showModal();
      } else if (action === 'delete') {
        alert(`Deleting item: ${item.serialNo}`);
      }
    };
    $scope.closeDialog = function closeDialog() {
      var dialog = document.querySelector('dialog');
      $scope.selectedItem = null;
      dialog.close();
    }
  },
});
