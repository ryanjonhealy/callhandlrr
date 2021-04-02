import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import SaveIcon from "@material-ui/icons/Save";

import * as React from "react";
import styles from "./Component.module.scss";
import { Customer, Status, Call, Stats, Application } from "./objects";
import { services } from "./services";
import { TableComponent } from "./TableCalls";
import { StatsTableComponent } from "./TableStats";
import { AppsTableComponent } from "./TableApps";
import { Button, Typography } from "@material-ui/core";

export interface ICustomerProps {
  Customer: Customer;
}

export interface ICustomerState {
  Customer?: Customer;
  showData: boolean;
  showData2: boolean;
  showData3: boolean;
  data?: any;
}


//Show customer content
export default class CustomerComponent extends React.Component<
  ICustomerProps,
  ICustomerState
> {
  constructor(props: ICustomerProps, state: ICustomerState) {
    super(props);

    this.state = {
      showData: false,
      showData2: false,
      showData3: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  //Toggle Calls Table visibility
  public async handleClick(e: any) {
    e.preventDefault();
    console.log("The link was clicked.");

    this.setState((prevState) => ({
      showData: !prevState.showData,
      showData2: false,
      showData3: false,
    }));
    console.log("🚀 ~ this.state", this.state);
    //});
  }

  //Toggle Stats Table visibility
  public async handleClick2(e: any) {
    e.preventDefault();
    console.log("link 2 was clicked.");

    this.setState((prevState) => ({
      showData2: !prevState.showData2,
      showData: false,
      showData3: false,
    }));
    console.log("🚀 ~ this.state", this.state);
    //});
  }

  //Toggle Apps Table visibility
  public async handleClick3(e: any) {
    e.preventDefault();
    console.log("link 3 was clicked.");

    this.setState((prevState) => ({
      showData3: !prevState.showData3,
      showData2: false,
      showData: false,
    }));
    console.log("🚀 ~ this.state", this.state);
    //});
  }

  public render(): React.ReactElement<ICustomerProps> {
    return (
      <div className="Customer">
        <div className="customerName">
          <Typography variant="h5" component="h2">
            {this.props.Customer.name}
          </Typography>
        </div>
        <div className="actionButtons">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            {!this.state.showData ? "View Calls" : "Hide Calls"}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick2}
          >
            {!this.state.showData2 ? "View Stats" : "Hide Stats"}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleClick3}
          >
            {!this.state.showData3 ? "View Apps" : "Hide Apps"}
          </Button>
        </div>
        {this.state.showData == true ? (
          <TableComponent Customer={this.props.Customer}></TableComponent>
        ) : (
          <div></div>
        )}
        {this.state.showData2 == true ? (
          <StatsTableComponent
            Customer={this.props.Customer}
          ></StatsTableComponent>
        ) : (
          <div></div>
        )}

        {this.state.showData3 == true ? (
          <AppsTableComponent
            Customer={this.props.Customer}
          ></AppsTableComponent>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
