const initState = {
    basic: [
        {id: '1', systemName: 'help 1efefefefefefefefefefefefefefef', content: 'frfrfrfrfrfrfrrf'},
        {id: '2', systemName: 'help 2efefefefefefefefefefefefefefef', content: 'frfrfrfrfrfrfrrf'},
        {id: '3', systemName: 'help 3efefefefefefefefefefefefefefef', content: 'frfrfrfrfrfrfrrf'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_SIMPLE_CARD':
            console.log('created simple card', action.project);
            return state;
        case 'CREATE_SIMPLE_CARD_ERROR':
            console.log('created simple card error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;