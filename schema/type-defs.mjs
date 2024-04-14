import { gql } from "apollo-server";
//extension -  apollo graphql 
const typeDefs = gql` 
    type User {
    id:ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
    friends:[User]
    }
    type Query{
        users : [User!]!
    }
    enum Nationality {
    ITALY
    SPAIN
    UK
    US 
    INDIA
    CHINA
    ARGENTINA
    FRANCE
    CANADA
}
`

export default typeDefs;