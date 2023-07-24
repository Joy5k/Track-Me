import { useContext } from "react";
import { Link } from "react-router-dom";
import { AmountContext } from "../AmountProvider/AmountProvider";

const Home = () => {

  const { balance } = useContext(AmountContext);
  console.log(balance, 'check the amount');

    return (
       
        <div className="text-center">

             <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold m-4">Current Balance</h1>
             
  
  <div className="stat bg-slate-400">
    <div className="stat-title">Current balance</div>
                <div className="stat-value">${ balance}</div>
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