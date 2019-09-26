const initState = {
    className_menu_defecto: "pcoded-navbar menu-light navbar-default brand-default drp-icon-style1 menu-item-icon-style1 active-default title-default",
    className_menu_añadido: "",
    className_menu_icon: "mobile-menu"
}

const menuReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ACCIONAR_MENU_NAVBAR':
            console.log(action)
            return {
                ...state,
                className_menu_añadido: action.accion,
                className_menu_icon: "mobile-menu"
            }

        case 'ACCIONAR_MENU_MENU':
            return {
                ...state,
                className_menu_añadido: action.accion
            }

        case 'ACCIONAR_MENU_APP':
            return {
                ...state,
                className_menu_añadido: action.accion,
                className_menu_icon: "mobile-menu on"
            }

        default:
                return state;
    }
}

export default menuReducer;