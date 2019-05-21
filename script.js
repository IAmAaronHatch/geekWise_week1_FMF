const friend = "0 > - <";

const friendList = [];

let mySearch = () => {
    alert('Searching');
    createTextFriend();
}

let createTextFriend = () => {
    let createNewFriend = document.createElement('p');
    document.body.appendChild(createNewFriend);
    createNewFriend.innerText = friend;
}