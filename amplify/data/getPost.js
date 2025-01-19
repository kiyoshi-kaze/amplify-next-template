//step4にて追加。
import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
  return ddb.get({ key: { author: ctx.args.author } });
}

export const response = (ctx) => ctx.result;