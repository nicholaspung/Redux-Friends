import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
            .then(res => {
                if (res) this.props.history.push('/friends')
            })
    }

    onInputChange = e => {
        this.setState({ 
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input required placeholder="username" type="text" autoComplete="username" name="username" value={this.state.credentials.username} onChange={this.onInputChange}/>
                    <input required placeholder="password" type="password" autoComplete="current-password" name="password"value={this.state.credentials.password} onChange={this.onInputChange}/>
                    <button>Login</button>
                </form>
                {this.props.error && <p>{this.props.error.data.error}</p>}
            </div>
        );
    }
}

const mapStateToProps = ({ error }) => {
    return {
        error
    }
}

export default connect(mapStateToProps, { login })(Login);