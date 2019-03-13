import React from "react";
import { IFriend } from "../../../Entities/IFriend";
import "./Friends.scss";
import FriendForm from "../FriendForm/FriendForm";

interface IFriendsProps {
    className: string;
    friends: Array<IFriend>;
    raiseFriendRank: (index: number) => void;
    lowerFriendRank: (index: number) => void;
    removeFriend: (index: number) => void;
    onSubmit: (friend: IFriend, index: number) => void;
}

class Friends extends React.Component<IFriendsProps> {
    constructor(props: IFriendsProps) {
        super(props);
    }

    public render() {
        return (
            <div className={"has-background-dark padding " + this.props.className}>
                <div className="container">
                    <div>
                        <FriendForm maxRankNumber={this.props.friends.length + 1} onSubmit={(friend, index) => this.props.onSubmit(friend, index)} />
                    </div>
                    <div className="columns is-mobile is-multiline">
                        {this.props.friends.map((element, index) => this.getFriendCard(element, index))}
                    </div>
                </div>
            </div>
        );
    }

    private getIcons(index: number): React.ReactNode {
        const canRaise = index > 0;
        const canLower = index + 1 < this.props.friends.length;
        return (
            <React.Fragment>
                <div className="column is-full">
                    <span className={"icon is-small " + (canRaise ? "enabled" : "disabled")} onClick={canRaise ? (e) => { this.props.raiseFriendRank(index) } : () => { }}>
                        <span className="oi" data-glyph="caret-top" title="Raise rank" aria-hidden="true"></span>
                    </span>
                </div>
                <div className="column is-full">
                    <span className={"icon is-small " + (canLower ? "enabled" : "disabled")} onClick={canLower ? (e) => { this.props.lowerFriendRank(index) } : () => { }}>
                        <span className="oi" data-glyph="caret-bottom" title="Lower rank" aria-hidden="true"></span>
                    </span>
                </div>
            </React.Fragment>
        );
    }

    private getFriendCard(friend: IFriend, index: number): React.ReactNode {
        return (
            <div className="column is-full" key={index}>
                <div className="notification">
                    <div className="columns is-mobile">
                        <div className="column is-1">
                            <div className="columns is-multiline icons is-gapless is-mobile">
                                {this.getIcons(index)}
                            </div>
                        </div>
                        <div className="column">
                            <div className="friend-rank">Rank <span className="value">{index + 1}</span></div>
                            <div className="friend-name">{friend.name}</div>
                        </div>
                        <div className="column is-1">
                            <div className="columns is-multiline icons is-gapless is-mobile">
                                <div className="column is-full">
                                    <span className="icon is-large has-text-danger enabled is-size-4" onClick={(e) => { this.props.removeFriend(index) }}>
                                        <span className="oi" data-glyph="circle-x" title="Remove friend" aria-hidden="true"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Friends;