import { ChatModel } from './utils';
import { ChatBody, ChatResp } from '../interface';
export declare class ChatCompletion {
    private API_KEY;
    private SECRET_KEY;
    private Type;
    private headers;
    private axiosInstance;
    access_token: string;
    expires_in: number;
    /**
     * 千帆大模型
     * @param API_KEY API Key，IAM、AK/SK 鉴权时必填
     * @param SECRET_KEY Secret Key，IAM、AK/SK 鉴权时必填
     * @param Type 鉴权方式，默认IAM鉴权，如果使用AK/SK鉴权，请设置为'AK'
     */
    constructor(API_KEY: string, SECRET_KEY: string, Type?: string);
    /**
     * 发送请求
     *
     * @param model 聊天模型
     * @param body 请求体
     * @param stream 是否开启流式处理
     * @returns 返回聊天响应
     */
    private sendRequest;
    /**
     * 聊天函数
     *
     * @param body 聊天内容
     * @param model 聊天模型，默认为 ERNIE-Bot-turbo
     * @returns 返回聊天响应的 Promise
     */
    chat(body: ChatBody, model?: ChatModel): Promise<ChatResp>;
}
export default ChatCompletion;
