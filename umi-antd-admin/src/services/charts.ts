import request from '@/utils/request';


export const lineService = async (params) => {
    return await request('/api/line',{
        data: params
    });
}