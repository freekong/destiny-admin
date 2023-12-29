<script setup lang='tsx' name="list" >
import { h, onMounted, ref } from "vue";
import { useMemberStore } from '@/store'
import { storeToRefs } from "pinia";
import { DataTableColumns, DataTableRowKey, NButton, NSpace, NText } from "naive-ui";
import memberModal from './components/member-modal.vue'

const { getMemberList, changePage, deleteMembers } = useMemberStore()
const { memberLists, pageInfo } = storeToRefs(useMemberStore())

const memberModalVisible = ref<boolean>(false)
const memberModalType = ref<Common.ModalType>('add')
const editInfo = ref<Member.Member | null>(null)
const selectedMemberIds = ref<number[]>([])

const columns = createColumns({
  openEditMember,
  deleteMember
})

function createColumns({
  openEditMember,
  deleteMember
}: {
  openEditMember: (row: Member.Member) => void;
  deleteMember: (row: Member.Member) => void;
}): DataTableColumns<Member.Member> {
  return [
    {
      type: 'selection'
    },
    {
      title: '姓名',
      key: 'name',
      align: 'center'
    },
    {
      title: '性别',
      key: 'gender',
      align: 'center',
      render(row) {
        return h(
          NText,
          null,
          {
            default: () => row.gender === 'male' ? '男' : '女'
          }
        )
      }
    },
    {
      title: '年龄',
      key: 'age',
      align: 'center'
    },
    {
      title: '电话',
      key: 'phone',
      align: 'center'
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (row) => {
        return (
          <NSpace justify={'center'}>
            <NButton size={'small'} onClick={() => openEditMember(row)}>修改</NButton>
            <NButton size={'small'} onClick={() => deleteMember(row)}>删除</NButton>
          </NSpace>
        )
      }
    }
  ]
}

function openAddMember() {
  memberModalType.value = 'add'
  memberModalVisible.value = true
}

function openEditMember(row: Member.Member) {
  memberModalType.value = 'edit'
  editInfo.value = JSON.parse(JSON.stringify(row))
  memberModalVisible.value = true
}

function deleteMember(row: Member.Member) {
  const ids = [row.id]
  deleteMembers(ids)
}

function batchDelete() {
  deleteMembers(selectedMemberIds.value)
}

const rowKey = (row: Member.Member) => row.id

function handleMemberCheck(rowKeys: DataTableRowKey[]) {
  selectedMemberIds.value = rowKeys as number[]
}


onMounted(() => {
  getMemberList()
})

</script>
<template>
  <div>
    <n-space class="m-10px">
      <n-button type="primary" @click="openAddMember">新增人员</n-button>
      <n-button type="primary" @click="batchDelete">批量删除</n-button>
    </n-space>
    <n-data-table
      remote
      :data="memberLists"
      :columns="columns"
      :pagination="pageInfo"
      :row-key="rowKey"
      @update:checked-row-keys="handleMemberCheck"
      @update:page="changePage"
    ></n-data-table>
    <member-modal v-model:visible="memberModalVisible" :type="memberModalType" :edit-info="editInfo" />
  </div>
</template>
<style scoped lang='scss'>

</style>