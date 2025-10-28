export type Shelter = {
  id: number;
  name: string;
};

export type SheltersResponse = {
  shelters: Shelter[];
};

export type SheltersQueryParams = {
  search?: string;
};

export type Contributor = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type ContributeRequest = {
  contributors: Contributor[];
  shelterID?: number;
  value: number;
};

export type MessageType = 'SUCCESS' | 'ERROR' | 'INFO';

export type ResponseMessage = {
  message: string;
  type: MessageType;
};

export type ContributeResponse = {
  messages: ResponseMessage[];
};
