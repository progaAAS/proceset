import { gql } from "apollo-boost";

export const EDITUSER = gql`mutation editUser( $id: Int! ,$email: String!, $firstName: String!, $secondName: String!,  $password: String) {
    editUser( id: $id, email: $email, firstName: $firstName, secondName: $secondName,  password: $password){
      firstName
      secondName
      email
 	 }
  }`