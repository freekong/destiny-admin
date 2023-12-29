import { mockRequest } from "../request";

export function apiMemberList(params: Member.FetchParams) {
  return mockRequest.get<{ total: number, memberList: Member.Member[]}>('/member', {
    params
  })
}

export function apiAddMember(data: Member.Member) {
  return mockRequest.post('/member', data)
}

export function apiEditMember(data: Member.Member) {
  return mockRequest.put('/member', data)
}

export function apideleteMember(params: { ids: string }) {
  return mockRequest.delete('/member', {
    params
  })
}