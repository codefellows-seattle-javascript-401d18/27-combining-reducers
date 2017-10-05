import React from 'react';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.expense ? props.expense.name : '',
            price: props.expense ? props.expense.price : 0,
            categoryId: props.expense ? props.expense.categoryId : null,
            id: props.expense ? props.expense.id : null,
            timestamp: props.expense ? props.expense.timestamp : null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentWillReceiveProps() {
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onComplete(Object.assign({}, this.state))
    }

    render() {
        console.log('EXPENSE FORM STATE', this.state)
        return (
            <form className="expense-form" onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="expense name"
                    value={this.state.name}
                    onChange={this.handleChange} />
                <input 
                    type="number"
                    step="0.01"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange} />
                <button type="submit">{this.props.buttonText}</button>
            </form>
        );
    }
}

export default ExpenseForm;