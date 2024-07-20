<template>
  <div class='flex flex-col gap-7'>
  <top class="px-2 md:px-4 sticky top-4 z-20"/>
  <div v-if="user" class="container mx-auto px-4">
    <Card>
      <CardHeader>
        <CardTitle>個人資料編輯</CardTitle>
        <CardDescription>請編輯您的個人資料</CardDescription>
      </CardHeader>
      <CardContent>
    <Form class="space-y-6" @submit="onSubmit" :validation-schema="schema" :initial-values="user">

      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel>本名</FormLabel>
          <FormControl>
            <Input type="text" placeholder="請輸入您的本名" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="phone">
        <FormItem>
          <FormLabel>電話</FormLabel>
          <FormControl>
            <Input type="text" placeholder="請輸入您的電話號碼（手機）" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="school">
        <FormItem>
          <FormLabel>學校</FormLabel>
          <FormControl>
            <Input type="text" placeholder="請輸入學校全名，eg：國立台灣大學" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="department">
        <FormItem>
          <FormLabel>科系</FormLabel>
          <FormControl>
            <Input type="text" placeholder="請輸入系所全名，eg：工商管理學系" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="nick_name">
        <FormItem>
          <FormLabel>綽號/暱稱</FormLabel>
          <FormControl>
            <Input type="text" placeholder="請輸入您的綽號或暱稱，中文不超過六個字" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="mbti">
        <FormItem>
          <FormLabel>MBTI</FormLabel>

          <Select v-bind="componentField">
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="請選擇您的MBTI人格" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                <div v-for="(data, index) in MBTI_array" :key='index'>
                  <SelectItem :value="data[0]">{{ data[1] }}</SelectItem>
                </div>
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      </FormField>

      <div class="flex flex-rows gap-3">
      <Button type="submit">
        送出
      </Button>
      <NuxtLink
        to="/"
      >
      <Button type="button">
        回到首頁
      </Button>
      </NuxtLink>
    </div>
    </Form>
  </CardContent>
  </Card>
  </div>
</div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Form } from 'vee-validate';
import * as yup from 'yup'
import type { Database } from '~/database.types';
const supabase = useSupabaseClient<Database>();
const supabaseUser = useSupabaseUser();

import { toast } from '@/components/ui/toast'

const MBTI_array = [["INTJ", "INTJ | 建築師"],["INTP", "INTP | 邏輯學家"],["ENTJ", "ENTJ | 指揮官"],["ENTP", "ENTP | 辯論家"],
                    ["INFJ", "INFJ | 提倡者"],["INFP", "INFP | 調停者"]  ,["ENFJ", "ENFJ | 主人公"],["ENFP", "ENFP | 競選者"],
                    ["ISTJ", "ISTJ | 物流師"],["ISFJ", "ISFJ | 守衛者"]  ,["ESTJ", "ESTJ | 總經理"],["ESFJ", "ESFJ | 執政官"],
                    ["ISTP", "ISTP | 鑒賞家"],["ISFP", "ISFP | 探險家"]  ,["ESTP", "ESTP | 企業家"],["ESFP", "ESFP | 表演者"],]


const {data: user, error, refresh} = useAsyncData('get_user', async () => {
  const { data , error} = await supabase.from("app_user").select("*").eq('id', supabaseUser.value.id);
  if(error){
    return null;
  }
  return data[0];
})

const schema = yup.object({
  name: yup.string().min(1, "此為必填資料").required("此為必填資料"),
  phone: yup.string().min(10, "電話應為10位").max(10, "電話應為10位").required("此為必填資料"),
  school: yup.string().min(1, "此為必填資料").required("此為必填資料"),
  department: yup.string().min(1,"此為必填資料").required("此為必填資料"),
  nick_name: yup.string().min(1,"此為必填資料").max(10, "暱稱應為10位以下").required("此為必填資料"),
  mbti: yup.string().min(1, "此為必填資料").required("此為必填資料")
});

const onSubmit = async (values: any) => {
  console.log(values)
  const { data, error } = await supabase
  .from("app_user")
  .upsert({
    "id": supabaseUser.value.id,
    "name": values.name,
    "phone": values.phone,
    "first_time": false,
    "school": values.school,
    "department": values.department,
    "nick_name": values.nick_name,
    "mbti": values.mbti
  })
  const toast_string = "本名：" + values.name + "\n電話：" + values.phone + "\n學校：" + values.school + "\n科系：" + values.department + "\n綽號/暱稱：" + values.nick_name + "\nMBTI：" + values.mbti
  if(error){
    toast({
    title: '未知的錯誤！資料尚未更新完成，請聯繫工作人員！',
    variant:'destructive'
  })
  }
  else{
    toast({
      title: '資料修改完成！',
      description: h('pre', { class: 'mt-2 w-[340px] rounded-md' }, h('code', { class: 'text-black' },  toast_string)),
    })
    await refresh();
  }
}
</script>