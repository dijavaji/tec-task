import {gql} from "@apollo/client";

export const REGISTER = gql`
mutation createTask($input: TaskInput) {
  createTask(input: $input) {
    id
    name
    description
    limitDate
    startTime
    finishTime
    remind
    repeat
    complete
    createAt
}
}
`;

export const GET_TASKS = gql`
query getTasks($id: ID) {
  getTasks(_id: $id) {
    id
    description
    limitDate
    startTime
    finishTime
    remind
    repeat
    complete
    createAt
    name
  }
}
`;

export const UPDATE_TASK = gql`
mutation updateTask($id:String!, $input: TaskUpdate!) {
  updateTask(_id: $id, input: $input) {
    id
    name
    description
    limitDate
    startTime
    finishTime
    remind
    repeat
    complete
    createAt
    modifiedBy
    modifiedDate
  }
}
`;
