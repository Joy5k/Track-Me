import { useContext } from "react";
import { AmountContext } from "../AmountProvider/AmountProvider";

const ExpenseForm = () => {
  const { balance, setBalance } = useContext(AmountContext);
  
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.DepositAmount.value, 'check the event');
    const depositAmount = parseFloat(e.target.DepositAmount.value) 
    
    setBalance(parseFloat(balance) - depositAmount);
    console.log( balance, 'check the amount');

  }
  return (
    <div className="">

    <h2 className="text-4xl text-center font-bold m-5">Your Expense Transaction </h2>
    <form onSubmit={handleChange} className="form-control w-full max-w-xs text-center mx-auto  bg-slate-100
    p-10">
      <h3 className="text-center font-bold text-xl">You have {balance} taka</h3>
<label className="label">
  <span className="label-text">Enter your Withdraw Amount</span>
 
</label>
<input type="text" name="DepositAmount" placeholder="100" className="input input-bordered w-full max-w-xs" />
  <button className="btn btn-primary my-1">Deposit</button>
</form>
  </div>
  );
};

export default ExpenseForm;
