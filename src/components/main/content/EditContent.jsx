import React, { useState } from 'react';
import { connect } from 'react-redux';
import ListContent from './ListContent';

const EditContent = ({ target, onSubmitFormEdit }) => {
  const [valueEdit, setValueEdit] = useState({
    title: '',
    creator: '',
    createAt: '',
    desc: ''
  })

  const handleSubmitFormEdit = (e) => {
    e.preventDefault()
    onSubmitFormEdit(valueEdit)
  }

  return (
    target === 'edit' ?
      <form onSubmit={handleSubmitFormEdit}>
        <div className="new-task__item">
          <label className="label1" > Title: </label >
          <input className="input1" type="text" value={valueEdit.title} placeholder="name of title" onChange={e => setValueEdit({ ...valueEdit, title: e.target.value })} />
        </div>

        <div className="new-task__item">
          <label className="label2">Creator: </label>
          <input className="input2" type="text" value={valueEdit.creator} placeholder="name of creator" onChange={e => setValueEdit({ ...valueEdit, creator: e.target.value })} />
        </div>

        <div className="new-task__item">
          <label className="label3">Created at: </label>
          <input className="input3" type="text" disabled />
        </div>

        <div className="new-task__item">
          <label className="label4">Description: </label>
          <input className="input4" type="text" value={valueEdit.desc} placeholder="Description detail" onChange={e => setValueEdit({ ...valueEdit, desc: e.target.value })} />
        </div>

        <button type="submit">Save</button>

      </form> : <ListContent />
  )
}

const mapStateToProps = state => {
  return {
    target: state.create.target
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitFormEdit: (valueEdit) => { dispatch({ type: 'SUBMIT_EDIT', value: valueEdit }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContent);