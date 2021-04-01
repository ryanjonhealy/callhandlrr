import fetchJsonp from "fetch-jsonp";
import { Customer, Status, Call, Stats, Application } from "./objects";

export class services {
  public async getAllCustomers(): Promise<any> {
    let data;
    let test;

    //

    return await fetch(
      "http://localhost:8010/proxy/api/Customer"
      // "https://techtestcalllogapi.azurewebsites.net/api/Customer"
      //,  { mode: "cors" }
      //   headers: {
      //     "Access-Control-Allow-Origin": '*',
      //    "Content-Type": "application/json"
      //    }
      // }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("🚀 ~ data", data);

        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public async getCustomer(customerId?: string): Promise<any> {
    await fetch(
      "https://techtestcalllogapi.azurewebsites.net/api/Customer/" + customerId
      //   { mode: "no-cors" }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("🚀 ~ data", data);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });

    return;
  }

  public async getCustomerCalls(customerId?: string): Promise<any> {
    let data;
    let test;
    //
    return await fetch(
      "http://localhost:8010/proxy/api/Call/customer/" + customerId
      // "https://techtestcalllogapi.azurewebsites.net/api/Customer"
      //,  { mode: "cors" }
      //   headers: {
      //     "Access-Control-Allow-Origin": '*',
      //    "Content-Type": "application/json"
      //    }
      // }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("🚀 ~ data", data);

        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public async UpdateCall(data: any): Promise<any> {
    let id = data.id;
    let app = data.application;
    let desc = data.description;
    let status = data.status;

    return await fetch(
      "http://localhost:8010/proxy/api/Call/customer/" + id
      // "https://techtestcalllogapi.azurewebsites.net/api/Customer"
      //,  { mode: "cors" }
      //   headers: {
      //     "Access-Control-Allow-Origin": '*',
      //    "Content-Type": "application/json"
      //    }
      // }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("🚀 ~ data", data);

        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
