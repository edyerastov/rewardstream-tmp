import React, { Component } from "react";
import cs from "./Crypto.module.sass";
import { BigBtn, SuccessBtn, InfoBtn } from "../Btn";

class Balances extends Component {
  render() {
    const { walletValue } = this.props;
    return (
      <div className={cs.Balances}>
        <h2>Wallet Value: ${walletValue}</h2>

        <ul className={cs.wallets}>
          <WalletItem
            currency={{ name: "Bitcoin", img: "Bitcoin_icon.svg" }}
            balance={3.233}
            curPrice={3528}
            charge={74}
          />
          <WalletItem
            currency={{ name: "Ethereum", img: "Ethereum_icon.svg" }}
            balance={3.233}
            curPrice={3528}
            charge={74}
          />
          <WalletItem
            currency={{ name: "Bitcoin", img: "Bitcoin_icon.svg" }}
            balance={3.233}
            curPrice={3528}
            charge={74}
          />
          <WalletItem
            currency={{ name: "Bitcoin", img: "Bitcoin_icon.svg" }}
            balance={3.233}
            curPrice={3528}
            charge={74}
          />
        </ul>

        <footer>
          <span style={{ marginRight: 20 }}>
            Link your Coinbase account for seamless transfers
          </span>
          <BigBtn text='Link Coinbase' style={{ marginLeft: 20 }} />
        </footer>
      </div>
    );
  }
}

const WalletItem = ({ balance, curPrice, charge, currency }) => {
  return (
    <li>
      <div className={cs.balance}>
        <div className={cs.currency}>
          <div className={cs.icon}>
            <img src={`/img/${currency.img}`} alt='currency icon' />
          </div>
          <h3>{currency.name}</h3>
        </div>

        <div className={cs.text}>
          <div>Balance</div>
          <div>{balance} BTC</div>
        </div>
      </div>

      <div className={`${cs.curPrice} ${cs.text}`}>
        <div>Current Price</div>
        <div>${curPrice}</div>
      </div>

      <div className={cs.charge}>
        <div className={cs.text}>
          <div>24h Charge</div>
          <div>{charge}%</div>
        </div>

        <div className={cs.buttons}>
          <SuccessBtn text='Deposit' />
          <InfoBtn text='Withdraw' />
        </div>
      </div>
    </li>
  );
};

export default Balances;
