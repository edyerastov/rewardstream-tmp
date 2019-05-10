import React, { Component } from "react";
import cs from "./Crypto.module.sass";
import { InfoBtn, SuccessBtn, WarnBtn } from "../Btn";
import { connect } from "react-redux";

class TransactionHistory extends Component {
  state = {
    curPage: 1,
    itemsPerPage: 8
  };

  componentDidMount() {
    this.setState({
      list: this.props.activeTab.data.transactions
    });
  }

  handleNextClick = () => {
    this.setState(prevState => {
      let next = prevState.curPage + 1;
      // let len = this.props.activeTab.data.transactions.length;
      let len = prevState.list.length;
      // debugger;
      if (next > len / prevState.itemsPerPage) next = prevState.curPage;
      // debugger;
      return { curPage: next };
    });
  };

  handlePrevClick = () => {
    this.setState(prevState => {
      let next = prevState.curPage - 1;

      if (next <= 0) next = prevState.curPage;

      return { curPage: next };
    });
  };

  render() {
    const { activeTab } = this.props;

    return (
      <div className={cs.TransactionHistory}>
        <header>
          <div>
            <div className={cs.headers}>
              <h2>Transaction History</h2>
              <span>September 2022 - August 2023</span>
            </div>

            <div className={cs.THSelect}>
              <select>
                <option value='Ethereum'>Ethereum</option>
                <option value='Bitcoin'>Bitcoin</option>
              </select>
            </div>
          </div>

          <div>
            <InfoBtn
              text='Export CSV'
              style={{ background: "#39baff", fontSize: 11 }}
            />
          </div>
        </header>

        <div className={cs.THBody}>
          <Transactions
            list={activeTab.data.transactions
              .concat(activeTab.data.transactions.reverse())
              .slice(
                (this.state.curPage - 1) * this.state.itemsPerPage,
                this.state.itemsPerPage
              )}
          />

          <div className={cs.tableControls}>
            <img
              src='/img/ArrowRight.svg'
              alt='previous transactions'
              className={cs.prev}
              onClick={this.handlePrevClick}
            />
            <span>Page {this.state.curPage}</span>
            <img
              src='/img/ArrowRight.svg'
              alt='next transactions'
              onClick={this.handleNextClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

const Transactions = ({ list }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Type</td>
          <td>Amount</td>
          <td>Recipient/Sender</td>
          <td>TXN</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        {list.map(item => (
          <tr key={Math.random()}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.recip_send}</td>
            <td>{item.txn}</td>
            <td>
              {item.status ? (
                <SuccessBtn
                  text='SENT'
                  style={{ width: "100%", maxWidth: 70, cursor: "default" }}
                />
              ) : (
                <WarnBtn
                  text='FAIL'
                  style={{ width: "100%", maxWidth: 70, cursor: "default" }}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = ({ activeTab }) => ({ activeTab });

export default connect(mapStateToProps)(TransactionHistory);
