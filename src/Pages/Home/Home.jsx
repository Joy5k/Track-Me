import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AmountContext } from "../AmountProvider/AmountProvider";

const Home = () => {

  const [amount, setAmount] = useState(0);
  const { balance, setBalance } = useContext(AmountContext);
  console.log(balance, 'check the amount');
  const handleDeposit = () => {
    setBalance(balance + amount);
    setAmount
  };

  const handleWithdraw = () => {
    setBalance(balance - amount);
  };
    return (
       
        <div className="text-center">
<button onClick={handleDeposit()}>Deposit</button>
<button onClick={handleWithdraw()}>Deposit</button>
            <p className="text-red-500 text-4xl">Taka={ balance}</p>
             <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Track Your Bank Account Here</h1>
             
  
  <div className="stat bg-slate-400">
    <div className="stat-title">Current balance</div>
    <div className="stat-value">$89,400</div>
    <div className="stat-actions">
      <Link to ="/expense" className="btn btn-sm">Withdrawal</Link> 
      <Link to="/income" className="btn btn-sm btn-success m-2">Deposit</Link>
    </div>
  </div>
          </div>
        </div>
        </div>
        </div>
    );
};

export default Home;