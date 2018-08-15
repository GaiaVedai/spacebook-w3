var SpacebookApp = function () {
  var posts = [
    {
      text: "Hello world", id: 1, comments: [
        { text: "Man, this is a comment!" },
        { text: "Man, this is a comment!" },
        { text: "Man, this is a comment!" }
      ]
    },
    {
      text: "Hello world", id: 2, comments: [
        { text: "Man, this is a comment!" },
        { text: "Man, this is a comment!" },
        { text: "Man, this is a comment!" }
      ]
    },
    {
      text: "Hello world", id: 3, comments: [
        { text: "Man, this is a comment!" },
        { text: "Man, this is a comment!" },
        { text: "Man, this is a comment!" }
      ]
    }
  ];

  // the current id to assign to a post
  var currentId = 4;
  var $posts = $('.posts');

  var _findPostById = function (id) {
    for (var i = 0; i < posts.length; i += 1) {
      if (posts[i].id === id) {
        return posts[i];
      }
    }
  }

  var createPost = function (text) {
    var post = {
      text: text,
      id: currentId,
      comments: []
    }

    currentId += 1;

    posts.push(post);
  }

  var renderPosts = function () {
    $posts.empty();

    for (var i = 0; i < posts.length; i += 1) {
      var post = posts[i];

      var commentsContainer = '<div class="comments-container">' +
        '<input type="text" class="comment-name">' +
        '<button class="btn btn-primary add-comment">Post Comment</button> </div>';

      $posts.append('<div class="post" data-id=' + post.id + '>'
        + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' + post.text +
        commentsContainer + '</div>');
    }

  }

  var removePost = function (currentPost) {
    var $clickedPost = $(currentPost).closest('.post');
    var id = $clickedPost.data().id;

    var post = _findPostById(id);

    posts.splice(posts.indexOf(post), 1);
  };
  let toggleComments = function (currentPost) {
    let $clickPost = $(currentPost).closest('.post');
    $clickPost.find('.comments-container').toggleClass('show');
  }
  let createComment = function (postID, text) {
    let comment = {
      text: text
    };
    let post = _findPostById(postID);
    let commentPosition = post.comments.push(comment)
    return commentPositions 
  }
  var newComment = function (comment) {
    let commentHtml = ('<div class="comment">' + comment + '</div>');
    return commentHtml;

  }
  const renderComments = function() {
    $posts.empty();

  }
  return {
    createPost: createPost,
    renderPosts: renderPosts,
    removePost: removePost,
    createComment: createComment,
    // addComment: addComment,
    // TODO: Implement
    // createComment: createComment,

    // TODO: Implement
    // renderComments: renderComments,

    // TODO: Implement
    // removeComment: removeComment,
    toggleComments: toggleComments
  }
}

var app = SpacebookApp();

// immediately invoke the render method
app.renderPosts();

// Events
$('.add-post').on('click', function () {
  var text = $('#post-name').val();

  app.createPost(text);
  app.renderPosts();
});

$('.posts').on('click', '.remove', function () {
  app.removePost(this);

  app.renderPosts();
});
$('.posts').on('click', '.show-comments', function () {
  app.toggleComments(this);
});

$('.posts').on('click', '.add-comment', function () {
  let postID = $(this).closest('.post').data().id;
  let text = $(this).prev().val();
  app.createComment(postID, text);
});

