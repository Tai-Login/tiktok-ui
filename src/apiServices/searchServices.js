import * as request from '~/utils/request'

export const search = async (q, type = 'less') => {
    const response = await request.get('users/search', { params: { q, type } })

    if (response && response.data) return response.data

    return response
}
