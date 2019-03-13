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
    friends: Array<IFriend>
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
                <Friends className="flex-auto" friends={this.state.friends} />
                <Footer className="flex-footer" />
            </div>
        );
    }
}

export default Home;