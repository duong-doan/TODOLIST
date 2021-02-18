// default reducer
// Note: You can remove this reducer and create your own reducer

import {
  CLICK_CREATE,
  SUBMIT_CREATE_TASK,
  CLICK_TASK,
  SUBMIT_EDIT_TASK,
  CLICK_NEW_SIDEBAR
} from '../actions/createTask';

const initialState = {
  DATA: [
    {
      id: 0,
      title: 'task 1',
      creator: 'doan',
      status: 'done',
      description: 'this is a task,this is a task,',
    },
    {
      id: 1,
      title: 'task 1',
      creator: 'doan',
      status: 'done',
      description: 'this is a task,this is a task,',
    },
    {
      id: 2,
      title: 'task 1',
      creator: 'doan',
      status: 'done',
      description: 'this is a task,this is a task,',
    },
    {
      id: 3,
      title: 'task 1',
      creator: 'doan',
      status: 'done',
      description: 'this is a task,this is a task,',
    }
  ],
  target: '',
  idTask: '',
  arrNewTask: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICK_CREATE:
      return {
        ...state,
        target: 'create'
      };

    case SUBMIT_CREATE_TASK:
      return {
        DATA: [
          ...state.DATA.concat({
            id: state.DATA.length,
            title: action.value.title,
            creator: action.value.creator,
            status: 'new',
            description: action.value.desc
          })
        ],
        target: ''
      }

    case CLICK_TASK:
      return {
        ...state,
        target: 'edit',
        idTask: action.id
      }

    case SUBMIT_EDIT_TASK:
      const newData = [...state.DATA]
      const index = newData.findIndex(x => x.id === state.idTask);
      newData[index].title = action.value.title;
      newData[index].creator = action.value.creator;
      newData[index].description = action.value.desc;
      newData[index].status = 'new'
      console.log(state);
      return {
        ...state,
        DATA: newData,
        target: ''
      }

    case CLICK_NEW_SIDEBAR:
      const newDataTask = [...state.DATA]
      const taskNew = newDataTask.filter(x => x.status === 'new')
      console.log(taskNew);
      return {
        ...state,
        target: 'new',
        arrNewTask: taskNew,
      }


    default:
      return {
        ...state
      };
  }
}