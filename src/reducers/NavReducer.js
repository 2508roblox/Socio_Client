const initialState = {
    isActive: 'home'
}

export default function NavReducer(state = initialState, action) {
    switch (action.type) {
        case 'MARKETPLACE': {
            return { isActive: 'marketplace' };
        }
        case 'CHAT': {
            return { isActive: 'chat' };
        }
        case 'PEOPLE': {
            return { isActive: 'people' };
        }
        case 'HOME': {
            return { isActive: 'home' };
        }
        default:
            return state
    }
}