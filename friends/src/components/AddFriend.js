import React from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';

class AddFriend extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }

    addFriend = e => {
        e.preventDefault()
        this.props.addFriend(this.state.friend)
        this.props.history.push('/friends')
    }

    onInputChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.addFriend}>
                <input required type="text" onChange={this.onInputChange} name="name" value={this.state.friend.name} placeholder="name"/>
                <input required type="number" onChange={this.onInputChange} name="age" value={this.state.friend.age} placeholder="age"/>
                <input required type="email" onChange={this.onInputChange} name="email" value={this.state.friend.email} placeholder="email"/>
                <button>add new friend!</button>
            </form>
        )
    }
}

export default connect(null, { addFriend })(AddFriend);