import React from 'react'
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import FriendList from './FriendList';

class FriendPage extends React.Component {
    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        return (
            <div>
                <FriendList friends={this.props.friends} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    }
}

export default connect(mapStateToProps, { getFriends })(FriendPage);