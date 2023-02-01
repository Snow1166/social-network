let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Lex'},
                {id: 2, name: 'SuperMan'},
                {id: 3, name: 'BatMent'},
                {id: 4, name: 'Valera'},
                {id: 5, name: 'Captain'},
                {id: 6, name: 'SuperMent'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Holla'},
                {id: 3, message: 'Hallo'},
            ]
        },
        textMessage: '',
        textPost: '',
        profilePage: {
            posts: [
                {id: 1, post: 'Its, my first post', likesCount: 15},
                {id: 2, post: 'Н///Й такую работу', likesCount: 150},
                {id: 3, post: 'post', likesCount: 3},
            ]
        },
        navBarPage: {
            siteBar: [
                {
                    id: 1,
                    name: 'Valera',
                    ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDX6_s04FKoLtK7TAv3rvKT1N2XdJgxzzT9g&usqp=CAU'
                },
                {
                    id: 2,
                    name: 'Captain',
                    ava: 'https://images.squarespace-cdn.com/content/v1/5ce432b1f9d2be000134d8ae/32b6d7e7-d9d6-49ba-811c-598798fbfeef/CP77_CaptainAmerica_Healthy_Legal.png?format=1000w'
                },
                {
                    id: 3,
                    name: 'BatMent',
                    ava: 'https://3dwarehouse.sketchup.com/warehouse/v1.0/content/public/02f749cd-e236-4b94-9339-91b17aa80646'
                },
            ]
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    addPost() {
        this._state.profilePage.posts.push({
            id: this._state.profilePage.posts.length++,
            post: this._state.textPost,
            likesCount: 0
        })
        this._state.textPost = ''
        this._callSubscriber(this._state)
    },
    sendMessage() {
        this._state.dialogsPage.messages.push({
            id: this._state.dialogsPage.messages.length++,
            message: this._state.textMessage
        })
        this._state.textMessage = ''
        this._callSubscriber(this._state)
    },
    updateTextPost(textPost) {
        this._state.textPost = textPost
        this._callSubscriber(this._state)
    },
    updateTextMessage(textMessage) {
        debugger
        this._state.textMessage = textMessage
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
}
export default store