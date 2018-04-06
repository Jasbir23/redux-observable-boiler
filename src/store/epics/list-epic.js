import { ofType } from 'redux-observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
const fetchUserFulfilled = (payload, action) => ({
  type: 'FETCH_USER_FULFILLED',
  payload,
  action
});
const makeCall = action => ({
  type: 'MAKE_CALL',
  action: action
});

const fetchError = () => ({
  type: 'FETCHING_ERROR'
});

export default function loadDataEpic(action$) {
  // return action$.ofType('SEARCH_BY_NAME').mergeMap(action =>
  //   fetch(`https://api.github.com/search/users?q=${action.text}`)
  //     .then(response => response.json())
  //     .then(response => fetchUserFulfilled(response))
  //     .catch(() => console.log('error'))
  // );
  return action$
    .ofType('SEARCH_BY_NAME')
    .zip(action$.ofType('SEARCH_BUTTON_PRESS'))
    .concatMap(action =>
      fetch(`https://api.github.com/search/users?q=${action[0].text}`)
        .then(response => response.json())
        .then(response => fetchUserFulfilled(response, action))
        .catch(() => fetchError())
    );
}
