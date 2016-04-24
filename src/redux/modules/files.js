const UPLOAD = 'redux-example/filse/UPLOAD';
const UPLOAD_SUCCESS = 'redux-example/files/UPLOAD_SUCCESS';
const UPLOAD_FAIL = 'redux-example/files/UPLOAD_FAIL';
const LOAD_LIST = 'redux-example/filse/LOAD_LIST';
const LOAD_LIST_SUCCESS = 'redux-example/files/LOAD_LIST_SUCCESS';
const LOAD_LIST_FAIL = 'redux-example/files/LOAD_LIST_FAIL';

const initialState = {
  uploading: false,
  uploaded: false,
  uploadError: {},
  listLoading: false,
  listLoaded: false,
  listLoadError: {},
  pathName: '',
  documentsList: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPLOAD:
      return {
        ...state,
        uploading: true,
        uploaded: false,
        uploadError: {}
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        uploading: false,
        uploaded: true,
        uploadError: {}
      };
    case UPLOAD_FAIL:
      return {
        ...state,
        uploading: false,
        uploaded: false,
        uploadError: action.error
      };
    case LOAD_LIST:
      return {
        ...state,
        listLoading: true,
        listLoaded: false,
        listLoadError: {},
      };
    case LOAD_LIST_SUCCESS:
      return {
        ...state,
        listLoading: false,
        listLoaded: true,
        listLoadError: {},
        pathName: action.data.pathName,
        documentsList: action.result,
      };
    case LOAD_LIST_FAIL:
      return {
        ...state,
        listLoading: false,
        listLoaded: false,
        listLoadError: action.error
      };
    default:
      return state;
  }
}

export function upload(path, file) {
  return {
    types: [UPLOAD, UPLOAD_SUCCESS, UPLOAD_FAIL],
    promise: (client) => client.put('files/' + path + file.name, 'apoffice', {'file': file})
  };
}

export function getList(pathName) {
  return {
    types: [LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_FAIL],
    data: {pathName: pathName},
    promise: (client) => client.get('files/list/' + pathName, 'apoffice')
  };
}

