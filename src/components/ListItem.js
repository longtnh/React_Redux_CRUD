import React, {useState} from 'react';
import { List, Divider } from 'antd';
import {useSelector, useDispatch} from 'react-redux'
import { deleteUser, setUserUpdate } from '../redux/action/user.actions';
import UpdateForm from './UpdateForm';

const ListItem = (props) => {

    const [modelEdit, setModelEdit] = useState(false);
    const user = useSelector(state => state.user)

    const dispatch = useDispatch();

    const onEdit = (item) => {
        const editedUser = {
            id : item.id,
            name : item.name,
            username : item.username,
        };
        dispatch(setUserUpdate(editedUser));
        setModelEdit(!modelEdit);
    }

    const toggle = (modelEdit) => setModelEdit(!modelEdit);

    const hello = () => alert('hello');

    return (
        <div>
            <Divider orientation="center" style={{ fontSize: 20 }}>List User (Name and Username)</Divider>
            <List
                size= "small"
                bordered
                dataSource={user}
                renderItem={item => (
                    <List.Item actions={[<a onClick={() => onEdit(item)}>Edit</a>, 
                                        <a onClick={() => dispatch(deleteUser(item.id))}>Delete</a>]}>
                        {/* <p>{item.name}</p>
                        <p>{item.username}</p> */}
                        <List.Item.Meta
                            
                            title={item.name}
                            description={item.username}
                            //title và description là mặc cmn định của antd, ĐKM 
                        />
                    </List.Item>
                )}

            />

            <UpdateForm isOpen={modelEdit} toggle={toggle}/>
        </div>
    );
}

export default ListItem;
