import { gql } from 'apollo-boost';


const GET_CATEGORIES = gql`
  {
    categories
  }
`;

const GET_JOKE = gql`
  query Joke($category: String!){
    jokes(category: $category) {
      id,
      value,
      categories,
      icon_url,
      url,
    }
  }
`;

export {
  GET_CATEGORIES,
  GET_JOKE
};