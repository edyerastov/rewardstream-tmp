import React, { Component } from "react";
import cs from "./Crypto.module.sass";
import { BigBtn } from "../Btn";

class Withdraw extends Component {
  render() {
    return (
      <div className={cs.Withdraw}>
        <div className={cs.card}>
          <div className={cs.withdrawCurrency}>
            <h3>Currency</h3>
            <select>
              <option value='Ethtereum'>Ethterium</option>
              <option value='Bitcoin'>Bitcoin</option>
            </select>
          </div>

          <div className={cs.withdrawAddress}>
            <h3>Destination Address</h3>
            <input type='text' value='' />
          </div>

          <div className={cs.withdrawAmounts}>
            <div className={cs.from}>
              <h3>Amount ETH</h3>
              <input type='text' />
              {/* FIXME: bind to state */}
              <h4>Available ETH: 2021.132</h4>
            </div>

            <div className={cs.separator} />

            <div className={cs.to}>
              <h3>Amount USD</h3>
              <input type='text' />
            </div>
          </div>

          <BigBtn
            text='Withdraw'
            style={{ padding: "12px 35px", marginTop: 40 }}
          />
        </div>
      </div>
    );
  }
}

export default Withdraw;
