const INITIAL_STATE = {
    desertClicks: 0
}

export default function (state = INITIAL_STATE, action) {
      switch (action.type) {
        case 'DESERT':
            return {
                ...state, desertClicks: ++state.desertClicks
            };

        default:
            return state;
    }
}