import MaterialTable from "material-table";


import * as React from "react";
import styles from "./Component.module.scss";
import { Customer, Status, Call, Stats, Application } from "./objects";
import { services } from "./services";
import { useEffect } from "react";

export interface IAppsComponentProps {
  Customer: Customer;
  data?: any;
}

export const AppsTableComponent: React.FunctionComponent<IAppsComponentProps> = (
  props: React.PropsWithChildren<IAppsComponentProps>
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
  const AddDataRow = async (newData: any) => {
    console.log("Adding", newData);
  };

  //updadte edited support contract
  const UpdateDataRow = async (newData: any) => {
    let name = newData.name;
    let desc = newData.description;
    let hasSupportContract = newData.hasSupportContract;
    let customerId = props.Customer.id;
    await new services()

      .updateCustomerApps(name, hasSupportContract, desc, customerId)
      .then((response: any) => {
        console.log("🚀 ~ response", response);
      });

    console.log("Updating", newData);
  };

  const DeleteDataRow = async (newData: any) => {
    console.log("Updating", newData);
  };

  const loadData = async () => {
    await new services()
      .getCustomerApps(props.Customer.id)
      .then((response: any) => {
        console.log("🚀 ~ response", response);

        let dataSet: any = [];

        response.forEach((element: any) => {
          var date = new Date(element.installationDate).toLocaleDateString();

          dataSet.push({
            id: element.id,
            name: element.name,
            hasSupportContract: element.hasSupportContract,
            installationDate: date,
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
          title={props.Customer.name + " - Applications"}
          options={{
            pageSize: 5,
          }}
          columns={[
            { title: "Application", field: "name" },
            { title: "Support Contract?", field: "hasSupportContract" },
            { title: "Installation Date", field: "installationDate" },

            { title: "Application Type", field: "description" },
          ]}
          data={data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);
                  AddDataRow(newData);
                  resolve(true);
                }, 1000);
              }),
            onRowUpdate: (newData, oldData: any) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
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
