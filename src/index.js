const { ApolloServer, gql } = require('apollo-server');
const uuid = require('uuid/v4');

const typeDefs = gql`
  type DeployedApplication {
    id: ID!
    name: String!
    description: String!
    applicationUrl: String!
    status: String
  }

  type Query {
    deployedApplications: [DeployedApplication]
  }

  type Mutation {
    addDeployedApplication(name: String!, description: String!, applicationUrl: String! ): DeployedApplication
    editDeployedApplication(id: ID!, name: String, description: String, applicationUrl: String): DeployedApplication
    deleteDeployedApplication(id: ID!): DeployedApplication
  }
`;

const deployedApplications = {};
const addDeployedApplication = deployedApplication => {
    const id = uuid();
    return deployedApplications[id] = { ...deployedApplication, status: 'active', id };
};

addDeployedApplication({ name: "Lorem ipsum.", description: "Wash" , applicationUrl: "www.wash.com" });
addDeployedApplication({ name: "Big bad wolf.", description: "The Doctor" , applicationUrl: "www.doctor.com" });
addDeployedApplication({ name: "Woah!", description: "Neo" , applicationUrl: "www.woah.com" });

const resolvers = {
    Query: {
        deployedApplications: () => Object.values(deployedApplications),
    },
    Mutation: {
        addDeployedApplication: async (parent, deployedApplication) => {

            return addDeployedApplication(deployedApplication);
        },
        editDeployedApplication: async (parent, { id, ...deployedApplication }) => {

            if (!deployedApplications[id]) {
                throw new Error("Deployed application doesn't exist");
            }

            deployedApplications[id] = {
                ...deployedApplications[id],
                ...deployedApplication,
            };

            return deployedApplications[id];
        },
        deleteDeployedApplication: async (parent, { id, ...deployedApplication }) => {

            if (!deployedApplications[id]) {
                throw new Error("Deployed application doesn't exist");
            }


            deployedApplications[id] = {
                ...deployedApplications[id],
                ...deployedApplication,
                status: 'archived'
            };

            return deployedApplications[id];
        },
    },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`); // eslint-disable-line no-console
});
