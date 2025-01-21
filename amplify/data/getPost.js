//step4にて追加。
//import * as ddb from "@aws-appsync/utils/dynamodb";

//export function request(ctx) {
  //return ddb.get({ key: { Device: ctx.args.Device } });
//}
//export const response = (ctx) => ctx.result;



import { util } from '@aws-appsync/utils';

export function request(ctx) {
  const { owner } = ctx.args;
  return {
    operation: 'Query',
    query: {
      expression: 'ownerId = :ownerId',
      expressionValues: util.dynamodb.toMapValues({ ':ownerId': owner })
    },
    index: 'Controller-index'
  };
}