import { AllAction, Users } from "./Interfaces";

export const MyReducer = (state: any, action: AllAction) => {

  switch (action.type) {
    case "LOAD_DATA":
      return {
        ...state,
        Users: action.payload,
      };

    case "CAPITAL_DATA":
      const users = state.Users.map((user: Users) => {
        if (user.id === action.payload) {
          return {
            ...user,
            name: user.name.toUpperCase(),
          };
        } else {
          return user;
        }
      });
      return {
        ...state,
        Users: users,
      };

    case "UPDATE_AGE":
      const OneYearMore = state.Users.map((user: Users) => user.id === action.payload 
      ? {...user, age: user.age + 1} : user)
      return {
        ...state,
        Users: OneYearMore,
      };
    default:
      return state;
  };
  
};
