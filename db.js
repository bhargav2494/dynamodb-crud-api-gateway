import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
const client = new DynamoDBClient();

module.exports = client;