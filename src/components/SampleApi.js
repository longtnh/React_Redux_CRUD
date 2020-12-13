import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../redux/thunk/api.thunk";

const SampleApi = () => {
    const dispatch = useDispatch();
    const users = JSON.stringify(useSelector(state => state.sampleApi.users));
    useEffect(() => dispatch(getUserList()), [dispatch]);

    console.log(typeof users)

    const obj = JSON.parse(users);
    console.log(obj)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                    </tr>
                </thead>
                <tbody>
                {obj && obj.map((item, i) => {
                    return (
                        <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        </tr>
                        );
                })}

                </tbody>
            </table>

        </div>
    );
  };
  
  export default SampleApi;