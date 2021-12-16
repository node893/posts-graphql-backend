const {buildSchema} = require('graphql');

module.exports = buildSchema(`

    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        status: String!
        posts: [Post!]!
    }

    type AuthData {
        token: String!
        userId: String!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    type PostData {
        posts: [Post!]!
        totalPosts: Int!
    }

    input postInputData {
        title: String!
        imageUrl: String!
        content: String!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
        createPost(postInput: postInputData): Post!
        updatePost(id: ID!, postInput: postInputData): Post!
        deletePost(id: ID!): Boolean
        updateStatus(status: String!): User!
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        getPosts(page: Int!): PostData!
        getPost(id: ID!): Post!
        user: User!
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);