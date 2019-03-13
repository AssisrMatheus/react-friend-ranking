import React from "react";
import { IFriend } from "../../../Entities/IFriend";
import "./Friends.scss";

interface IFriendsProps {
    className: string,
    friends: Array<IFriend>
}

class Friends extends React.Component<IFriendsProps> {
    constructor(props: IFriendsProps) {
        super(props);
    }

    public render() {
        return (
            <div className={"has-background-dark padding "+this.props.className}>
                <div className="container">
                    <div className="columns is-mobile is-multiline">
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
                    <div className="columns is-mobile">
                        <div className="column is-1">
                            <div className="columns is-multiline icons is-gapless is-mobile">
                                <div className="column is-full">
                                    <span className="icon is-small">
                                        <span className="oi" data-glyph="caret-top" title="Raise rank" aria-hidden="true"></span>
                                    </span>
                                </div>
                                <div className="column is-full">
                                    <span className="icon is-small">
                                        <span className="oi" data-glyph="caret-bottom" title="Lower rank" aria-hidden="true"></span>
                                    </span>                                
                                </div>
                            </div>  
                        </div>
                        <div className="column">
                            <div className="friend-rank">Rank <span className="value">{index+1}</span></div>
                            <div className="friend-name">{friend.name}</div>
                        </div>
                    </div>
                </div>            
            </div>        
        );
    }
}

export default Friends;