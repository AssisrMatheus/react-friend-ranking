import React from "react";

interface IHeaderProps {
    className: string;
}

class Header extends React.Component<IHeaderProps> {
    constructor(props: IHeaderProps) {
        super(props);
    }

    public render() {
        return (
            <section className={"hero is-dark is-bold "+this.props.className}>
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