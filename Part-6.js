// Fetch a list of users from "https://dummyjson.com/users"
// For each user, fetch individual user data from "https://dummyjson.com/users/userid"
//For each user, fetch posts associated with the user from "https://dummyjson.com/posts/user/userid"
// For each post, fetch comments associated with the post from "https://dummyjson.com/posts/postId/comments"

// input
// {
//     id: 1,
//     firstName: 'Terry',
//     lastName: 'Medhurst',
//     maidenName: 'Smitham',
//     ....
//  }

async function fetchApi() {
  const userResponse = await fetch("https://dummyjson.com/users");
  const userData = await userResponse.json();
  const user = userData.users;

  const userPromise = user.map(async (user) => {
    const userByIdResponse = await fetch(
      `https://dummyjson.com/users/${user.id}`
    );
    const userByIdData = await userByIdResponse.json();

    const postResponse = await fetch(
      `https://dummyjson.com/posts/user/${user.id}`
    );
    const postData = await postResponse.json();
    const posts = postData.posts;

    const postPromise = posts.map(async (post) => {
      const commentResponse = await fetch(
        `https://dummyjson.com/posts/${post.id}/comments`
      );
      const commentData = await commentResponse.json();
      post.comments = commentData.comments;
      return post;
    });

    const userWithPost = {
      ...userByIdData,
      posts: await Promise.all(postPromise),
    };

    return userWithPost;
  });

  const result = await Promise.all(userPromise);
  console.dir(result[0], { depth: null });
}

fetchApi();

//ouput
// {
//     id: 1,
//     firstName: 'Terry',
//     lastName: 'Medhurst',
//     maidenName: 'Smitham',
//     ....
//     posts: [
//       {
//         id: 10,
//         title: 'They rushed out the door.',
//         body: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
//         userId: 1,
//         tags: [Array],
//         reactions: 4,
//         comments: [{
//         "id": 131,
//          "body": "You are my safest place.",
//          "postId": 1,
//          "user": {
//           "id": 7,
//           "username": "dpettegre6"
//       }
//     }]
//       },
//        .....
//     ]
//   }
