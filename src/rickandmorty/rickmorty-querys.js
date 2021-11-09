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
      episode {
        name
      }
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
export const ESPESIFIC_CHAR = gql`
  query ($name: String!, $page: Int!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
      }
      results {
        id
        name
        status
        image
        gender
        episode {
          name
        }
      }
    }
  }
`;
