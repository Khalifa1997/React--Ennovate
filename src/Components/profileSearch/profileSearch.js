import React from "react";
const ProfileSearch = props => {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-md-auto ">
          <img
            src={props.profile_image_url}
            className="img-fluid"
            style={{ width: "75px" }}
          />
        </div>
        <div className="col-md-auto">
          <div className="row">
            {" "}
            <a
              className="userName"
              href={"http://3.19.122.178/profile/" + props.username}
            >
              {props.name}{" "}
            </a>
          </div>
          <div className="row"> @{props.username} </div>
          <div className="row">
            <p>{props.text}</p>
          </div>
        </div>

        {/* <div className="col-1 ml-auto" style={{ marginTop: "0.5%" }}>
          {props.isFollowed ? (
            <button type="button" className="btn btn-outline-primary btn-sm">
              Follow
            </button>
          ) : (
            <button type="button" className="btn btn-primary btn-sm">
              Unfollow
            </button>
          )}
        </div> */}
      </div>
    </div>
  );
};
export default ProfileSearch;
