import React from "react";

class Header extends React.Component {
    public render() {
        return (
            <section className="hero is-dark is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Friend ranking
                        </h1>
                        <h2 className="subtitle">
                            Rank your friends
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;