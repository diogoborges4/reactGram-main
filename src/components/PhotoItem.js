import "./PhotoItem.css";

import { uploads } from "../utils/config";

import { Link } from "react-router-dom";

const PhotoItem = ({ photo, user }) => {
  console.log(user)
  console.log(photo)
  return (
    <div className="photo-item">
      <div className="home-profile-header">
        <Link to={`/users/${photo.userId}`}> {user.profileImage ? (
          <img src={`${uploads}/users/${user.profileImage}`} alt={user.name} />
        ) : (
          <img src={`${uploads}/users/perfil-de-usuario.jpg`} alt={user.name} />
        )} 
        <p className="photo-author">{photo.userName}</p>
        </Link>
      </div>
        <img src={`${uploads}/photos/${photo.image}`} alt={photo.title} />
       <h2>{photo.title}</h2>
      
      

    </div>
  );
};

export default PhotoItem;
