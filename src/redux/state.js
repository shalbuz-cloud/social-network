const state = {
    profile: {
        posts: [
            {id: 1, message: "Hey, why nobody love me?"},
            {id: 2, message: "It's our new program! Hey!"},
            {id: 3, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, omnis."},
            {id: 4, message: "Lorem ipsum dolor sit amet, consectetur."},
        ],
        newPostText: "",
    },
    messenger: {
        dialogs: [
            {id: 1, name: "Eleonora"},
            {id: 2, name: "Mark"},
            {id: 3, name: "John"},
            {id: 4, name: "Elliot"},
            {id: 5, name: "Ann"},
            {id: 6, name: "Steven"},
        ],
        messages: [
            {
                id: 1,
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sit."
            },
            {
                id: 2,
                message: "Lorem ipsum dolor."
            },
            {
                id: 3,
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus, consequatur corporis " +
                    "debitis dolor dolorem dolorum fugit iure labore, nostrum obcaecati optio perferendis quam quasi, " +
                    "qui quis sint. Iste, quaerat."
            },
        ]
    },
}

// Функция - заглушка для подписчика (она будет заменена на rerenderEntireTree)
let rerenderEntireTree = () => {
    console.log('State changed, but rerenderEntireTree is not set (subscribed yet)')
}

export const addPost = () => {
    const postText = state.profile.newPostText
    if (postText.trim().length === 0) {
        return
    }
    const newPost = {
        id: 5,
        message: postText,
    }
    state.profile.posts.push(newPost)
    state.profile.newPostText = ''
    rerenderEntireTree()
}

export const updateNewPostText = (text) => {
    state.profile.newPostText = text
    rerenderEntireTree()
}

// Функция подписки, которую вызывает main.tsx
export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;