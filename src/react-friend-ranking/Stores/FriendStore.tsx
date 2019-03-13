import { IFriend } from "../Entities/IFriend";

class FriendStore {
    public getFriends(): IFriend[] {
        let localFriends = localStorage.getItem("friends");        

        if (localFriends) {
            return JSON.parse(localFriends);
        } else {
            let friends = new Array<IFriend>({name: "Joao"}, {name: "Kevin"});

            localStorage.setItem("friends", JSON.stringify(friends));

            return friends;
        }
    }
}

export default FriendStore;