
const goods = (state = [], action) => {
    switch(action.type) {
        case 'ADD_GOODS' :
            console.log('add goods work')
            console.log(state)
            return [
                ...state,
                {
                    articul: action.articul,
                    title: action.title,
                    image: action.image
                }
            ]
            default:
                return state
                // если пришлю action которого нет
    }
}

export default goods