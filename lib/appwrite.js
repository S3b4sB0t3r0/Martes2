import { Client, Account, ID } from "react-native-appwrite";

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'co.edu.sena',
    projectId: '66c515e2003cd492e3ef',
    databaseId: '66c516540026d3a91bc4',
    userCollectionId: '66c5166c00294d2394f5',
    videoCollectionId: '66c5168a000fd5dfbdd1',
    storageId: '66c4f6fd001979994ad5'
}

const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId); 

const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}
