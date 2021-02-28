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
  DATA: [
    {
      "title": "task 1",
      "creator": "hai",
      "status": "doing",
      "description": "this is a task",
      "id": 1
    },
    {
      "title": "task 2",
      "creator": "hai",
      "status": "doing",
      "description": "this is a task",
      "id": 2
    },
    {
      "title": "task 3",
      "creator": "hai",
      "status": "doing",
      "description": "this is a task",
      "id": 3
    },
    {
      "title": "task 4",
      "creator": "tan",
      "status": "doing",
      "description": "this is a task",
      "id": 4
    },
    {
      "title": "task 5",
      "creator": "danh",
      "status": "doing",
      "description": "this is a task",
      "id": 5
    },
    {
      "title": "task 6",
      "creator": "doan",
      "status": "doing",
      "description": "this is a task",
      "id": 6
    },
    {
      "title": "task 7",
      "creator": "doan",
      "status": "doing",
      "description": "this is a task",
      "id": 7
    },
    {
      "title": "task 8",
      "creator": "doan",
      "status": "doing",
      "description": "this is a task",
      "id": 8
    },
    {
      "title": "task 9",
      "creator": "doan",
      "status": "doing",
      "description": "this is a task",
      "id": 9
    },
    {
      "title": "task 10",
      "creator": "doan",
      "status": "doing",
      "description": "this is a task",
      "id": 10
    },
    {
      "title": "task 11",
      "creator": "doan",
      "status": "doing",
      "description": "this is a task",
      "id": 11
    },
    {
      "title": "task 12",
      "creator": "doan",
      "status": "doing",
      "description": "this is a task",
      "id": 12
    },
    {
      "title": "task 13",
      "creator": "doan",
      "status": "doing",
      "description": "this is a task",
      "id": 13
    },
    {
      "status": "new",
      "title": "akjsdhkajshdjkashdk",
      "creator": "hkasdhaksdhkasdjhk",
      "description": "haksdhkasdhkasjhd",
      "id": 14
    },
    {
      "status": "new",
      "title": "ádasd",
      "creator": "ádasd",
      "description": "ádasd",
      "id": 15
    },
    {
      "status": "new",
      "title": "ád",
      "creator": "ád",
      "description": "ádasd",
      "id": 16
    },
    {
      "status": "new",
      "title": "hai lol",
      "creator": "tan lol",
      "description": "danh lol",
      "id": 17
    },
    {
      "status": "new",
      "title": "hasfdhagsfdhasgfd",
      "creator": "hgasfdhagsfdhgasdf",
      "description": "ahgsdfahgsdfhagsfd",
      "id": 18
    },
    {
      "title": "asdaskk",
      "creator": "asdasd",
      "description": "asdasdasd",
      "status": "new",
      "id": 19
    },
    {
      "status": "new",
      "title": "asdasd",
      "creator": "zxcasdzxc",
      "description": "asdasd",
      "id": 20
    },
    {
      "status": "new",
      "title": "123",
      "creator": "asd123",
      "description": "asd123",
      "id": 21
    }
  ],
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
        DATA: action.data
      }

    case CLICK_CREATE:
      return {
        ...state,
        target: 'create'
      };

    case SUBMIT_CREATE_TASK:
      console.log(state.DATA)
      return {
        ...state,
        DATA: state.DATA.concat({
          id: state.DATA.length + 1,
          status: 'new',
          title: action.value.title,
          creator: action.value.creator,
          description: action.value.desc
        }),
        target: 'new'
      }

    case CLICK_TASK:
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
      console.log(state.DATA);
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