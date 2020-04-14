//jshint esversion:9
import React, {useState} from 'react';
const lottery = require('./lottery');
const web3 = require( "./web3");

function Print(props){
  const [manager,setManager] = useState("");
  const [balance, setBalance] = useState("");
  const [players,setPlayers] = useState([]);

  const getManager = async (e)=>{
    e.preventDefault();
  setManager( await lottery.methods.manager().call());
  setBalance( await web3.eth.getBalance(lottery.options.address));
  setPlayers(await lottery.methods.getPlayers().call());

  };

  return(<div>
    <p> your manager for this contract is {manager}</p>
    <button type='button' onClick={getManager}>See who the manager is</button>
    <p> there are {players.length} players in the lottery</p>
    <p> there is a balance of {web3.utils.fromWei(balance)} ether! </p>
    </div>
  )


}


export default Print;
