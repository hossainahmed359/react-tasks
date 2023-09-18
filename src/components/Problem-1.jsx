import React, { useEffect, useState } from 'react';
import TaskForm from './problemOne/TaskForm';
import { getLocalStorageData } from '../utils/storage';
import { filterActiveTabData } from '../utils/sortAndFilter';

const taskDataInLocalStorage = getLocalStorageData('tasks');

const Problem1 = () => {

    const [tasksData, setTasksData] = useState(taskDataInLocalStorage || []);

    const [show, setShow] = useState('all');

    const handleClick = (val) => {
        setShow(val);
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <TaskForm setTasksData={setTasksData} />
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterActiveTabData({ activeTab: show, data: tasksData })?.map((el, index) => (
                                <tr key={`${index + 1}`}>
                                    <td>{el.name}</td>
                                    <td>{el.status}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;