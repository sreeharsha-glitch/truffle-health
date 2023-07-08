import React, { createContext, useContext, useState } from 'react';
import { INITIAL_DATA } from '../utils/initial-data.util';

// Context to hold the shared state
const StateContext = createContext();

// Custom hook to access the state
export const useStateContext = () => useContext(StateContext);

// Provider component to wrap application and provide the state
export const StateProvider = ({ children }) => {
  const [state, setState] = useState(INITIAL_DATA);

  const getBills = () => {
    // Return all the bills
    return state;
  };

  const getBillById = (billId) => {
    // Find the bill with the given billId
    return state.find((bill) => bill.billId === billId);
  };

  const updateBill = (billId, updatedBill) => {
    // Update the bill with the given billId
    const updatedBills = state.map((bill) => {
      if (bill.billId.toString() === billId.toString()) {
        return { ...updatedBill };
      }
      return bill;
    });
    setState(() => updatedBills);
  }

  const addBill = (bill) => {
    // Generate a new bill Id
    const billId = Math.max(...state.map((bill) => bill.billId)) + 1;
    setState((prevState) => [...prevState, { ...bill, billId }]);
    // Return the new billId
    return billId;
  }

  return (
    <StateContext.Provider value={{ state, getBills, getBillById, updateBill, addBill }}>
      {children}
    </StateContext.Provider>
  );
};
