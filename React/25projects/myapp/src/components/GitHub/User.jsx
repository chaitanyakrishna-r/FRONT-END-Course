import React from "react";

const User = ({ user }) => {
  const { avatar_url, followers, created_at, following, login, name ,
    public_repos
     } = user;

  const createDate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="user" className="avatar" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
      
        <p>
          User joind on {`${createDate.getDate()}`}{" "}
          {`${createDate.toLocaleString("en-us", { month: "short" })} `}{" "}
          {`${createDate.getFullYear()}`}
        </p>
      </div>
      <div>
        <div>
            <p>Public Repos : {public_repos}</p>
        </div>
        <div>
            <p>Followers : {followers}</p>
        </div>
        <div>
            <p>Following : {following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
