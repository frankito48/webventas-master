import React,{useState,useEffect}from "react";
import { useDispatch,useSelector } from "react-redux";
import { getAllClientes } from "../../redux/action";
import "./listadoCliente.css";


const ClienteList=()=>{
    const dispatch=useDispatch();
    const allClientes=useSelector((state)=>state.allClientes)


    useEffect(()=>{
        dispatch(getAllClientes());
    },[dispatch]);



    return(
        <div className="cliente-list-container">
            <h2 className="h2-listado-c">Listado de clientes</h2>
            <table className="cliente-table">
                <thead>
                    <tr>
                        <th className="cliente-table-header">id</th>
                        <th className="cliente-table-header">nombre</th>
                        <th className="cliente-table-header">apellido</th>
                        <th className="cliente-table-header">correo</th>
                        <th className="cliente-table-header">direcion</th>
                    </tr>
                </thead>
                <tbody>
                    {allClientes.map((cliente) => (
                        <tr key={cliente.id_cliente} className="cliente-table-row">
                            <td className="cliente-table-data">{cliente.id_cliente}</td>
                            <td className="cliente-table-data">{cliente.nombre}</td>
                            <td className="cliente-table-data">{cliente.apellido}</td>
                            <td className="cliente-table-data">{cliente.correo}</td>
                            <td className="cliente-table-data">{cliente.direccion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}



export  default ClienteList