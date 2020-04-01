import React from 'react';


function TableRow(props) {
    function inputChange(e, key) {
        props.update(props.id, { [key]: e.target.value })
    }

    function removeRow() {
        props.update(props.id);
    }

    return (
        <tr className="table-row form-group">
            <td>
                <select className="form-control" value={props.item} onChange={(e) => inputChange.call(this, e, 'item')}>
                    <option value="item1">Item 1</option>
                    <option value="item2">Item 2</option>
                    <option value="item3">Item 3</option>
                    <option value="item4">Item 4</option>
                </select>
            </td>
            <td>
                <select className="form-control" value={props.by} onChange={(e) => inputChange.call(this, e, 'by')}>
                    <option value="by1">By 1</option>
                    <option value="by2">By 2</option>
                    <option value="by3">By 3</option>
                    <option value="by4">By 4</option>
                </select>
            </td>
            <td>
                <input className="form-control" type="number" value={props.harga} onChange={(e) => inputChange.call(this, e, 'harga')} />
            </td>
            <td>
                <input className="form-control" type="number" value={props.qty} onChange={(e) => inputChange.call(this, e, 'qty')} />
            </td>
            <td>
                <input className="form-control" type="number" value={props.subTotal} onChange={(e) => inputChange.call(this, e, 'subTotal')} />
            </td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={removeRow}><i className="fas fa-minus-circle"></i></button>
            </td>
        </tr>
    );
}

export default React.memo(TableRow);