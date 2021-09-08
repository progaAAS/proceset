
import { gql } from "apollo-boost";

export default gql`
query currentUser{
    currentUser{
      id
      firstName
      secondName
      email
    }
  }
`;
