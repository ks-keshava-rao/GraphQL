import UsersListData from "../MockData.mjs"

const resolvers = {
    Query : {
        users(){
            return UsersListData;
        }
    }
}

export default resolvers;