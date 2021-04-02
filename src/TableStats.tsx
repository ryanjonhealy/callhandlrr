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

export const StatsTableComponent: React.FunctionComponent<ITableComponentProps> = (
  props: React.PropsWithChildren<ITableComponentProps>
) => {
  //const services = new services();

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

  const loadData = async () => {
    await new services()
      .getCustomerStats(props.Customer.id)
      .then((response: any) => {
        console.log("🚀 ~ response", response);

        let element = response;

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
  };

  useEffect(() => {
    if (!showData) loadData();
  }, [showData]);

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
            {
              title: "Open - Awaiting Response",
              field: "openCallsawaitingResponse",
            },

            { title: "Closed - Total", field: "closedCallsTotal" },
            {
              title: "Closed - Satisfactory",
              field: "closedCallssatisfactory",
            },
            {
              title: "Closed - Unsatisfactory",
              field: "closedCallsunsatisfactory",
            },

            { title: "Month1", field: "month1" },
            { title: "Month2", field: "month2" },
            { title: "Month3", field: "month3" },
          ]}
          data={data}
        />
      </div>
    </>
  );
};
