<template>
  <div class='flex flex-col gap-7'>
  <top class="px-2 md:px-4 sticky top-4 z-20"/>
  <div class="grid grid-cols-2 gap-3 container overflow-x-auto" v-if="check_admin">
  <Button @click="openLockGroup(11)" variant="outline">開啟第十一組</Button>
  <Button @click="LockGroup(11)" variant="destructive">關閉第十一組</Button>
  <Button @click="openLockGroup(12)" variant="outline">開啟第十二組</Button>
  <Button @click="LockGroup(12)" variant="destructive">關閉第十二組</Button>
  <Button @click="openLockGroup(13)" variant="outline">開啟第十三組</Button>
  <Button @click="LockGroup(13)" variant="destructive">關閉第十三組</Button>
  <Button @click="openLockGroup(14)" variant="outline">開啟第十四組</Button>
  <Button @click="LockGroup(14)" variant="destructive">關閉第十四組</Button>
  </div>
  <div class="flex flex-col gap-3 container mx-auto overflow-x-auto" v-if="check_admin">
    <div v-for="(datas,index) in list" :key="index">
    <Table v-if="datas[0].group !== 15 && datas[0].group !== 16" class="w-[1300px]">
    <TableHeader>
      <TableRow>
        <TableHead class="w-[50px]">組別</TableHead>
        <TableHead class="w-[80px]">座位號碼</TableHead>
        <TableHead class="w-[80px]">座位狀態</TableHead>
        <TableHead class="w-[80px]">本名</TableHead>
        <TableHead class="w-[250px]">Email</TableHead>
        <TableHead class="w-[100px]">手機</TableHead>
        <TableHead class="w-[200px]">學校/科系</TableHead>
        <TableHead class="w-[100px]">綽號</TableHead>
        <TableHead class="w-[80px]">MBTI</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(data, index) in datas" :key="index">
        <TableCell class="">
          {{ data.group }}
        </TableCell>
        <TableCell>{{ data.number }}</TableCell>
        <TableCell>{{ data.status }}</TableCell>
        <TableCell>{{ data.app_user?.name }}</TableCell>
        <TableCell class="">
          {{ data.app_user?.email }}
        </TableCell>
        <TableCell>{{ data.app_user?.phone }}</TableCell>
        <TableCell v-if="data.app_user?.school">{{ data.app_user?.school }} / {{ data.app_user?.department }}</TableCell>
        <TableCell v-else></TableCell>
        <TableCell>{{ data.app_user?.nick_name }}</TableCell>
        <TableCell>{{ data.app_user?.mbti }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>
  </div>
</div>
</template>

<script lang="ts" setup>
import type { Database } from '~/database.types';
const supabase = useSupabaseClient<Database>();
const supabaseUser = useSupabaseUser();
import { toast } from '@/components/ui/toast'

const { data:check_admin , error, refresh } = useAsyncData('get_admin', async () =>{
  const { data , error} = await supabase.from("admin").select("*").eq("id", supabaseUser.value.id);
  if(error){
    return null;
  }
  return data[0];
})

const {data: list, error: data_error, refresh: data_refresh} = useAsyncData('get_data', async () => {
  const { data: list , error} = await supabase.from("seat").select("*, app_user(*)").order("number", {ascending: true});
  if(error){
    return null;
  }
  let group_list = []
  const seat_list = []
  for(let i = 1; i <= 16; i++){
    for(let j = 0; j < list.length; j++){
      if(list[j].group === i){
        group_list.push(list[j]);
      }
    }
    seat_list.push(group_list);
    group_list = [];
  }
  return seat_list;
})

const openLockGroup = async (group: number) => {
  console.log(group)
  const { data, error } = await supabase
  .from("seat")
  .update({
    "status": 'available'
  })
  .eq("group", group)
  if(error){
    toast({
    title: '未知的錯誤！開啟組別尚未完成，請聯繫工作人員！',
    variant:'destructive'
  })
  }
  else{
    toast({
      title: '已開啟第' + group + '組的座位!',
      
    })
    await data_refresh();
  }
}

const LockGroup = async (group: number) => {
  console.log(group)
  const { data, error } = await supabase
  .from("seat")
  .update({
    "status": 'lock'
  })
  .eq("group", group)
  if(error){
    toast({
    title: '未知的錯誤！鎖定組別尚未完成，請聯繫工作人員！',
    variant:'destructive'
  })
  }
  else{
    toast({
      title: '已鎖定第' + group + '組的座位!',
      
    })
    await data_refresh();
  }
}
</script>

<style>

</style>