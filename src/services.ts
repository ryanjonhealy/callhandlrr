import { Customer, Status, Call, Stats, Application } from "./objects";

export class services {
  public async getAllCustomers(): Promise<any> {
    let data;
    let test;


    //

    return await fetch(
       // "http://localhost:8010/proxy/api/Customer"
        "https://techtestcalllogapi.azurewebsites.net/api/Customer"
        , {
        //mode:'cors',

    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    })
      .then((res) => 
        
        res.json()
        
        
      )
      .then((data) => {
        console.log("🚀 ~ data", data);

        return data;
      })
      .catch((error) => {
        console.log(error);
      });
    ;
  }

  public async getCustomer(customerId?: number): Promise<any> {
    await fetch(
      "https://techtestcalllogapi.azurewebsites.net/api/Customer/" + customerId,
      { mode: "no-cors" }
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





}
