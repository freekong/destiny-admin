<script setup lang='ts'>
import { useMemberStore } from "@/store";
import { validatePhone } from "@/utils";
import { FormInst, FormRules } from "naive-ui";
import { watch } from "vue";
import { computed, reactive, ref } from "vue";

export interface Props {
  visible?: boolean,
  type: Common.ModalType,
  editInfo?: Member.Member | null
}
const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void
}>()

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  type: 'add',
  editInfo: null
})

const memberModalVisible = computed({
  get() {
    return props.visible
  },
  set(visible: boolean) {
    emit('update:visible', visible)
  }
})

const ModalTitle = computed(() => {
  const titles: Record<Common.ModalType, string> = {
    add: '新增成员',
    edit: '编辑成员'
  }
  return titles[props.type]
})

watch(() => props.visible, newValue => {
  if (newValue) {
    handleMemberVisibleShow()
  }
})

const memberFormRef = ref<FormInst | null>(null)

const memberRules: FormRules = {
  name: {
    required: true,
    message: '请输入姓名！',
    trigger: 'blur'
  },
  age: {
    type: 'number',
    required: true,
    message: '请输入年龄！',
    trigger: ['blur', 'change']
  },
  phone: [{
    required: true,
    validator: validatePhone,
    trigger: 'blur'
  }]
}
const genderOptions: Common.OptionWithKey<string>[] = [
  {
    value: 'male',
    label: '男'
  },
  {
    value: 'female',
    label: '女'
  }
]
const educationOptions: Common.OptionWithKey<string>[] = [
  {
    value: 'illiteracy',
    label: '文盲'
  },
  {
    value: 'primary',
    label: '小学'
  },
  {
    value: 'middle',
    label: '初中'
  },
  {
    value: 'high',
    label: '高中'
  },
  {
    value: 'technical',
    label: '专科'
  },
  {
    value: 'bachelor',
    label: '本科'
  },
  {
    value: 'master',
    label: '硕士'
  },
  {
    value: 'doctor',
    label: '博士'
  }
]

const { getMemberList, addMember, editMember } = useMemberStore()

let memberForm = reactive<Member.Member>(createDefaultMember())

function createDefaultMember(): Member.Member {
  return {
    id: 0,
    name: '',
    age: null,
    gender: 'male',
    height: 170,
    weight: 55,
    education: 'technical',
    phone: ''
  }
}

function handleMemberVisibleShow() {
  const handler: Record<Common.ModalType, () => void> = {
    add: () => {
      updateMemberForm();
    },
    edit: () => {
      if (props.editInfo) {
        updateMemberForm(props.editInfo)
      }
    }
  }
  handler[props.type]()
}

function updateMemberForm(formInfo: Member.Member = createDefaultMember()) {
  memberForm = Object.assign(memberForm, formInfo)
}

function confirmInfo() {
  memberFormRef.value?.validate((error) => {
    if (!error) {
      const handleConfirmMember: Record<Common.ModalType, () => void> = {
        add: () => {
          addMember(memberForm, closeMember)
        },
        edit: () => {
          editMember(memberForm, closeMember)
        }
      }
      handleConfirmMember[props.type]()
    }
  })
}

function closeMember() {
  memberModalVisible.value = false
  getMemberList()
}

</script>
<template>
  <n-modal
    v-model:show="memberModalVisible"
    preset="dialog"
    type="info"
    :title="ModalTitle"
    style="width: 550px;"
  >
    <div class="w-400px">
      <n-form 
        label-placement="left" 
        label-width="120px" 
        ref="memberFormRef"
        :model="memberForm" 
        :rules="memberRules" 
        size="small">
        <n-form-item label="姓名" path="name" >
          <n-input v-model:value="memberForm.name" class="w-220px"></n-input>
        </n-form-item>
        <n-form-item label="性别">
          <n-radio-group v-model:value="memberForm.gender">
            <n-space>
              <n-radio v-for="item in genderOptions" :key="item.value" :value="item.value">{{ item.label }}</n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
        <n-form-item label="年龄" path="age" >
          <n-input-number v-model:value="memberForm.age" style="width: 280px;"></n-input-number>
        </n-form-item>
        <n-form-item label="身高" path="height" >
          <n-input-number v-model:value="memberForm.height" style="width: 280px;"></n-input-number>
        </n-form-item>
        <n-form-item label="体重" path="weight" >
          <n-input-number v-model:value="memberForm.weight" style="width: 280px;"></n-input-number>
        </n-form-item>
        <n-form-item label="学历">
          <n-select v-model:value="memberForm.education" :options="educationOptions"></n-select>
        </n-form-item>
        <n-form-item label="手机" path="phone" >
          <n-input v-model:value="memberForm.phone" class="w-220px"></n-input>
        </n-form-item>
      </n-form>
    </div>
    <template #action>
      <n-button >取消</n-button>
      <n-button type="primary" @click="confirmInfo">确定</n-button>
    </template>
  </n-modal>
</template>