import React, { useState, useEffect } from 'react';
import Form from './Form';
import Table from './Table';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data.transactions));
  }, []);

  return (
    <>
      <Table transactions={transactions} />
      <Form />
    </>
  );
}

export default App;