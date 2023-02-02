let initialState = {
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
const sidebarReducer = (state = initialState, action) => {
    return state
}

export default sidebarReducer;
