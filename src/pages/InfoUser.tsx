import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalData, MyState, Users } from "../context";

export const InfoUser: React.FC = () => {

    const {state} = React.useContext<MyState>(GlobalData);
 
    const [user, setUser] = React.useState<Users>() || {};
    const {id} = useParams();

  let myId = Number(id);

if(!user){
    if(state && state.Users){
// si te devuelve un Array, con [0] te devuelve un Objeto
   const  one = state.Users.filter((user: Users) => user?.id === myId)[0];
  setUser(one);
 };
};



  return (
    <>
      <h1>
        <u>Info User</u>
      </h1>
      <Link to={"/"}>Go to the list</Link>
      <br /> <br />
      {user ? (
        <div className="divInfo">
          <h3>
            id: <span>{id}</span>
          </h3>
          <h3>
            Name: <span>{user && user?.name}</span>
          </h3>
          <h2>
            Email: <span>{user?.email}</span>
          </h2>
          <h2>
            {" "}
            Age: <span>{user?.age}</span>
          </h2>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
