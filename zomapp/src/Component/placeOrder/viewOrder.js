import {useState,useEffect} from 'react';
import axios from 'axios';

const postUrl = process.env.REACT_APP_POST_URL
const ViewOrder = () => {

    const [orders,setOrders] = useState([])
    useEffect(() => {
        axios.get(`${postUrl}/orders`).then((res) => {setOrders(res.data)})
    },[])

    const renderTable = () => {
        if(orders){
            return orders.map((item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.restName}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>Rs. {item.costs}</td>
                    </tr>
                )
            })
        }

    }

    return(
        <>
        <div className="container">
            <center><h3>Orders</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>RestName</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable()}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ViewOrder