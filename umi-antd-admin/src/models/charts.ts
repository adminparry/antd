import { lineService ,pieService} from '@/services/charts'
export default {
    state: {
        line: [],
        pie: [],
        
    },
    namespace: 'charts',
    effects: {
        * chartLine({ payload }, { call, put, select }) {
            const ret = yield call(lineService, payload);

            yield put({
                type: 'update',
                payload: {
                    line: ret
                }
            })
        },
        * chartPie({ payload }, { call, put, select }) {
            const ret = yield call(pieService, payload);

            yield put({
                type: 'update',
                payload: {
                    pie: ret
                }
            })
        }
    },
    reducers: {
        update(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        }
    }
}