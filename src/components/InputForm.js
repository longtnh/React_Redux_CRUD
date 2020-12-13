import React, {useState} from 'react';
import { Form, Input, Button } from 'antd'
import 'antd/dist/antd.css';
import { addUser, updateUser } from '../redux/action/user.actions';
import { v1 as uuid} from 'uuid';
import {useDispatch, useSelector} from 'react-redux'

const layout = {
    // labelCol: {
    //     span: 4,
    // },
    wrapperCol: {
        span: 16,
    },
};

const buttonItemLayout = {
    wrapperCol: {
        span: 14,
        offset: 4
    }
};


const InputForm = () => {
    const [name, setName] = useState();
    const [userName, setUserName] = useState();

    const dispatch = useDispatch();

    const onAddNew = () => {
        dispatch(addUser(
            {
                id: uuid(),
                name: name,
                username: userName,
            }
        ))
        setName('');
        setUserName('');
    }

    return (
        <div>
            <h1>Add New</h1>
            <Form 
                name="basic"
                layout="vertical"
            >
                <Form.Item
                    label="Name"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                    },
                    ]}
                >
                    <Input onChange={(e) => setName(e.target.value)} />
                </Form.Item>
                <Form.Item
                    label="Username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input onChange={(e) => setUserName(e.target.value)} />
                </Form.Item>

                <Form.Item>
                    <Button 
                        type="primary"
                        htmlType="submit" 
                        onClick={onAddNew}
                        
                    >
                    {/* {userUpdate.id === -1 ? "ADD" : "UPDATE"} */}
                    ADD
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default InputForm;

