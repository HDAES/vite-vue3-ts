/*
 * @Descripttion: 请求的加密
 * @Author: Hades
 * @Date: 2021-09-14 22:53:18
 */
  
import { AxiosRequestConfig } from 'axios';
import Md5 from 'md5'

export function setRequestConfig(config: AxiosRequestConfig) : AxiosRequestConfig{
    //获取当前时间
    const timestamp: Number = new Date().getTime()
    
    //当前api 版本
    const version = import.meta.env.VITE_API_VERSION

    config.headers['version'] = version
    config.headers['timestamp'] = timestamp
    config.headers['sign'] = setSign(config,timestamp)


    return config;
}

export function setSign(config: AxiosRequestConfig, timestamp: Number) : string{
    let str = ""
    if((config.method == "get" || config.method == "delete") && config.params){
        let keys = Object.keys(config.params).sort();
        for (let i = 0; i < keys.length; i++) {
            str += config.params[keys[i]];
        }
    }
    return Md5(str + Md5(timestamp.toString().substring(0, 8)) + timestamp)
}