import * as dotenv from "dotenv";
import Completions from "../../src/Completions";

dotenv.config();
const API_KEY = process.env.API_KEY || '';
const SECRET_KEY = process.env.SECRET_KEY || '';
const IAM_ACESS_KEY = process.env.IAM_ACESS_KEY || '';
const IAM_SECRET_KEY = process.env.IAM_SECRET_KEY || '';
// AK/SK 测试
// const client = new Completions(API_KEY, SECRET_KEY, 'AK');
// IAM 测试
const client = new Completions(IAM_ACESS_KEY, IAM_SECRET_KEY);

async function main() {
    const resp = await client.completions({
        prompt: 'Introduce the city Beijing',
    }, "SQLCoder-7B");
    console.log('返回结果')
    console.log(resp);
}

main();