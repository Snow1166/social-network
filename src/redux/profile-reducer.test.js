import profileReducer, {addPost, deletePost} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, post: 'Its, my first post', likesCount: 15},
        {id: 2, post: 'Н///Й такую работу', likesCount: 150},
        {id: 3, post: 'post', likesCount: 3}
    ],
}

test('Length of post should be incremented', () => {
    let action = addPost('test post message')
    let newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(4)
});

test('message of new post should be correct', () => {
    let action = addPost('test post message')
    let newState = profileReducer(state,action)
    expect(newState.posts[3].post).toBe('test post message')
});

test('Length of post should be delete incremented', () => {
    let action = deletePost(1)
    let newState = profileReducer(state,action)
    console.log(newState.posts)
    expect(newState.posts.length).toBe(--state.posts.length)
});
