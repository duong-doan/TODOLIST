import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import * as TypeActions from "../../../constants/TypeActions";

const CreateTask = ({ onSubmitFormCreate, data }, props) => {
  const time = ` ${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`;
  const date = `${new Date().getDay()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
  const createAt = `${time} ${date}`

  const [value, setValue] = useState({
    title: '',
    status: 'new',
    creator: '',
    description: '',
  })

  let history = useHistory()

  const hanldeSubmit = (e) => {
    e.preventDefault();
    onSubmitFormCreate(value, data)
    history.push('/all')
  }


  return (
    <form onSubmit={hanldeSubmit}>
      <div className="form__item">
        <label className="label1" > Title: </label >
        <input className="input1" type="text" placeholder="name of title" onChange={e => setValue({ ...value, title: e.target.value })} />
      </div>

      <div className="form__item">
        <label className="label2">Creator: </label>
        <input className="input2" type="text" placeholder="name of creator" onChange={e => setValue({ ...value, creator: e.target.value })} />
      </div>

      <div className="form__item">
        <label className="label3">Created at: </label>
        <input className="input3" type="text" value={createAt} disabled />
      </div>

      <div className="form__item">
        <label className="label4">Description: </label>
        <input className="input4" type="text" placeholder="Description detail" onChange={e => setValue({ ...value, description: e.target.value })} />
      </div>
      <button type="submit">Save</button>
    </form >
  )
}

const mapStateToProps = state => {
  return {
    data: state.getDataReducer.data,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onSubmitFormCreate: (value, data) => dispatch({ type: TypeActions.SUBMIT_FORM_CREATE, value, data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);