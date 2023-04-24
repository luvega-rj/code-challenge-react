// import { useEffect } from 'react';
// import { useState } from 'react';

// function Transactions() {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3000/transactions')
//       .then(response => response.json())
//       .then(data => document.write(data))
       
//   }, 

  
//   []);

 


//   return (
//     <div>
//       {transactions.map(transaction => (
//         <div key={transaction.id}>
//           <p>{transaction.date}</p>
//           <p>{transaction.description}</p>
//           <p>{transaction.category}</p>
//           <p>{transaction.amount}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Transactions;
