import { createRequest } from './request'

export const request = createRequest({ baseURL: 'v1', timeout: 5000 })

export const mockRequest = createRequest({ baseURL: '/mock' });