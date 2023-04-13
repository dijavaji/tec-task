import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {createUploadLink} from "apollo-upload-client";

//const httpLik = createHttpLink cambio agregando dependencia para que reciba toda la data de la img
const httpLik = createUploadLink(
  {uri: "http://127.0.0.1:4000/",}
);

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: httpLik
});

export default client;
