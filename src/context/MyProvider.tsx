import React, { useReducer } from "react";
import { GlobalData } from "./GlobalData";
import { MyState, Users } from "./Interfaces";
import { MyReducer } from "./MyReducer";

interface Props {
   children: React.ReactNode;
};


export const MyProvider: React.FC<Props> = ({children}) => {

  const FakeLlamadaApi: Users[] = [
    { id: 1, name: "Mario", email: "mario@gmail.com", age: 23 },
    { id: 2, name: "Amanda", email: "amanda@gmail.com", age: 43 },
    { id: 3, name: "Gianni", email: "gigi@gmail.com", age: 25 },
  ];

  const [state, dispatch] = useReducer(MyReducer, []);

  //* loadData
  const loadData = React.useCallback(() => {
    dispatch({
      type: "LOAD_DATA",
      payload: FakeLlamadaApi,
    });
  }, []);

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  //* CapitalNames
  const CapitalNames = React.useCallback((id: number) => {
    dispatch({
      type: "CAPITAL_DATA",
      payload: id,
    });
  }, []);

 const OneYearMore = React.useCallback((id: number) => {
      dispatch({
        type: "UPDATE_AGE",
        payload: id,
      });
    },
    []);
  

  return (
    <GlobalData.Provider value={{ state, CapitalNames, OneYearMore }}>
      {children}
    </GlobalData.Provider>
  );
}
