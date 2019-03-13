import React from "react";
import "./ReactFriendRanking.scss";
import Home from "./Components/Pages/Home";

interface IReactFriendRankingProps {

}

class ReactFriendRanking extends React.Component<IReactFriendRankingProps> {
    constructor(props:IReactFriendRankingProps) {
        super(props);
        document.title = "React friend ranking";
    }

    public render() {
        return (
            <Home />
        );
    }
}

export default ReactFriendRanking;