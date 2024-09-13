


export default function apis<T>(name_space:string):Promise<T>{

const SystemInfo = Taro.getAccountInfoSync();

const env = SystemInfo.miniProgram.envVersion === 'release'?'pro':'dev';

const url = `/***?&name_space=${name_space}&en${env}`

const response = request({
    url,
    method:'GET'
}) as T;

return response as Promise<T>;



}