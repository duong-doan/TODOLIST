import {
  CLICK_CREATE,
  SUBMIT_CREATE_TASK,
  CLICK_TASK,
  SUBMIT_EDIT_TASK,
  CLICK_NEW_SIDEBAR,
  CLICK_DOING_SIDEBAR,
  CLICK_DONE_SIDEBAR,
  RESET_FORM_EDIT,
  DELETE_FORM_EDIT,
  SUBMIT_FORM_SEARCH,
  CLICK_ALLTASK_SIDEBAR,
  PUSH_DATA,
} from '../actions/createTask';

const initialState = {
  DATA: [],
  target: '',
  resetForm: false,
  idTask: '',
  title: '',
  creator: '',
  status: '',
  description: '',
  isSearch: false,
  searchBox: '',
  arrSearchForm: [],
  arrNew: [],
  arrDoing: [],
  arrDone: []
}


export default (state = initialState, action) => {
  switch (action.type) {

    case PUSH_DATA:
      return {
        ...state,
        DATA: action.data.data
      }

    case CLICK_CREATE:
      return {
        ...state,
        target: 'create'
      };

    case SUBMIT_CREATE_TASK:
      return {
        DATA: [
          ...state.DATA.concat({
            id: state.DATA.length + 1,
            title: action.value.title,
            creator: action.value.creator,
            status: 'new',
            description: action.value.desc
          })
        ],
        target: 'new'
      }

    case CLICK_TASK:
      console.log(action.value);
      return {
        ...state,
        target: 'edit',
        idTask: action.value.id,
        title: action.value.title,
        creator: action.value.creator,
        description: action.value.description,
        status: action.value.status
      }

    case SUBMIT_EDIT_TASK:
      const newData = [...state.DATA]
      const index = newData.findIndex(x => x.id === state.idTask);
      newData[index].title = action.value.title;
      newData[index].creator = action.value.creator;
      newData[index].description = action.value.desc;
      newData[index].status = action.value.status;
      return {
        ...state,
        DATA: newData,
        target: '',
        resetForm: false,
      }

    case CLICK_NEW_SIDEBAR:
      return {
        ...state,
        arrNew: [...state.DATA].filter(x => x.status === 'new'),
        target: 'new'
      }

    case CLICK_DOING_SIDEBAR:
      console.log(state.idTask);

      return {
        ...state,
        arrDoing: [...state.DATA].filter(x => x.status === 'doing'),
      }

    case CLICK_DONE_SIDEBAR:
      return {
        ...state,
        arrDone: [...state.DATA].filter(x => x.status === 'done'),
      }

    case CLICK_ALLTASK_SIDEBAR:
      console.log(state.idTask);

      return {
        ...state,
      }

    case RESET_FORM_EDIT:
      return {
        ...state,
        resetForm: true,
        target: 'edit',
        title: '',
        creator: '',
        description: '',
        status: ''
      }

    case DELETE_FORM_EDIT:
      const newDataDelete = [...state.DATA]
      const indexTask = newDataDelete.findIndex(x => x.id === state.idTask)
      newDataDelete.splice(indexTask, 1)
      console.log(newDataDelete);
      return {
        ...state,
        DATA: newDataDelete,
        target: ''
      }

    case SUBMIT_FORM_SEARCH:
      const newDataFormSearch = [...state.DATA]
      const itemTaskSearch = newDataFormSearch.filter(val => {
        if (val.title.toLowerCase().includes(action.value.value.toLowerCase()) || val.creator.toLowerCase().includes(action.value.value.toLowerCase())) {
          console.log(val);
          return val
        }
      })
      return {
        ...state,
        arrSearchForm: itemTaskSearch,
        isSearch: true
      }

    default:
      return {
        ...state
      };
  }
}