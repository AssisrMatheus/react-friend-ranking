import React from "react";
import { IFriend } from "../../../Entities/IFriend";

interface IFriendsProps {
    friends: Array<IFriend>
}

class Friends extends React.Component<IFriendsProps> {
    constructor(props: IFriendsProps) {
        super(props);
    }

    public render() {
        return (
            <div className="has-background-dark padding">
                <div className="container">
                    <div className="columns">
                        {this.props.friends.map(this.getFriendCard)}
                    </div>
                </div>
            </div>
        );
    }

    private getFriendCard(friend: IFriend, index: number): React.ReactNode {
        return (
            <div className="column is-full" key={index}>
                <div className="notification">
                    {friend.name}
                </div>            
            </div>        
        );
    }
}

export default Friends;