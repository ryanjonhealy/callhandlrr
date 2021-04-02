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


//Show Customer Name
export default class App extends Component {
  private services: services = new services();

  state = {
    Customers: [],
  };

  async componentDidMount() {
    await this.services.getAllCustomers().then((data) => {
      

      this.setState({ Customers: data });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.Customers ? (
          this.state.Customers.map((item, index) => {

            return (
              <div>
                <CustomerComponent
                  Customer={item}
                ></CustomerComponent>
              </div>
            );
          })
        ) : (
          <div></div>
        )}

      </div>
    );
  }
}
