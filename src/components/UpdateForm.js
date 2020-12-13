import React, {useState, useEffect} from 'react';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux'
import { updateUser } from '../redux/action/user.actions';
import 'bootstrap/dist/css/bootstrap.css';

const UpdateForm = (props) => {

    const userUpdate = useSelector(state => state.input)
    const dispatch = useDispatch();

    const [name, setName] = useState();
    const [userName, setUserName] = useState();

	const toggle = () => props.toggle(props.isOpen);

    const onUpdate = () => {
        dispatch(updateUser(
            {
                id : userUpdate.id,
                name : name,
                username : userName
            }
        ))
		props.toggle(props.isOpen)
	}

    return (
        <>
        <Modal isOpen={props.isOpen}>
			<ModalHeader>
				<div>
				<h3>Edit</h3>
				</div>
			</ModalHeader>
			<ModalBody>
				<div className="form-group">
				<label>ID</label>
				<input
					className="form-control"
					readOnly
					type="text"
                    value={userUpdate.id}
                    
				/>
				<br />
	
				<label>Name</label>
				<input
					className="form-control"
					type="text"
                    onChange={(e) => setName( e.target.value)}
                    defaultValue={userUpdate.name}

				/>
				<br />
	
				<label>UserName</label>
				<input
					className="form-control"
					type="text"
                    onChange={(e) => setUserName( e.target.value)}
                    defaultValue={userUpdate.username}


				/>
				<br />
				</div>
			</ModalBody>
			<ModalFooter>
				<button className="btn btn-primary" onClick={onUpdate}>
				Update
				</button>
				<button className="btn btn-danger" onClick={toggle}>
				Cancel
				</button>
			</ModalFooter>
		</Modal>

        </>
        
    );
}

export default UpdateForm;
