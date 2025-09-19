import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="cards-container">
        <Card game="Free Fire BR" formLink="https://forms.gle/WTvQ916YNZ5GLHUz5" coordinatorNumber="9016764959" />
        <Card game="Free Fire CS" formLink="https://forms.gle/uSpY1ocq5qgF3zXd6" coordinatorNumber="9016764959" />
        <Card game="BGMI" formLink="https://forms.gle/KCQS4bwGGMScLYUh7" coordinatorNumber="9016764959" />
        <Card game="Clash Royale" formLink="https://forms.gle/dWDhYmgi2WoJFpML9" coordinatorNumber="9016764959" />
        <Card game="CODM" formLink="https://forms.gle/2dhNHAHBHitvj2pf9" coordinatorNumber="9016764959" />
        <Card game="WCC Rivals" formLink="https://forms.gle/q55wiLwXZkYZQkgj6" coordinatorNumber="9016764959" />
        <Card game="Valorant" formLink="https://forms.gle/2GAjaRXeiV2b8RBk6" coordinatorNumber="9016764959" />
        <Card game="Mini Militia" formLink="https://forms.gle/vfeghV7K31rGg1Mx5" coordinatorNumber="9016764959" />
        <Card game="EA FC Football" formLink="https://forms.gle/JarDFcDJaNq1aLGj7" coordinatorNumber="9016764959" />
      </div>
    </>
  );
}

export default App;
