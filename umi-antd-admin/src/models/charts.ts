import { lineService } from '@/services/charts'
export default {
    state: {
        line: []
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