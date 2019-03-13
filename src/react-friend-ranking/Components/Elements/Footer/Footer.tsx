import React from "react";

interface IFooterProps {
    className: string;
}

class Footer extends React.Component<IFooterProps> {
    public render() {
        return (
            <footer className={"footer "+this.props.className}>
                <div className="content has-text-centered">
                    <p>
                        <strong>react-friend-ranking</strong> made with ❤ by Matheus Assis Rios.
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;