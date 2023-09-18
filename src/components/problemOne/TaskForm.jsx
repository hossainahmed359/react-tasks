import React, { useState } from 'react'
import { getLocalStorageData, setLocalStorageData } from '../../utils/storage'

const TaskForm = ({setTasksData}) => {

  const [formValues, setFormValues] = useState({
    name: '',
    status: '',
  })

  const handleNameChange = (e) => {
    setFormValues({
      ...formValues,
      name: e.target.value,
    })
  }

  const handleStatusChange = (e) => {
    setFormValues({
      ...formValues,
      status: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const prevData = getLocalStorageData('tasks');
    let newData = [];
    if(prevData?.length > 0) {
      newData = [...prevData, formValues]
    } else {
      newData = [formValues]
    }
    setLocalStorageData('tasks', newData);
    setTasksData(newData);
    setFormValues({
      name: '',
      status: '',
    })

  }

  return (
    <div className="col-6 ">
      <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
        <div className="col-auto">
          <input value={formValues.name} onChange={handleNameChange} type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="col-auto">
          <input value={formValues.status} onChange={handleStatusChange} type="text" className="form-control" placeholder="Status" />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default TaskForm
