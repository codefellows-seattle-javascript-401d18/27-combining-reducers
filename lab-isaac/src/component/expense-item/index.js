import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
// import {expenseCreate} from '../../action/expense-actions';

class ExpenseItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseEdit: false,
        };
        this.toggleUpdate = this.toggleUpdate.bind(this);
    }

    toggleUpdate(e) {
        this.setState({
            expenseEdit: !this.state.expenseEdit,
        });
    }

    render() {
        return(
            <div className="expense-item">
                <h3 key={this.props.expense.id}>{this.props.expense.name} at ${this.props.expense.price}</h3>
            </div>
        );
    }
}

export default ExpenseItem;