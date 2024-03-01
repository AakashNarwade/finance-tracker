// import { useState } from "react";
// // import { BASE_URL } from "../utils/constant";
// import axios from "axios";

// const useFetch = (url) => {
//   const [fetchedAmount, setFetchedAmount] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(url);
//       const data = response.data;
//       console.log(data);
//       setFetchedAmount(data);

//       const total = data.reduce((acc, curr) => (acc += curr.totalAmount), 0);
//       console.log(total);
//     } catch (error) {
//       console.log(error);
//     }
//     return fetchedAmount;
//   };
//   fetchData();
//   return fetchedAmount;
// };

// export default useFetch;
