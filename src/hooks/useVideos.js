import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;




// console.clear();

// const createPolicy = (name, amount) => {
//   return {
//     type: " CREATE_POLICY",
//     payload: {
//       name: name,
//       amount: amount
//     }
//   };
// };

// const deletePolicy = (name) => {
//   return {
//     type: "DELETE_POLICY",
//     payload: {
//       name: name
//     }
//   };
// };

// const createClaim = (name, amountOfMoneyToCollect) => {
//   return {
//     type: "CREATE_CLAIM",
//     payload: {
//       name: name,
//       amountOfMoneyToCollect: amountOfMoneyToCollect
//     }
//   };
// };

// const claimHistory = (oldListOfClaims = [], action) => {
//   if (action.type === "CREATE_CLAIM") {
//     return [...oldListOfClaims, action.payload];
//   }

//   return oldListOfClaims;
// };

// const accounting = (bagOfMoney = 100, action) => {
//   if (action.type === "CREATE_CLAIM") {
//     return bagOfMoney - action.payload.amountOfMoneyToCollect;
//   } else if (action.type === "CREATE_POLICY") {
//     return bagOfMoney + action.payload.amount;
//   }
//   return bagOfMoney;
// };

// const policies = (listOfPolicies = [], action) => {
//   if (action.type === "CREATE_POLICY") {
//     return [...listOfPolicies, action.payload.name];
//   } else if (action.type === "DELETE_POLICY") {
//     return listOfPolices.filter(name => name !== action.payload.name);
//   }
//   return listOfPolicies;
// };

// const { createStore, combineReducers } = Redux;

// const ourDepartments = combineReducers({
//   accounting: accounting,
//   claimHistory: claimHistory,
//   policies: policies
// });

// const store = createStore(ourDepartments);

// store.dispatch(createPolicy("sengdu", 20));
// store.dispatch(createPolicy("boss", 40));
// store.dispatch(createPolicy("anna", 50));

// console.log(store.getState());



function add1000later() {
  return new Promise( done => {
  done( add1000() ) })
  }
  // console.log("some processes")
  //  console.log(add1000()) 
  //  console.log("more processes")

   console.log("some processes")
add1000later().then( result => console.log(result) )
 console.log("more processes")