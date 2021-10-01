export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token:"BQBwgspToQbjFp4Y-B1XobFPGSJoiwyIhgJGpWm7hhhDKlO83-QvugEyGv7EKN9AR5uKb3LefvgJFE26MZogcSvBQJbTDjHB23Xiihdr85ALUeswhfQ_JjcXVEOFo10-sqZ-y75d2SJhPqgpQzNFqyWIz240i_Z1seEvNflpZoe4IeqV",
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
};

export default reducer;
