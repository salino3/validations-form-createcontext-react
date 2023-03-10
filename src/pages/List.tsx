import React from 'react';
import { Link } from 'react-router-dom';
import { GlobalData, Users } from "../context";
import { form } from '../router';

export const List: React.FC = () => {

      const { state, CapitalNames, OneYearMore } = React.useContext(GlobalData);
      const { Users } = state;


  return (
    <>
      <h1>
        <u>List Page</u>
      </h1>
      <div className="divLink generalDivCss">
        <h3>Form</h3>
        <Link to={form}>Go to Form </Link>
      </div>
      <div>
        {Users &&
          Users.map((user: Users) => (
            <div className="divContainerList" key={user.id}>
              <div className="containerParagraphs">
                <span>{user.id}.</span>
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>{user.age}</span>
              </div>
              <div>
                <button className="" onClick={() => CapitalNames(user.id)}>
                  Convert name to uppercase
                </button>
                <button onClick={() => OneYearMore(user.id)}>+ 1</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
