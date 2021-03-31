export interface Customer {
  id: string;
  name: string;
}

export interface Application {
  id: string;
  name: string;
  description: string;
  installationDate: string;
  hasSupportContract: string;
  customer: Customer;
}

export interface Status {
  id: string;
  description: string;
}


export interface Call {
  id: string;
  description: string;
  customer: Customer;
  application: Application;
  status: Status;
}

	
export interface Stats {
  id: number,
  openCalls: {
    totalCalls: number,
    responded: number,
    awaitingResponse: number
  },
  closedCalls: {
    totalCalls: number,
    satisfactory: number,
    unsatisfactory: number
  },
  lastThreeMonths: {
    month1: number,
    month2: number,
    month3: number
  },
  customer: Customer
 }
