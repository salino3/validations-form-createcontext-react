
export type AllAction = LoadDataAction | UpdateDataUser | CapitalDataUser;

interface LoadDataAction {
  type: "LOAD_DATA";
  payload: Users[];
};

interface UpdateDataUser {
  type: "UPDATE_AGE";
  payload: number;
};

interface CapitalDataUser {
  type: "CAPITAL_DATA";
  payload: number;
};

//

 export interface Users {
   id: number;
   name: string;
   email: string;
   age: number;
 };

export interface MyState {
  [x: string]: any;
  state: {
    Users: Users[];
  };
  CapitalNames: (id: number) => void;
  OneYearMore: (id: number) => void;
};
