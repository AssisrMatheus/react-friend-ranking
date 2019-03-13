import React from "react";
import "./Home.scss";
import Header from "../Elements/Header/Header";
import Friends from "../Elements/Friends/Friends";
import { IFriend } from "../../Entities/IFriend";
import FriendStore from "../../Stores/FriendStore";
import Footer from "../Elements/Footer/Footer";

interface IHomeProps {

}

interface IHomeState {
    friends: Array<IFriend>;
}

class Home extends React.Component<IHomeProps, IHomeState> {
    private store = new FriendStore();

    constructor(props: IHomeProps) {
        super(props);

        this.state = {
            friends: this.store.getFriends(),
        };
    }

    public render() {
        return (
            <div className="flex-wrapper">
                <Header className="flex-header" />
                <Friends className="flex-auto"
                         friends={this.state.friends} 
                         raiseFriendRank={(index: number) => { this.raiseFriendRank(index); }}
                         lowerFriendRank={(index: number) => { this.lowerFriendRank(index); }} />
                <Footer className="flex-footer" />
            </div>
        );
    }

    private raiseFriendRank(index: number) {
        this.setFriends(this.store.raiseFriendRank(this.state.friends, index));
    }

    private lowerFriendRank(index: number) {
        this.setFriends(this.store.lowerFriendRank(this.state.friends, index));
    }

    private setFriends(friends: IFriend[]): void {
        this.store.setFriends(friends);
        this.setState({friends});
    }
}

export default Home;