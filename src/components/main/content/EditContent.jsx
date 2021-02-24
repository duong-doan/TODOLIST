import React, { useState } from 'react';
import { connect } from 'react-redux';

const EditContent = ({ target, onSubmitFormEdit, onResetForm, onDeleteForm, resetForm, title, status, description, creator }) => {
  const time = ` ${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`;
  const date = `${new Date().getDay()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
  const createAt = `${time} ${date}`

  const [valueEdit, setValueEdit] = useState({
    title: title,
    creator: creator,
    createAt: createAt,
    status: status,
    desc: description
  })

  const handleSubmitFormEdit = (e) => {
    e.preventDefault()
    onSubmitFormEdit(valueEdit)
  }
  const hanldeResetForm = (e) => {
    e.preventDefault()
    onResetForm(setValueEdit({ title: '', creator: '', status: '', desc: '' }))
  }

  return (
    target === 'edit' ?
      <form onSubmit={handleSubmitFormEdit}>
        <div className="form__item">
          <label className="label1" > Title: </label >
          <input className="input1"
            type="text" value={valueEdit.title}
            placeholder="name of title"
            onChange={
              e => setValueEdit({ ...valueEdit, title: e.target.value, })
            } />
        </div>

        <div className="form__item">
          <label className="label2">Creator: </label>
          <input className="input2" type="text" value={valueEdit.creator} placeholder="name of creator" onChange={e => setValueEdit({ ...valueEdit, creator: e.target.value })} />
        </div>

        <div className="form__item">
          <label className="label3">Created at: </label>
          <input className="input3" type="text" value={valueEdit.createAt} disabled />
        </div>

        <div className="form__item">
          <label className="label4">Description: </label>
          <input className="input4" type="text" value={valueEdit.desc} placeholder="Description detail" onChange={e => setValueEdit({ ...valueEdit, desc: e.target.value })} />
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
          <button type="button" onClick={onDeleteForm} >Delete</button>
        </div>

      </form> : null
  )
}

const mapStateToProps = state => {
  return {
    target: state.create.target,
    resetForm: state.create.resetForm,
    title: state.create.title,
    creator: state.create.creator,
    description: state.create.description,
    status: state.create.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitFormEdit: (valueEdit) => { dispatch({ type: 'SUBMIT_EDIT', value: valueEdit }) },
    onResetForm: () => { dispatch({ type: 'RESET_FORM_EDIT' }) },
    onDeleteForm: () => { dispatch({ type: 'DELETE_FORM_EDIT' }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContent);