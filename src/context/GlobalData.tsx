import React from 'react'
import { MyState } from './Interfaces';

export const GlobalData = React.createContext<MyState>({} as MyState);