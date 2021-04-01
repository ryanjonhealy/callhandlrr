import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import SaveIcon from "@material-ui/icons/Save";

import * as React from "react";
import styles from "./Component.module.scss";
import { Customer, Status, Call, Stats, Application } from "./objects";
import { services } from "./services";
import { useEffect } from "react";



export interface ITableComponentProps { 
  Customer: Customer;
  data?: any;
  
}



export const StatsTableComponent: React.FunctionComponent<ITableComponentProps> = (props: React.PropsWithChildren<ITableComponentProps>) => {
  //const services = new services();

  const [data, setData] = React.useState([]);

  const useToggle = (initialState:any) => {
    const [isToggled, setIsToggled] = React.useState(initialState);

    // put [setIsToggled] into the useCallback's dependencies array
    // this value never changes so the callback is not going to be ever re-created
    const toggle = React.useCallback(() => setIsToggled((state:any) => !state), [
      setIsToggled,
    ]);

    return [isToggled, toggle];
  };
  const [showData, setshowData] = useToggle(false);
  //const presence = props.person.presence;

  
  const AddDataRow = async (newData:any) =>{

    console.log("Adding",newData);


  }

  const UpdateDataRow= async (newData:any) =>{

    console.log("Updating",newData)
  }

  const DeleteDataRow= async (newData:any) =>{

    console.log("Updating",newData)

  }



   const loadData = async () =>{
    
    await new services()
      .getCustomerStats(props.Customer.id)
      .then((response:any) => {
        console.log("🚀 ~ response", response);

          let element =response;
       
        let dataSet: any = [];

       
          dataSet.push({
            id: element.id,
            openCallsTotal: element.openCalls.totalCalls,
            openCallsresponded: element.openCalls.responded,
            openCallsawaitingResponse: element.openCalls.awaitingResponse,
            closedCallsTotal: element.closedCalls.totalCalls,
            closedCallssatisfactory: element.closedCalls.satisfactory,
            closedCallsunsatisfactory: element.closedCalls.unsatisfactory,
            month1: element.lastThreeMonths.month1,
            month2: element.lastThreeMonths.month2,
            month3: element.lastThreeMonths.month3,
            
          });
       

        setData(dataSet);
        setshowData();
      });
  }

useEffect(() => {
  
  if(!showData)
  loadData();

},[showData]);




  return (
    <>
  {}
        <div className={"Tablehost"}>
          <MaterialTable
            title={props.Customer.name + " - Statistics"}
            //icons={tableIcons}
            options={{
               // paging:false,
                pageSize: 1,

            }}
            columns={[
             // { title: "Call Id", field: "id" },
              { title: "Open - Total", field: "openCallsTotal" },
              { title: "Open - Responded", field: "openCallsresponded" },
              { title: "Open - Awaiting Response", field: "openCallsawaitingResponse" },
              
              { title: "Closed - Total", field: "closedCallsTotal" },
              { title: "Closed - Satisfactory", field: "closedCallssatisfactory" },
              { title: "Closed - Unsatisfactory", field: "closedCallsunsatisfactory" },
              
              { title: "Month1", field: "month1" },
              { title: "Month2", field: "month2" },
              { title: "Month3", field: "month3" },

            
            ]}
            data=
            {data}
            // {[
            //   {
            //     status: "Mehmet",
            //     application: "Baran",
            //     description: 1987,
            //     birthCity: 63,
            //   },
            //   {
            //     name: "Zerya Betül",
            //     surname: "Baran",
            //     birthYear: 2017,
            //     birthCity: 34,
            //   },
            // ]}
            // actions={[

            //   {
            //     icon: 'edit',
            //     tooltip: 'update status',
            //     onClick: (event, rowData) => 
            //     new Promise((resolve, reject) => {
            //           setTimeout(() => {
            //             //const dataUpdate = [...data];
            //             //const index = oldData.tableData.id;
            //             //dataUpdate[index] = newData;
            //             //setData([...dataUpdate]);
            //             UpdateDataRow(rowData)
    
            //             resolve(true);
            //           }, 1000);
            //         }),
                
                
            //   },

            // ]}
            // editable={{
            //   // onRowAdd: (newData) =>
            //   //   new Promise((resolve, reject) => {
            //   //     setTimeout(() => {
            //   //        setData([...data, newData]);
            //   //        AddDataRow(newData);
            //   //        resolve(true);
            //   //     }, 1000);
            //   //   }),
            //   onRowUpdate: (newData, oldData:any) =>
            //     new Promise((resolve, reject) => {
            //       setTimeout(() => {
            //         const dataUpdate = [...data];
            //         const index = oldData.tableData.id;
            //         //dataUpdate[index] = newData;
            //         setData([...dataUpdate]);
            //         UpdateDataRow(newData);

            //         resolve(true);
            //       }, 1000);
            //     }),
            //   // onRowDelete: (someData) =>
            //   //   new Promise((resolve, reject) => {
            //   //     setTimeout(() => {
            //   //       const dataDelete = [...data];
            //   //       //const index = someData.tableData.id;
            //   //       console.log('🚀 ~ someData', someData);
            //   //       DeleteDataRow(someData);
                    
            //   //       //dataDelete.splice(index, 1);
            //   //       setData([...dataDelete]);
            //   //       resolve(true)
            //   //     }, 1000);
            //   //   }),
            // }}
          />
        </div>
      
    </>
  );
};




// export default class CustomerComponent extends React.Component<
//   ICustomerProps,
//   ICustomerState
// > {
//   private services: services = new services();

//   constructor(props: ICustomerProps, state: ICustomerState) {
//     super(props);

//     this.state = {
//       showData: false,
//     };

//     this.handleClick = this.handleClick.bind(this);

//     console.log("🚀 ~  this.state", this.state);
//   }

//   public async handleClick(e: any) {
//     e.preventDefault();
//     console.log("The link was clicked.");

//     await this.services
//       .getCustomerCalls(this.props.Customer.id)
//       .then((response) => {
//         console.log("🚀 ~ response", response);

//         let dataSet: any[] = [];

//         response.forEach((element: any) => {
//           dataSet.push({
//             id: element.id,
//             status: element.status.description,
//             application: element.application.name,
//             description: element.description,
//           });
//         });

//         this.setState({
//           data: dataSet,
//         });
//         this.setState((prevState) => ({
//           showData: !prevState.showData,
//         }));
//         console.log("🚀 ~ this.state", this.state);
//       });
//   }

//   Data = (isLoggedIn?: boolean) => {
//     if (this.state.showData) {
//       return (
//         <div className={"Tablehost"}>
//           <MaterialTable
//             title={this.props.Customer.name}
//             options={{
//                 paging:false,
//                 pageSize: 10,

//             }}
//             columns={[
//               { title: "Call Id", field: "id" },
//               { title: "Status", field: "status" },
//               { title: "Application", field: "application" },
//               { title: "Description", field: "description" },
//             ]}
//             data={this.state.data}
//             // {[
//             //   {
//             //     status: "Mehmet",
//             //     application: "Baran",
//             //     description: 1987,
//             //     birthCity: 63,
//             //   },
//             //   {
//             //     name: "Zerya Betül",
//             //     surname: "Baran",
//             //     birthYear: 2017,
//             //     birthCity: 34,
//             //   },
//             // ]}
//             editable={{
//               onRowAdd: (newData) =>
//                 new Promise((resolve, reject) => {
//                   setTimeout(() => {
//                     // setData([...data, newData]);
//                     // resolve();
//                   }, 1000);
//                 }),
//               onRowUpdate: (newData, oldData) =>
//                 new Promise((resolve, reject) => {
//                   setTimeout(() => {
//                     //const dataUpdate = [...data];
//                     //const index = oldData.tableData.id;
//                     //dataUpdate[index] = newData;
//                     //setData([...dataUpdate]);
//                     //resolve();
//                   }, 1000);
//                 }),
//               onRowDelete: (oldData) =>
//                 new Promise((resolve, reject) => {
//                   setTimeout(() => {
//                     //const dataDelete = [...data];
//                     //const index = oldData.tableData.id;
//                     //dataDelete.splice(index, 1);
//                     //setData([...dataDelete]);
//                     //resolve()
//                   }, 1000);
//                 }),
//             }}
//           />
//         </div>
//       );
//     } else {
//       return;
//     }
//   };

//   public render(): React.ReactElement<ICustomerProps> {
//     return (
//       <div className="Customer">
//         <div className="customerName">{this.props.Customer.name}</div>
//         <div className="actionButtons">
//           <a onClick={this.handleClick}>View Calls</a>
//         </div>
//         {this.Data()}
//       </div>
//     );
//   }
// }
