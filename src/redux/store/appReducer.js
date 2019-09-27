const initState = {
    titulo: ""
}

const appReducer = (state = initState, action) => {

    switch (action.type) {
        case 'CAMBIAR_TITULO_APP':
            return{
                titulo: action.titulo 
            }
    
        default:
            break;
    }
    return state;
}

export default appReducer;