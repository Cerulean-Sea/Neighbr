const initialState = [
  {
      "_id": "612953979cf9ad94b51d11b8",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      "title": "Hi-di-ho, neighbor!",
      "username": "First Poster",
      "userId": "firstPoster",
      "tags": [
          "happenings"
      ],
      "commentId": [
          {
              "_id": "612953af9cf9ad94b51d11ba",
              "text": "First Comment!",
              "username": "First Commenter",
              "userId": "firstCommenter",
              "postId": "612953979cf9ad94b51d11b8",
              "created": "2021-08-27T21:05:51.165Z",
              "updated": "2021-08-27T21:05:51.165Z",
              "__v": 0
          },
          {
              "_id": "612953b89cf9ad94b51d11bd",
              "text": "Second Comment!",
              "username": "Second Commenter",
              "userId": "secondCommenter",
              "postId": "612953979cf9ad94b51d11b8",
              "created": "2021-08-27T21:06:00.797Z",
              "updated": "2021-08-27T21:06:00.797Z",
              "__v": 0
          }
      ],
      "created": "2021-08-27T21:05:27.172Z",
      "updated": "2021-08-27T21:05:27.172Z",
      "__v": 0
  },
  {
      "_id": "612953eb9cf9ad94b51d11c0",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
      "title": "Howdy, neighbor!",
      "username": "Second Poster",
      "userId": "secondPoster",
      "tags": [
          "chit-chat", "swaps"
      ],
      "commentId": [
          {
              "_id": "612953f99cf9ad94b51d11c2",
              "text": "Third Comment!",
              "username": "Third Commenter",
              "userId": "thirdCommenter",
              "postId": "612953eb9cf9ad94b51d11c0",
              "created": "2021-08-27T21:07:05.284Z",
              "updated": "2021-08-27T21:07:05.284Z",
              "__v": 0
          },
          {
              "_id": "612954139cf9ad94b51d11c5",
              "text": "Fourth Comment!",
              "username": "Fourth Commenter",
              "userId": "fourthCommenter",
              "postId": "612953eb9cf9ad94b51d11c0",
              "created": "2021-08-27T21:07:31.909Z",
              "updated": "2021-08-27T21:07:31.909Z",
              "__v": 0
          }
      ],
      "created": "2021-08-27T21:06:51.562Z",
      "updated": "2021-08-27T21:06:51.562Z",
      "__v": 0
  },
  {
    "_id": "612953eb9cf9ad94b51d11c0",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    "title": "Hey Tim!",
    "username": "Third Poster",
    "userId": "ThirdPoster",
    "tags": [
        "safety"
    ],
    "commentId": [
        {
            "_id": "612953f99cf9ad94b51d11c2",
            "text": "Fifth Comment!",
            "username": "Fifth Commenter",
            "userId": "thirdCommenter",
            "postId": "612953eb9cf9ad94b51d11c0",
            "created": "2021-08-27T21:07:05.284Z",
            "updated": "2021-08-27T21:07:05.284Z",
            "__v": 0
        },
        {
            "_id": "612954139cf9ad94b51d11c5",
            "text": "Sixth Comment!",
            "username": "Sixth Commenter",
            "userId": "fourthCommenter",
            "postId": "612953eb9cf9ad94b51d11c0",
            "created": "2021-08-27T21:07:31.909Z",
            "updated": "2021-08-27T21:07:31.909Z",
            "__v": 0
        }
    ],
    "created": "2021-08-27T21:06:51.562Z",
    "updated": "2021-08-27T21:06:51.562Z",
    "__v": 0
  },
  {
    "_id": "612953eb9cf9ad94b51d11c0",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    "title": "Can I borrow some sugar?",
    "username": "Fourth Poster",
    "userId": "FourthPoster",
    "tags": [
        "swaps"
    ],
    "commentId": [
        {
            "_id": "612953f99cf9ad94b51d11c2",
            "text": "Seventh Comment!",
            "username": "Seventh Commenter",
            "userId": "thirdCommenter",
            "postId": "612953eb9cf9ad94b51d11c0",
            "created": "2021-08-27T21:07:05.284Z",
            "updated": "2021-08-27T21:07:05.284Z",
            "__v": 0
        },
        {
            "_id": "612954139cf9ad94b51d11c5",
            "text": "Eighth Comment!",
            "username": "Eighth Commenter",
            "userId": "fourthCommenter",
            "postId": "612953eb9cf9ad94b51d11c0",
            "created": "2021-08-27T21:07:31.909Z",
            "updated": "2021-08-27T21:07:31.909Z",
            "__v": 0
        }
    ],
    "created": "2021-08-27T21:06:51.562Z",
    "updated": "2021-08-27T21:06:51.562Z",
    "__v": 0
  },
  {
    "_id": "612953eb9cf9ad94b51d11c0",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    "title": "TURN THAT MUSIC DOWN!!",
    "username": "Fifth Poster",
    "userId": "FifthPoster",
    "tags": [
        "favors"
    ],
    "commentId": [
        {
            "_id": "612953f99cf9ad94b51d11c2",
            "text": "Ninth Comment!",
            "username": "Ninth Commenter",
            "userId": "thirdCommenter",
            "postId": "612953eb9cf9ad94b51d11c0",
            "created": "2021-08-27T21:07:05.284Z",
            "updated": "2021-08-27T21:07:05.284Z",
            "__v": 0
        },
        {
            "_id": "612954139cf9ad94b51d11c5",
            "text": "Tenth Comment!",
            "username": "Tenth Commenter",
            "userId": "fourthCommenter",
            "postId": "612953eb9cf9ad94b51d11c0",
            "created": "2021-08-27T21:07:31.909Z",
            "updated": "2021-08-27T21:07:31.909Z",
            "__v": 0
        }
    ],
    "created": "2021-08-27T21:06:51.562Z",
    "updated": "2021-08-27T21:06:51.562Z",
    "__v": 0
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};
