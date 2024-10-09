import React, { useEffect, useState } from "react";
import "./Orders.css";
import axios from "axios";
function Orders(){

    const [allOrders,setAllOrders]=useState([]);
    let isOrder=false;
    useEffect(()=>{
        axios.get("http://localhost:3002/getOrders").then((res)=>{
            setAllOrders(res.data);
        })
        if(allOrders.length>0){
            isOrder=true;
        }
    },[]);


    return(<div className="orders">
           {allOrders.length>0?
        <div className="orders-table">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Mode</th>
                </tr>

                {allOrders.map((order,id)=>{
                    return(<tr>
                        <td>{order.name}</td>
                        <td>{order.qty}</td>
                        <td>{order.price}</td>
                        <td>{order.mode}</td>
                    </tr>)
                })}
            </table>
        </div>:
        
       <div className="no-orders">
        <p>You havn't placed any order today</p>
        <a className="btn" href="#">Get started</a>:<p>hii</p>
       </div>
           }
    </div>)
}

export default Orders;