/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryGameBySlug
// ====================================================

export interface QueryGameBySlug_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryGameBySlug_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryGameBySlug_games {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryGameBySlug_games_cover | null;
  developers: QueryGameBySlug_games_developers[];
  price: number;
}

export interface QueryGameBySlug {
  games: QueryGameBySlug_games[];
}

export interface QueryGameBySlugVariables {
  slug: string;
}
