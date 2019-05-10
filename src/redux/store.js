import { createStore } from "redux";
import rootReducer from "./reducers";

export default createStore(
  rootReducer,
  {
    logged: true,
    activeTab: {
      name: "Transaction History",
      urlpath: "transactionhistory",
      data: {
        transactions: [
          {
            type: "Withdraw",
            amount: "32121",
            recip_send: "asdhoqiu31h312kjksdhlk23",
            txn: "asdhoqiu31h312kjksdhlk23",
            status: true
          },
          {
            type: "Deposit",
            amount: "321.23",
            recip_send: "asdhoqiu31h312kjksdhlk23",
            txn: "asdhoqiu31h312kjksdhlk23",
            status: true
          },
          {
            type: "Withdraw",
            amount: "32121",
            recip_send: "asdhoqiu31h312kjksdhlk23",
            txn: "asdhoqiu31h312kjksdhlk23",
            status: true
          },
          {
            type: "Withdraw",
            amount: "32.21",
            recip_send: "asdhoqiu31h312kjksdhlk23",
            txn: "asdhoqiu31h312kjksdhlk23",
            status: true
          },
          {
            type: "Deposit",
            amount: "32121",
            recip_send: "asdhoqiu31h312kjksdhlk23",
            txn: "asdhoqiu31h312kjksdhlk23",
            status: true
          },
          {
            type: "Withdraw",
            amount: "321.21",
            recip_send: "asdhoqiu31h312kjksdhlk23",
            txn: "asdhoqiu31h312kjksdhlk23",
            status: true
          },
          {
            type: "Withdraw",
            amount: "32123",
            recip_send: "asdhoqiu31h312kjksdhlk23",
            txn: "asdhoqiu31h312kjksdhlk23",
            status: false
          },
          {
            type: "Deposit",
            amount: "321.23",
            recip_send: "asdhoqiu31h312kjksdhlk23",
            txn: "asdhoqiu31h312kjksdhlk23",
            status: false
          }
        ]
      }
    },
    activePage: {
      name: "Crypto",
      urlpath: "crypto",
      tabs: [
        { name: "Balances", urlpath: "balances" },
        { name: "Deposit", urlpath: "deposit" },
        { name: "Withdraw", urlpath: "withdraw" },
        {
          name: "Transaction History",
          urlpath: "transactionhistory",
          data: {
            transactions: [
              {
                type: "Withdraw",
                amount: "32121",
                recip_send: "asdhoqiu31h312kjksdhlk23",
                txn: "asdhoqiu31h312kjksdhlk23",
                status: true
              },
              {
                type: "Deposit",
                amount: "321.23",
                recip_send: "asdhoqiu31h312kjksdhlk23",
                txn: "asdhoqiu31h312kjksdhlk23",
                status: true
              },
              {
                type: "Withdraw",
                amount: "32121",
                recip_send: "asdhoqiu31h312kjksdhlk23",
                txn: "asdhoqiu31h312kjksdhlk23",
                status: true
              },
              {
                type: "Withdraw",
                amount: "32.21",
                recip_send: "asdhoqiu31h312kjksdhlk23",
                txn: "asdhoqiu31h312kjksdhlk23",
                status: true
              },
              {
                type: "Deposit",
                amount: "32121",
                recip_send: "asdhoqiu31h312kjksdhlk23",
                txn: "asdhoqiu31h312kjksdhlk23",
                status: true
              },
              {
                type: "Withdraw",
                amount: "321.21",
                recip_send: "asdhoqiu31h312kjksdhlk23",
                txn: "asdhoqiu31h312kjksdhlk23",
                status: true
              },
              {
                type: "Withdraw",
                amount: "32123",
                recip_send: "asdhoqiu31h312kjksdhlk23",
                txn: "asdhoqiu31h312kjksdhlk23",
                status: false
              },
              {
                type: "Deposit",
                amount: "321.23",
                recip_send: "asdhoqiu31h312kjksdhlk23",
                txn: "asdhoqiu31h312kjksdhlk23",
                status: false
              }
            ]
          }
        }
      ]
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*
STATE:
{
  user: {
    id: 0,
    username: "fsdj",
    name: "Michael Colt",
    email: ""
  },
  logged: true,
  pages: [
    {
      name: "",
      urlpath: "",
      tabs: []
    }
  ],
  activePage: {},
  activeTab: {}
}


PAGE:
{
  name: "",
  urlpath: "",
  tabs: []
}

TAB:
{
  name: "",
  urlpath: "",
  data: {}
}
*/
