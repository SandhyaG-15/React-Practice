import React from 'react';
import './ExpenseDate.css'
function ExpenseDate(props) {
    return (
        <div id="ExpenseDate">
            <div id="items">
                <h5>{props.Date.toLocaleString("en-US", { year: "numeric" })}
                </h5>
                <h5>{props.Date.toLocaleString("en-US", { month: "long" })}
                </h5>
                <h2>{props.Date.toLocaleDateString("en-US", { day: "numeric" })}
                </h2>
            </div>
        </div>
    );
}
export default ExpenseDate;
