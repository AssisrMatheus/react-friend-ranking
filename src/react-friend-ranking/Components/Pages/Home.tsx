import React from "react";
import Header from "../Elements/Header/Header";
import Friends from "../Elements/Friends/Friends";
import { IFriend } from "../../Entities/IFriend";

interface IHomeProps {

}

interface IHomeState {
    friends: Array<IFriend>
}

class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
        this.state = { friends: new Array<IFriend>({ name: "Joao" }) };
    }

    public render() {
        return (
            <React.Fragment>
                <Header />
                <Friends friends={this.state.friends} />
            </React.Fragment>
        );
    }
}

export default Home;