import { gql } from "@apollo/client";

export const ALL_CHAR = gql`
  query {
    characters {
      results {
        name
        gender
        id
        status
        image
      }
    }
    episodes {
      results {
        name
      }
    }
  }
`;

export const FIND_ONE_PERSON = gql`
  query ($id: ID!) {
    character(id: $id) {
      name
      image
      status
      type
      origin {
        name
      }
      location {
        name
      }
      species
    }
  }
`;
