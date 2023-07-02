import React, { useEffect, useState } from 'react'
import { SideBar } from "react-chat-elements"
import { retrieveFriendList } from '../handlers/apphandles'
import UserProfile from '../Closures/UserProfile';


export default function ChatList() {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    const fetchFriendList = async () => {
      setFriendList(await retrieveFriendList(UserProfile.getName()));
    };

    fetchFriendList();

  }, []);


  return (
    <div>
    <h2>Friend List:</h2>
    <ul>
      {friendList.map(friend => (
        <li key={friend}>{friend}</li>
      ))}
    </ul>
  </div>
  )

}
