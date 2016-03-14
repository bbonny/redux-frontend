const UPLOAD = 'redux-example/filse/UPLOAD';
const UPLOAD_SUCCESS = 'redux-example/files/UPLOAD_SUCCESS';
const UPLOAD_FAIL = 'redux-example/files/UPLOAD_FAIL';

const initialState = {
  uploading: false,
  uploaded: false,
  error: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPLOAD:
      return {
        ...state,
        uploading: true,
        uploaded: false,
        error: {}
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        uploading: false,
        uploaded: true,
        error: {}
      };
    case UPLOAD_FAIL:
      return {
        ...state,
        uploading: false,
        uploaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function upload(file) {
  return {
    types: [UPLOAD, UPLOAD_SUCCESS, UPLOAD_FAIL],
    promise: (client) => client.put('files/demo/' + file.name, {'file': file})
  };
}

