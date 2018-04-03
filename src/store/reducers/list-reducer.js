const initialListState = {
  listArray: []
};

export default (listReducer = (state = initialListState, action) => {
  switch (action.type) {
    case 'FETCH_USER_FULFILLED':
      return { ...initialListState, listArray: action.payload.items };
    default:
      return state;
  }
});
