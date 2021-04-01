import { Customer, Status, Call, Stats, Application } from "./objects";

import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

import { services } from "./services";
import CustomerComponent from "./customer";

export interface appstate {
  Customers: Customer[];

  Calls: Call[];
}

export default class App extends Component {
  private services: services = new services();

  state = {
    Customers: [],
  };

  async componentDidMount() {
    await this.services.getAllCustomers().then((data) => {
      console.log("🚀 ~ data", data);

      this.setState({ Customers: data });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.Customers ? (
          this.state.Customers.map((item, index) => {
            console.log("🚀 ~ item", item);

            let name;
            if (item) {
              name = item["name"];
            } else {
              name = null;
            }

            return (
              <div>
                {/* <div>{name}</div> */}

                <CustomerComponent
                  Customer={item}
                ></CustomerComponent>
              </div>
            );
          })
        ) : (
          <div></div>
        )}

        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    );
  }
}
