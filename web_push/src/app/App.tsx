import React, { useState } from 'react';
import axios from 'axios';
const App = () => {
  const [res, setRes] = useState({ data: 'No Response' });

  const onClick = async () => {
    try {
      const body = JSON.parse(localStorage.getItem('noti') || '{name: "hasi"}');
      const res = await axios.post('http://localhost:5000/subscription', body);
      console.log(res);
      setRes(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className='app'>
      <button onClick={() => onClick()}>Send Push Notifications</button>
      {JSON.stringify(res)}
    </div>
  );
};

export default App;
