export interface IRenderAccountProps {
  account: AccountType;
}

export interface IRenderStatusProps {
  status: string;
}

export interface IDataSourceJob {
  id: number;
  campaign: string;
  accounts: AccountType[];
  methodCampaign: {
    id: string;
    label: string;
  };
  resultProcess: {
    countSuccess: number;
    target: number;
  };
  status: string;
  options: ActionType[];
}

export type ActionType = {
  title: string;
  id: string;
  status: boolean;
};

export type AccountType = {
  id: number;
  name: string;
  avatar: string;
  phone: string;
};

export type PhoneType = {
  id: number;
  phone: string;
  isValid: boolean;
};
