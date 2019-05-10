import React, { Component } from "react";
import cs from "./RewardStream.module.sass";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Balances, Deposit, Withdraw, TransactionHistory } from "../Crypto";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

class RewardStream extends Component {
  render() {
    const { logged } = this.props;

    return (
      <div className={cs.RewardStream}>
        <Router>
          <Sidebar />
          <main>
            <Header />

            <Switch>
              <Route
                exact
                path='/'
                render={() =>
                  logged ? <Redirect to='/crypto/balances' /> : <></>
                }
              />
              <Route
                path='/crypto/balances'
                render={() => <Balances walletValue={5500} />}
              />
              <Route path='/crypto/deposit' render={() => <Deposit />} />
              <Route path='/crypto/withdraw' render={() => <Withdraw />} />
              <Route
                path='/crypto/transactionhistory'
                render={() => <TransactionHistory />}
              />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ logged }) => ({ logged });

export default connect(mapStateToProps)(RewardStream);
