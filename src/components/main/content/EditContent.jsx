import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as TypeActions from '../../../constants/TypeActions';

const EditContent = (props) => {
  const time = ` ${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`;
  const date = `${new Date().getDay()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
  const createAt = `${time} ${date}`;

  const getTodoLocal = JSON.parse(localStorage.getItem('listTodo'))

  const [defaultValue, setDefaultValue] = useState({
    title: '',
    creator: '',
    status: '',
    desc: ''
  })

  const [valueEdit, setValueEdit] = useState({
    title: defaultValue.title,
    creator: defaultValue.creator,
    createAt: createAt,
    status: defaultValue.status,
    desc: defaultValue.description
  })

  const handleSubmitFormEdit = (e) => {
    e.preventDefault()
    props.onSubmitFormEdit(valueEdit, props.match.params.id)
    props.history.push('/all')
  }
  const hanldeResetForm = (e) => {
    e.preventDefault()
    setDefaultValue({ title: '', creator: '', status: '', desc: '' })
  }


  const handleDeleteForm = () => {
    const newListTodo = [...getTodoLocal];
    const indexTodo = newListTodo.findIndex(todo => todo.id === parseInt(props.match.params.id))
    newListTodo.splice(indexTodo, 1)
    localStorage.setItem('listTodo', JSON.stringify(newListTodo))
    props.history.push('/all')
  }


  useEffect(() => {
    getTodoLocal.filter(item => {
      if (item.id === parseInt(props.match.params.id)) {
        setDefaultValue({
          title: item.title,
          creator: item.creator,
          status: item.status,
          desc: item.description
        })
      }
    })
  }, [])

  return (
    <form onSubmit={handleSubmitFormEdit}>
      <div className="form__item">
        <label className="label1" > Title: </label >
        <input className="input1"
          type="text" value={valueEdit.title ? valueEdit.title : defaultValue.title}
          placeholder="name of title"
          onChange={
            e => setValueEdit({ ...valueEdit, title: e.target.value, })
          } />
      </div>

      <div className="form__item">
        <label className="label2">Creator: </label>
        <input className="input2" type="text" value={valueEdit.creator ? valueEdit.creator : defaultValue.creator} placeholder="name of creator" onChange={e => setValueEdit({ ...valueEdit, creator: e.target.value })} />
      </div>

      <div className="form__item">
        <label className="label3">Created at: </label>
        <input className="input3" type="text" value={valueEdit.createAt} disabled />
      </div>

      <div className="form__item">
        <label className="label4">Description: </label>
        <input className="input4" type="text" value={valueEdit.desc ? valueEdit.desc : defaultValue.desc} placeholder="Description detail" onChange={e => setValueEdit({ ...valueEdit, desc: e.target.value })} />
      </div>

      <div className="form__item">
        <div className="form__item-radio">
          <label for="new">New</label>
          <input type="radio" name="status-task" id="new" value="new" onChange={e => setValueEdit({ ...valueEdit, status: e.target.value })} />
        </div>

        <div className="form__item-radio">
          <label for="doing">Doing</label>
          <input type="radio" name="status-task" id="doing" value="doing" onChange={e => setValueEdit({ ...valueEdit, status: e.target.value })} />
        </div>

        <div className="form__item-radio">
          <label for="done">Done</label>
          <input type="radio" name="status-task" id="done" value="done" onChange={e => setValueEdit({ ...valueEdit, status: e.target.value })} />
        </div>
      </div>

      <div className="form__item-button">
        <button type="submit">Save</button>
        <button type="button" onClick={hanldeResetForm}>Reset</button>
        <button type="button" onClick={handleDeleteForm} >Delete</button>
      </div>
    </form>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitFormEdit: (value, id) => dispatch({ type: TypeActions.SUBMIT_FORM_EDIT, value, id }),
  }
}

export default connect(null, mapDispatchToProps)(EditContent);