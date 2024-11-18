import './detail.css'
import { auth, db } from "../../lib/firebase";
import {signOut} from "firebase/auth";
import { useChatStore } from '../../lib/chatStore';
import { useUserStore } from '../../lib/userStore';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';



const Detail=()=> {

  const {chatId,user,isCurrentUserBlocked,isReceiverBlocked,changeBlock}=useChatStore();
  const {currentUser}=useUserStore();
   const handleBlock=async()=>{
    if(!user) return;
     const userDocRef=doc(db,"users",currentUser.id)
    try {
      await updateDoc(userDocRef,{
        blocked:isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock()
    } catch (error) {
      
    }
   };

  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b" alt="" />
              <span>photo_2024.png</span>
              </div>
            <img src="./download.png" className='icon' alt="" />
            </div>
            
          </div>
          
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlocked 
            ? "You are Blocked!" 
            : isReceiverBlocked 
            ? "User Blocked" 
            : "Block User"}
        </button>

        <button className='logout' onClick={()=>auth.signOut()} >Logout</button>


      </div>

    </div>
  );
};

export default Detail
