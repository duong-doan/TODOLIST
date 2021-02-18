import React, { useState } from 'react';
import { connect } from 'react-redux'

const CreateTask = ({ onSubmitForm, target }) => {
  const [value, setValue] = useState({
    title: '',
    creator: '',
    desc: '',
  })

  const hanldeSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(value)
  }

  return (
    target === 'create' ?
      <form onSubmit={hanldeSubmit}>
        <div className="new-task__item">
          <label className="label1" > Title: </label >
          <input className="input1" type="text" placeholder="name of title" onChange={e => setValue({ ...value, title: e.target.value })} />
        </div>

        <div className="new-task__item">
          <label className="label2">Creator: </label>
          <input className="input2" type="text" placeholder="name of creator" onChange={e => setValue({ ...value, creator: e.target.value })} />
        </div>

        <div className="new-task__item">
          <label className="label3">Created at: </label>
          <input className="input3" type="text" disabled />
        </div>

        <div className="new-task__item">
          <label className="label4">Description: </label>
          <input className="input4" type="text" placeholder="Description detail" onChange={e => setValue({ ...value, desc: e.target.value })} />
        </div>

        <button type="submit">Save</button>

      </form> : null
  )
}

const mapStateToProps = state => {
  return {
    target: state.create.target
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onSubmitForm: (value) => { dispatch({ type: 'SUBMIT_CREATE_TASK', value: value }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);