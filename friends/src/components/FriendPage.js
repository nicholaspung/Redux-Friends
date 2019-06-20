import React from 'react'
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import FriendList from './FriendList';

class FriendPage extends React.Component {
    componentDidMount() {
        this.props.getFriends(this.props.friends)
    }

    render() {
        return (
            <div>
                {this.props.fetchingFriends && <p>Fetching data...</p>}
                <FriendList friends={this.props.friends} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        fetchingFriends: state.fetchingFriends
    }
}

export default connect(mapStateToProps, { getFriends })(FriendPage);