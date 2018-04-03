import { ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
const fetchUserFulfilled = payload => ({
  type: 'FETCH_USER_FULFILLED',
  payload
});

export default function loadDataEpic(action$) {
  return action$.ofType('SEARCH_BY_NAME').mergeMap(action =>
    fetch(`https://api.github.com/search/users?q=${action.text}`)
      .then(response => response.json())
      .then(response => fetchUserFulfilled(response))
      .catch(() => console.log('error'))
  );
}
