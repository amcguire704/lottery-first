//jshint esversion:9
import React, {useState} from 'react';
const web3 = require( "./web3");
const lottery = require('./lottery');

function Enter(props){
  const [wager, setWager] = useState({
    value :""
  });
  const [message,setMessage] = useState('');
  function handleClick(e){
  e.preventDefault();
  console.log(wager);

}

const onSubmit = async(event)=>{
  event.preventDefault();
const accounts = await web3.eth.getAccounts();

  setMessage('waiting on transaction.....');

  await lottery.methods.enter().send({
    from:accounts[0],
    value:web3.utils.toWei(wager.value,'ether')
  });
  setMessage('transaction processed');
};
return (<div>
    <form onSubmit={onSubmit}>
      <label>Enter the Lottery</label>
    <input
    onChange = {event => setWager({value:event.target.value})}
    />
    <button>Enter</button>
    </form>

</div>
)


};
export default Enter;
