# Astronomer Code Challenges

This challenge tests capabilities of using GraphQL do develop an API.

# Astronomer GraphQL Code Challenge

Start your GraphQL server to make sure everything is working in your local environment.

## System Requirements:

<<<<<<< HEAD
- [NPM & Node](https://nodejs.org/en/download/)
=======
>>>>>>> parent of 2098dc9... Update README.me

**Please run all using the latest node version**

- NPM & Node
- Yarn

<<<<<<< HEAD
1. `$ npm install`
2. `$ npm start`

GraphQL Playground is available @ `http://localhost:4000`

#### Example Queries

Here are some examples to get you started. Feel free to play around with them and get creative.

##### Get all deployed applications

```graphql
query {
  deployedApplications {
    id
    name
    description
    applicationUrl
  }
}
```

##### Add a new deployed application

```graphql
mutation {
  addDeployedApplication(name: "That is so shway!", description: "Nora West-Allen") {
    id
  }
}
```

##### Update a deployed application

```graphql
mutation {
  editDeployedApplication(id: "4ef19b4b-0348-45a5-9a9f-6f68ca9a62e6", name: "XS") {
    name
    description
    applicationUrl
    status
  }
}
```

##### Delete a deployed application

```graphql
mutation {
  deleteDeployedApplication(id: "4ef19b4b-0348-45a5-9a9f-6f68ca9a62e6") {
    name
    description
    applicationUrl
    status
  }
}
```

=======
## Installation + Local Dev:

1. Run `yarn install`
2. Run `yarn start`

API is available @ `http://localhost:4000`
>>>>>>> parent of 2098dc9... Update README.me
## Logistics

1. Fork this repository.
2. When completed, email your recruiter a link to your repository.

Please make a private forked repository, and work with your recruiter to add the correct team member as a collaborator, so they can review the challenge. <br />

Happy coding!
