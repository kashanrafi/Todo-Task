import React from 'react'
import { connect } from 'react-redux';
import store from '../../Store/Store';
import './ListHistory.css';
function ListHistory(props) {
    return <>

<ul className="list1">
            {
                props.listData.map((data) => {
                    return <>

                        <li className="listStyle" >
                            {data.list}
                            {/* <span><i className='<i class="far fa-edit"></i>'></i></span> */}
                            <i className="far fa-trash-alt  delbtn" onClick={() => {
                                if (window.confirm("are you sure")) {
                                    store.dispatch({
                                        type: "DEL-LIST",
                                        payload: data.id
                                    })
                                }
                            }} ></i>
                        </li>
                    </>
                })
            }
        </ul>


    </>
}
function listConnection(store) {
    return store;
}
export default connect(listConnection)(ListHistory);

