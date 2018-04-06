const initialListState = {
  listArray: [],
  error: undefined
};

export default (listReducer = (state = initialListState, action) => {
  switch (action.type) {
    case 'FETCH_USER_FULFILLED':
      console.log('Done fetch', action);
      return {
        ...initialListState,
        listArray: action.payload.items ? action.payload.items : []
      };
    case 'MAKE_CALL':
      console.log('MAKE CALL', action);
      return state;
    case 'FETCHING_ERROR':
      return { ...initialListState, error: 'BACKEND ERROR' };
    default:
      return state;
  }
});
