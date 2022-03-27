export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};


export type Query = {
  __typename?: 'Query';
  search: SearchResultItemConnection;
};

export type SearchResultItemConnection = {
  repositoryCount: Scalars['Int'];
  pageInfo: PageInfo;
  edges: Array<Repository>;
}

export type PageInfo = {
  endCursor: Scalars['String'];
  startCursor: Scalars['String'];
}


export interface Repository {
  __typename?: 'Repository',
  node: {
    description: Scalars['String'],
    name: Scalars['String'],
    homepageUrl: Scalars['String'],
    owner: User,
  }
};

export type User =  {
  login: Scalars['String'];
  avatarUrl: Scalars['String'];
}