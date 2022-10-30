import { FunctionComponent, useEffect, useState } from "react";
import { getUser } from "../services/userService";
import Navbar from "./Navbar";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const [user, setUser] = useState({
    _id: "",
    name: "",
    email: "",
    isAdmin: "",
  });
  useEffect(() => {
    getUser()
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div
      
      >
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <h1>Profile</h1>
        </div>

        <div className="card mb-3 mt-5 mx-auto" style={{ width: "600px" }}>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://media.istockphoto.com/vectors/male-face-silhouette-or-icon-man-avatar-profile-unknown-or-anonymous-vector-id1087531642?k=20&m=1087531642&s=612x612&w=0&h=D6OBNUY7ZxQTAHNVtL9mm2wbHb_dP6ogIsCCWCqiYQg="
                className="img-fluid rounded-start mx-3"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body mx-4">
                <h5 className="card-title mt-1">{user.name}</h5>
                {/* <p className="card-text mt-4">UserID: {user._id}</p> */}
                <p className="card-text">Email: {user.email}</p>
                Admin: 
                {user.isAdmin ? (
                  <span>
                    {" "}
                    <i
                      className="fa-solid fa-check"
                      style={{ color: "green" }}
                    ></i>
                  </span>
                ) : (
                  <span>
                    <i
                      className="fa-solid fa-xmark"
                      style={{ color: "red" }}
                    ></i>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
