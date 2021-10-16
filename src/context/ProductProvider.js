import { useContext, createContext, useReducer } from "react";
import { reducerFunction } from "./reducerFunction";

const ProductContext = createContext();
const filterObject = {};

export const brandNameArray = [
  "Anouk",
  "Biba",
  "Indo Era",
  "Soch",
  "W",
  "Aurelia",
  "Allen Solly Woman",
  "AKS Couture",
  "Melange"
];

export const createObject = (brandNameArray, filterObject) => {
  for (let i = 0; i < brandNameArray.length; i++) {
    filterObject[brandNameArray[i]] = false;
  }
  return filterObject;
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, {
    product: [],
    cart: [],
    wishlist: [],
    address: [],
    payment: {},
    brandFilter: createObject(brandNameArray, filterObject),
    otherFilter: {
      ranger_value: 1000,
      in_stock: false
    },
    sort: {
      latest: false,
      discount: false,
      "price : low to high": false,
      "price : high to low": false
    },
    openFilter: false,
    openSort: false,
    overlay: false,
    modalId: "",
    toast: {
      value: false,
      message: ""
    }
  });

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
