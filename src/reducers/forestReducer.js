const INITIAL_STATE = {
    forestClicks: 0
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'FOREST':
            return {
                ...state, forestClicks: ++state.forestClicks
            };

        default:
            return state;
    }
}