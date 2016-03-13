const MERGE = 'redux-example/slides/MERGE';
const MERGE_SUCCESS = 'redux-example/slides/MERGE_SUCCESS';
const MERGE_FAIL = 'redux-example/slides/MERGE_FAIL';

const initialState = {
  merging: false,
  merged: false,
  error: {},
};

export default function reducer(state = initialState, action = {}) {
  console.log(action.error);
  switch (action.type) {
    case MERGE:
      return {
        ...state,
        merging: true,
        merged: false,
        error: {}
      };
    case MERGE_SUCCESS:
      return {
        ...state,
        merging: false,
        merged: true,
        error: {}
      };
    case MERGE_FAIL:
      return {
        ...state,
        merging: false,
        merged: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function merge(data) {
  return {
    types: [MERGE, MERGE_SUCCESS, MERGE_FAIL],
    promise: (client) => client.post('slides/merge', {'data': data})
  };
}

