import "./styles.css";

const ProfileCard = ({ userInfo }) => {
  const { forms, sprites, types } = userInfo;

  return (
    <div className="profile-card">
      <img
        src={sprites?.front_default}
        alt="Profile"
        className=" profile-picture"
      />
      <div className="profile-details">
        <h2>{forms?.name}</h2>
        <p>Type: {types?.name[(0, 1)]}</p>
        
      </div>
    </div>
  );
};
export default ProfileCard;
