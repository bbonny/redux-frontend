const MERGE = 'redux-example/slides/MERGE';
const MERGE_SUCCESS = 'redux-example/slides/MERGE_SUCCESS';
const MERGE_FAIL = 'redux-example/slides/MERGE_FAIL';

const initialState = {
  mergeInProgress: false,
  readyToDownload: false,
  error: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case MERGE:
      return {
        ...state,
        mergeInProgress: true,
        readyToDownload: false,
        error: {}
      };
    case MERGE_SUCCESS:
      return {
        ...state,
        mergeInProgress: false,
        readyToDownload: true,
        error: {}
      };
    case MERGE_FAIL:
      return {
        ...state,
        mergeInProgress: false,
        readyToDownload: false,
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

