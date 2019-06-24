import React from 'react';
import { connect } from 'react-redux';
import { updateFriend } from '../actions';

const Friend = ({ friend, updatingFriend, updateFriend }) => {
    return (
        <div>
            <h4>{friend.name}</h4>
            <h4>{friend.age}</h4>
            <h4>{friend.email}</h4>
            <button>update me</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        updatingFriend: state.updatingFriend
    }
}

export default connect(mapStateToProps, { updateFriend })(Friend);