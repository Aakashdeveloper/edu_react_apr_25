import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const base_url = import.meta.env.VITE_API_URL

const UserList = () => {

    const [users,setUsers] = useState();
    const navigate = useNavigate();

    const renderTable = () => {
        if(users){
            return users.map((item) => {
                return(
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                    </tr>
                )
            })
        }
    }

    useEffect(() => {
        axios.get(`${base_url}/users`).then((res) => {setUsers(res.data)})
    })


    if(sessionStorage.getItem('ltk') === null){
        navigate('/')
    }
    if(sessionStorage.getItem('ltk') !== null  && sessionStorage.getItem('rtk').toLowerCase()  !== "admin"){
        navigate('/profile?message=You are not an Admin')
    }else{
        return(
            <>
                <hr/>
                <center>
                   <h3>Users</h3>
                </center>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Phone</td>
                            <td>Email</td>
                            <td>Role</td>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable()}
                    </tbody>
                </table>
            </>
        )
    }

   
}
export default UserList;