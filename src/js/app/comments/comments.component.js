"use strict";

angular.module("comment").component("comment", {
  templateUrl: '/js/app/comments/comments.html',
  bindings: {
    data: '<',
  },
  controller: function () {

    this.analytics = {
      image: 'assets/images/sample-post.jpg', // Path to the post image
      views: 1200,
      reactions: 350,
      comments: [
        {
          author: 'John Doe',
          text: 'Great post!',
          replies: [
            { author: 'Jane Smith', text: 'I agree!' },
            { author: 'Tom Brown', text: 'Well said!' },
          ],
        },
        {
          author: 'Alice Johnson',
          text: 'Very informative, thanks!',
          replies: [],
        },
      ],
    };

    this.replyToComment = function (comment) {
      if (comment.replyText && comment.replyText.trim() !== '') {
        comment.replies.push({
          author: 'You',
          text: comment.replyText.trim(),
        });
        comment.replyText = ''; // Clear the input field
      }
    };

  }

});