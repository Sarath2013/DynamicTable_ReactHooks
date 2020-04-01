import React, { useState, useCallback } from 'react';
import TableRow from './TableRow';
let headerData = ['Item', 'By', 'Harga', 'Qty', 'Sub Total', 'Act'];

function TableComponent() {
    const [tableData, setTableData] = useState([{ id: 1, item: 'item1', by: 'by1', harga: '', qty: '', subTotal: '' }]);

    function addRow() {
        let newData = [...tableData, { id: (tableData[tableData.length - 1].id) + 1, item: 'item1', by: 'by1', harga: '', qty: '', subTotal: '' }];
        setTableData(newData);
    }

    function submitData() {
        console.log(tableData);
    }

    const updateTable = useCallback((id, newValue) => {
        let newData = [];
        if (newValue)
            newData = tableData.map((data) => (id === data.id) ? Object.assign({}, data, newValue) : data);
        else
            newData = tableData.filter((data) => (id !== data.id));
        setTableData(newData);
    }, [tableData]);

    return (
        <table className="dynamic-table table table-bordered table-striped">
            <thead>
                <tr key="header-tr">
                    {headerData.map((value, index) => {
                        return <th key={index}><div>{value}</div></th>
                    })}
                </tr>
            </thead>
            <tbody>
                {tableData.map((data) => {
                    return <TableRow key={data.id} id={data.id} item={data.item} by={data.by} harga={data.harga} qty={data.qty} subTotal={data.subTotal} update={updateTable} />
                })}
                <tr className="tr-new" key="tr-new">
                    <td colSpan="5"></td>
                    <td><button className="btn btn-success" onClick={addRow}><i className="fas fa-plus"></i>New</button></td>
                </tr>
                <tr className="tr-submit" key="tr-submit">
                    <td colSpan="5"></td>
                    <td><button className="btn btn-success" onClick={submitData}>Submit</button></td>
                </tr>
            </tbody>
        </table>
    );
}

export default TableComponent;
