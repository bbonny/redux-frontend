const MERGE = 'redux-example/slides/MERGE';
const MERGE_SUCCESS = 'redux-example/slides/MERGE_SUCCESS';
const MERGE_FAIL = 'redux-example/slides/MERGE_FAIL';
const LOAD = 'redux-example/slides/LOAD';
const LOAD_SUCCESS = 'redux-example/slides/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/slides/LOAD_FAIL';

const initialState = {
  bricks: [],
  mergeInProgress: false,
  readyToDownload: false,
  loadingSlides: false,
  readyToShow: false,
  loading: false,
  loadError: {},
  mergeError: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case MERGE:
      return {
        ...state,
        mergeInProgress: true,
        readyToDownload: false,
        mergeError: {}
      };
    case MERGE_SUCCESS:
      return {
        ...state,
        mergeInProgress: false,
        readyToDownload: true,
        mergeError: {}
      };
    case MERGE_FAIL:
      return {
        ...state,
        mergeInProgress: false,
        readyToDownload: false,
        mergeError: action.error
      };
    case LOAD:
      return {
        ...state,
        loading: true,
        loadError: {}
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        bricks: action.result,
        loading: false,
        readyToShow: true,
        loadError: {}
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loadError: action.error
      };
    default:
      return state;
  }
}

export function merge(data) {
  return {
    types: [MERGE, MERGE_SUCCESS, MERGE_FAIL],
    promise: (client) => client.post('slides/merge', 'apoffice', {'data': data})
  };
}

export function getBricks() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('bricks', 'api')
  };
}

