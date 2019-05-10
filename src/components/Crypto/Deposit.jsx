import React, { Component } from "react";
import cs from "./Crypto.module.sass";

class Deposit extends Component {
  render() {
    return (
      <div className={cs.Deposit}>
        <div className={cs.card}>
          <div className={cs.depositCurrency}>
            <h3>Currency</h3>
            <select>
              <option value='Ethtereum'>Ethterium</option>
              <option value='Bitcoin'>Bitcoin</option>
            </select>
          </div>

          <div className={cs.depositAddress}>
            <h3>Deposit Address</h3>
            <input type='text' value='' onChange={() => {}} />
          </div>

          <h3>Send only Ethereum to this address!</h3>

          <img src='/img/Deposit_QR.svg' alt='QR code' />
        </div>
      </div>
    );
  }
}

export default Deposit;
