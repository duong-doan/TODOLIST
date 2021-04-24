import * as TypeActions from '../constants/TypeActions';

const initState = {
  dataCreate: []
}

const createReducer = (state = initState, action) => {
  switch (action.type) {
    case TypeActions.SUBMIT_FORM_CREATE:
      const getTodoLocal = JSON.parse(localStorage.getItem('listTodo'))

      const newData = [...getTodoLocal]
      newData.push({ ...action.value, id: getTodoLocal.length })
      localStorage.setItem('listTodo', JSON.stringify(newData))

      return {
        ...state,
        dataCreate: newData
      }



    // case SUBMIT_CREATE_TASK:
    //   axios.post(`https://todolist-data-2f4e2-default-rtdb.firebaseio.com/todoList.json`,
    //     {
    //       id: state.DATA.length,
    //       title: action.value.title,
    //       status: 'new',
    //       creator: action.value.creator,
    //       description: action.value.description
    //     }
    //   )
    //     .then(res => {
    //       console.log(res);
    //     })
    //   return {
    //     ...state,
    //     target: ''
    //   }

    // case CLICK_TASK:
    //   return {
    //     ...state,
    //     target: 'edit',
    //     idTask: action.value.id,
    //     title: action.value.title,
    //     creator: action.value.creator,
    //     description: action.value.description,
    //     status: action.value.status
    //   }

    // case SUBMIT_EDIT_TASK:
    //   const newData = [...state.DATA]
    //   const index = newData.findIndex(x => x.id === state.idTask);
    //   newData[index].title = action.value.title;
    //   newData[index].creator = action.value.creator;
    //   newData[index].description = action.value.desc;
    //   newData[index].status = action.value.status;
    //   return {
    //     ...state,
    //     DATA: newData,
    //     target: '',
    //     resetForm: false,
    //   }

    // case CLICK_NEW_SIDEBAR:
    //   return {
    //     ...state,
    //     arrNew: [...state.DATA].filter(x => x.status === 'new'),
    //   }

    // case CLICK_DOING_SIDEBAR:
    //   return {
    //     ...state,
    //     arrDoing: [...state.DATA].filter(x => x.status === 'doing'),
    //   }

    // case CLICK_DONE_SIDEBAR:
    //   return {
    //     ...state,
    //     arrDone: [...state.DATA].filter(x => x.status === 'done'),
    //   }

    // case CLICK_ALLTASK_SIDEBAR:
    //   return {
    //     ...state,
    //   }

    // case RESET_FORM_EDIT:
    //   return {
    //     ...state,
    //     resetForm: true,
    //     target: 'edit',
    //     title: '',
    //     creator: '',
    //     description: '',
    //     status: ''
    //   }

    // case DELETE_FORM_EDIT:
    //   const newDataDelete = [...state.DATA]
    //   const indexTask = newDataDelete.findIndex(x => x.id === state.idTask)
    //   newDataDelete.splice(indexTask, 1)
    //   return {
    //     ...state,
    //     DATA: newDataDelete,
    //     target: ''
    //   }

    // case SUBMIT_FORM_SEARCH:
    //   const newDataFormSearch = [...state.DATA]
    //   const itemTaskSearch = newDataFormSearch.filter(val => {
    //     if (val.title.toLowerCase().includes(action.value.value.toLowerCase()) || val.creator.toLowerCase().includes(action.value.value.toLowerCase())) {
    //       console.log(val);
    //       return val
    //     }
    //   })
    //   return {
    //     ...state,
    //     arrSearchForm: itemTaskSearch,
    //     isSearch: true
    //   }

    default:
      return state
  }
}

export default createReducer