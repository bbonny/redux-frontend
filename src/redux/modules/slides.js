const MERGE = 'redux-example/slides/MERGE';
const MERGE_SUCCESS = 'redux-example/slides/MERGE_SUCCESS';
const MERGE_FAIL = 'redux-example/slides/MERGE_FAIL';

const initialState = {
  loaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case MERGE:
      return {
        ...state,
        loading: true
      };
    case MERGE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.result
      };
    case MERGE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.slides && globalState.slides.loaded;
}

export function merge(inputFiles) {
  return {
    types: [MERGE, MERGE_SUCCESS, MERGE_FAIL],
    promise: (client) => client.post('http://apoffice.azurewebsites.net/api/slides/merge/temp/output.pptx', {
      data: {
        inputFiles: inputFiles
      }
    })
  };
}

