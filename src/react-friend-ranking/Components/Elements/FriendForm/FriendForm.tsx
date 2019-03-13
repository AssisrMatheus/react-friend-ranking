import React from "react";
import { IFriend } from "../../../Entities/IFriend";

interface IFriendFormProps {
    maxRankNumber: number;
    onSubmit: (friend: IFriend, index: number) => void;
}

interface IFriendFormState {
    friend: IFriend,
    index: number,
    valid: boolean | "" | undefined
}

class FriendForm extends React.Component<IFriendFormProps, IFriendFormState> {
    public constructor(props: IFriendFormProps) {
        super(props);
        this.state = {
            friend: { name: "" },
            index: this.props.maxRankNumber,
            valid: false,
        }
    }

    public render() {
        return (
            <div className="margin-bottom margin-top">
                <div className="title has-text-white is-4">
                    Add friend:
                </div>
                <form onSubmit={(e) => { this.submit(e); }} autoComplete="off">
                    <div className="field is-horizontal">
                        <div className="field-body">
                            <div className="field">
                                <p className="control is-expanded has-icons-left" >
                                    <input className="input"
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={this.state.friend ? (this.state.friend.name ? this.state.friend.name : "") : ""}
                                        onChange={(e) => { this.onNameChange(e) }} />
                                    <span className="icon is-small is-left">
                                        <span className="oi" data-glyph="person" aria-hidden="true"></span>
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input"
                                        type="number"
                                        name="index"
                                        placeholder="Rank"
                                        min="1"
                                        max={this.props.maxRankNumber}
                                        value={this.state.index !== undefined ? this.state.index : ""}
                                        onChange={(e) => { this.onIndexChange(e) }} />
                                    <span className="icon is-small is-left">
                                        <span className="oi" data-glyph="elevator" aria-hidden="true"></span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="level submit-btn">
                        <div className="level-left">

                        </div>
                        <div className="level-right">
                            <button className="button margin-left is-danger" type="button" onClick={() => { this.clean() }}>Clean</button>
                            <button className={"button margin-left " + (this.state.valid ? "is-success" : "")} type="submit" disabled={!this.state.valid}>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    private isValid(friend: IFriend, index: number): boolean | "" | undefined {
        return friend.name && index !== undefined;
    }

    private submit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        if (this.isValid(this.state.friend, this.state.index)) {
            this.props.onSubmit(this.state.friend, this.state.index);
            this.clean();
        }
    }

    private clean() {
        this.setState({
            friend: { name: "" },
            index: this.props.maxRankNumber,
            valid: false,
        });
    }

    private onNameChange(e: any): void {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        const friend: IFriend = { [name]: value };
        this.setState({
            friend,
            valid: this.isValid(friend, this.state.index)
        });
    }

    private onIndexChange(e: any): void {
        const target = e.target;
        let value = target.type === 'checkbox' ? target.checked : parseInt(target.value.toString().trim());

        if (value < 1)
            value = 1;
        else if (value > this.props.maxRankNumber)
            value = this.props.maxRankNumber;

        this.setState({
            index: value,
            valid: this.isValid(this.state.friend, value)
        });

    }
}

export default FriendForm;