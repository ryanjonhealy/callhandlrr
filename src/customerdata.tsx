import * as React from 'react';
import styles from './Component.module.scss';
import { Customer, Status, Call, Stats, Application } from "./objects";


export interface ICustomerProps {
    Customer:Customer;
}

export interface ICustomerDataState {
    Customer:Customer;

}

export default class CustomerData extends React.Component<ICustomerProps, ICustomerDataState> {
  
    constructor(props: ICustomerProps) {
      super(props);   
      
    }
    
  
    public render(): React.ReactElement<ICustomerProps> {
    
    
    
    return (
      <div className="Customer">
          {this.props.Customer.name}
      </div>
    );
  }
}
