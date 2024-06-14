import * as d3 from 'd3';
import { useEffect, useState } from 'react';



const url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m'

function DashboardPage() {

  const [data, setData] = useState([]);


 

  
  
  useEffect(()=> { 
    async function fetchData(){
      try {
      const response = await fetch(url);
      const data = await response.json();
  
      setData(data[data.length - 1]);


      } catch (error) {
        console.log('error', error);
      }
    }
    fetchData();
  }, [data]);

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Open Time</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
            <th>Close Time</th>
            <th>Quote Asset Volume</th>
            <th>Number of Trades</th>
            <th>Taker Buy Base Asset Volume</th>
            <th>Taker Buy Quote Asset Volume</th>
            <th>Ignore</th>
          </tr>
        </thead>
      <tbody>
        <tr key={data[0]}>
          <td>{new Date(data[0].toLocaleString())}</td>
          <td>{data[1]}</td>
          <td>{data[2]}</td>
          <td>{data[3]}</td>
          <td>{data[4]}</td>
          <td>{data[5]}</td>
          <td>{data[6]}</td>
          <td>{data[7]}</td>
          <td>{data[8]}</td>
          <td>{data[9]}</td>
          <td>{data[10]}</td>
          <td>{data[11]}</td>
        </tr>
      </tbody>
      </table>
    </div>
  );
}

export default DashboardPage;