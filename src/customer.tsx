import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import SaveIcon from "@material-ui/icons/Save";

import * as React from "react";
import styles from "./Component.module.scss";
import { Customer, Status, Call, Stats, Application } from "./objects";
import { services } from "./services";
import { TableComponent } from "./table";

export interface ICustomerProps {
  Customer: Customer;
}

export interface ICustomerState {
  Customer?: Customer;
  showData: boolean;
  data?: any;
}

export default class CustomerComponent extends React.Component<
  ICustomerProps,
  ICustomerState
> {
  //private services: services = new services();

  constructor(props: ICustomerProps, state: ICustomerState) {
    super(props);

    this.state = {
      showData: false,
    };

    this.handleClick = this.handleClick.bind(this);

    console.log("🚀 ~  this.state", this.state);
  }

  public async handleClick(e: any) {
    e.preventDefault();
    console.log("The link was clicked.");

    // await this.services
    //   .getCustomerCalls(this.props.Customer.id)
    //   .then((response) => {
    //     console.log("🚀 ~ response", response);

    //     let dataSet: any[] = [];

    //     response.forEach((element: any) => {
    //       dataSet.push({
    //         id: element.id,
    //         status: element.status.description,
    //         application: element.application.name,
    //         description: element.description,
    //       });
    //     });

    //     this.setState({
    //       data: dataSet,
    //     });
        this.setState((prevState) => ({
          showData: !prevState.showData,
        }));
        console.log("🚀 ~ this.state", this.state);
      //});
  }

 

  public render(): React.ReactElement<ICustomerProps> {
    return (
      <div className="Customer">
        <div className="customerName">{this.props.Customer.name}</div>
        <div className="actionButtons">
          <a onClick={this.handleClick}>View Calls</a>
        </div>
        {/* {this.Data()} */}
        {this.state.showData==true ? (

          <TableComponent
          Customer={this.props.Customer}
          
          ></TableComponent>
          ):(
            <div></div>
          )
        
        }
      </div>
    );
  }
}
