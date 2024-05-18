export interface IRenderActionsProps {
  actions: ActionType[];
}

export interface IRenderAccountProps {
  account: AccountType;
}

export interface IRenderStatusProps {
  status: string;
}

export interface IDataSourcePost {
  id: number;
  title: string;
  account: {
    id: number;
    name: string;
    phone: string;
    avatar: string;
  };
  date: string;
  status: string;
  action: {
    title: string;
    id: string;
  }[];
}

export type ActionType = {
  title: string;
  id: string;
};

export type AccountType = {
  name: string;
  avatar: string;
  phone: string;
};
