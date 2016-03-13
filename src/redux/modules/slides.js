const MERGE = 'redux-example/slides/MERGE';
const MERGE_SUCCESS = 'redux-example/slides/MERGE_SUCCESS';
const MERGE_FAIL = 'redux-example/slides/MERGE_FAIL';

const initialState = {
  merged: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case MERGE:
      return {
        ...state,
        merging: true
      };
    case MERGE_SUCCESS:
      return {
        ...state,
        merging: false,
        merged: true,
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

export function isMerged(globalState) {
  return globalState.slides && globalState.slides.merged;
}

export function merge(data) {
  return {
    types: [MERGE, MERGE_SUCCESS, MERGE_FAIL],
    promise: (client) => client.post('slides/merge', {'data': data})
  };
}

