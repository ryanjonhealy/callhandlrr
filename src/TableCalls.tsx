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

export const TableComponent: React.FunctionComponent<ITableComponentProps> = (
  props: React.PropsWithChildren<ITableComponentProps>
) => {

  const [data, setData] = React.useState([]);

  const useToggle = (initialState: any) => {
    const [isToggled, setIsToggled] = React.useState(initialState);

    const toggle = React.useCallback(
      () => setIsToggled((state: any) => !state),
      [setIsToggled]
    );

    return [isToggled, toggle];
  };
  const [showData, setshowData] = useToggle(false);
  //const presence = props.person.presence;

  const AddDataRow = async (newData: any) => {
    console.log("Adding", newData);
  };

  const UpdateDataRow = async (newData: any) => {
    console.log("Updating", newData);
  };

  const DeleteDataRow = async (newData: any) => {
    console.log("Updating", newData);
  };

  //fetch customer data
  const loadData = async () => {
    await new services()
      .getCustomerCalls(props.Customer.id)
      .then((response: any) => {
        console.log("🚀 ~ response", response);

        let dataSet: any = [];

        response.forEach((element: any) => {
          dataSet.push({
            id: element.id,
            status: element.status.description,
            application: element.application.name,
            description: element.description,
          });
        });

        setData(dataSet);
        setshowData();
      });
  };

  useEffect(() => {
    if (!showData) loadData();
  }, [showData]);

  return (
    <>
      {}
      <div className={"Tablehost"}>
        <MaterialTable
          title={props.Customer.name + " - Calls"}
          options={{
            pageSize: 10,
          }}
          columns={[
            { title: "Call Id", field: "id" },
            { title: "Status", field: "status" },
            { title: "Application", field: "application" },
            { title: "Description", field: "description" },
          ]}
          data={data}
          editable={{
            onRowUpdate: (newData, oldData: any) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  //dataUpdate[index] = newData;
                  setData([...dataUpdate]);
                  UpdateDataRow(newData);

                  resolve(true);
                }, 1000);
              }),
          }}
        />
      </div>
    </>
  );
};
