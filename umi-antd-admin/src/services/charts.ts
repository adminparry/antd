import request from '@/utils/request';


export const lineService = async (params) => {
    return await request('/api/line',{
        params
    });
}
export const pieService = async (params) => {
    return await request('/api/line/pie',{
        params
    });
}
