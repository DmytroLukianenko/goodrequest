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
