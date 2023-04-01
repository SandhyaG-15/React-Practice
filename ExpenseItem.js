import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js'
function ExpenseItem(props) {
    return (
        <div id="ExpenseItem">
            <table>
                <tr>
                    <td>
                        <ExpenseDate Date={props.Date} />
                    </td>
                <td>
                        <div className="ItemDescription">
                            <h3>{props.Title}</h3>
                    </div>
                </td>
                <td>
                        <div className="Amount">
                            <h4>{props.Amount}</h4>
                    </div>
                </td>
            </tr>
        </table>
        </div>
        )
}
export default ExpenseItem;
