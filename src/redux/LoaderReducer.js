const init = {
    ShowLoader: false,
    openCart: false
};
const LoaderReducer  = (state = init ,action) => {
    if (action.type == 'true') {
        return {
            ...state,
            ShowLoader: true
        };
    }
    if (action.type == 'false') {
        return {
            ...state,
            ShowLoader: false,
        };
    }
    if(action.type == 'showcart')
      {
        return {
            ...state,
            openCart: true,
        };

    }
    if(action.type == 'hidecart')
    {
        return {
            ...state,
            openCart: false,
        };

    }

    return state;
}

export default LoaderReducer;
