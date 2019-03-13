import { IFriend } from "../Entities/IFriend";

class FriendStore {
    public getFriends(): IFriend[] {
        let localFriends = localStorage.getItem("friends");        

        if (localFriends) {
            return JSON.parse(localFriends);
        } else {
            let friends = new Array<IFriend>({name: "Rodrigo"}, {name: "Kevin"}, {name: "Luan"});

            this.setFriends(friends);

            return friends;
        }
    }

    public setFriends(friends: IFriend[]): void {
        localStorage.setItem("friends", JSON.stringify(friends));
    }

    public raiseFriendRank(friends: IFriend[], index: number): IFriend[] {        
        if (index > 0) {
            const newFriends = new Array<IFriend>();

            for (let i = 0; i < friends.length; i++) {
                if (i === (index - 1)) {
                    // If I'm in the index I want to go to
                    newFriends.push(friends[index]);
                } else if (i === (index)) {
                    // If I'm in the next index, put the previous user in there
                    newFriends.push(friends[index-1]);
                } else {
                    // Everyone before and after desired position gets unchanged
                    newFriends.push(friends[i]);
                }
            }
            return newFriends;
        }

        return new Array<IFriend>(...friends);
    }

    public lowerFriendRank(friends: IFriend[], index: number): IFriend[] {
        if (index < (friends.length-1)) {
            const newFriends = new Array<IFriend>();

            for (let i = 0; i < friends.length; i++) {
                if (i === (index + 1)) {
                    // If I'm in the index I want to go to
                    newFriends.push(friends[index]);
                } else if (i === (index)) {
                    // If I'm in the next index, put the previous user in there
                    newFriends.push(friends[index+1]);
                } else {
                    // Everyone before and after desired position gets unchanged
                    newFriends.push(friends[i]);
                }
            }
            return newFriends;
        }

        return new Array<IFriend>(...friends);
    }
}

export default FriendStore;