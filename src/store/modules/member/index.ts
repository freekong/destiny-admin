import { apiAddMember, apiEditMember, apiMemberList, apideleteMember } from '@/service';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMemberStore = defineStore('member-store', () => {
  const memberLists = ref<Member.Member[]>([])
  const pageInfo = ref<Common.PageInfo>({
    pageSize: 5,
    page: 1,
    itemCount: 0
  })

  async function getMemberList() {
    let params: Member.FetchParams = {
      offset: pageInfo.value.pageSize * (pageInfo.value.page - 1),
      count: pageInfo.value.pageSize
    }
    const res = await apiMemberList(params)
    if (res.data) {
      const { memberList, total } = res.data
      memberLists.value = memberList
      pageInfo.value.itemCount = total
    }
    
  }

  function addMember(data: Member.Member, callback: Function) {
    apiAddMember(data).then(res => {
      const { error } = res
      if (!error) {
        window.$message?.success('添加成功！')
        callback()
      } else {
        window.$message?.error(error.msg)
      }
    })
  }

  function editMember(data: Member.Member, callback: Function) {
    apiEditMember(data).then(res => {
      const { error } = res
      if (!error) {
        window.$message?.success('修改成功！')
        callback()
      } else {
        window.$message?.error(error.msg)
      }
    })
  }

  function deleteMembers(ids: number[]) {
    let idsStr = ids.join(',')
    apideleteMember({ ids: idsStr }).then(res => {
      const { error } = res
      if (!error) {
        window.$message?.success('删除成功！')
        getMemberList()
      } else {
        window.$message?.error(error.msg)
      }
    })
  }

  function changePage(page: number) {
    pageInfo.value.page = page
    getMemberList()
  }

  return {
    memberLists,
    pageInfo,
    getMemberList,
    changePage,
    addMember,
    editMember,
    deleteMembers,
  }
})