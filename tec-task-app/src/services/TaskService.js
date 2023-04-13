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
query getTasks {
  getTasks {
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
mutation updateAvatar($file: Upload){
  updateAvatar(file: $file){
    status,
    urlAvatar
  }
}
`;
