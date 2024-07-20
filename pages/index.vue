<template>
  <div class='flex flex-col gap-7'>
  <top class="px-2 md:px-4 sticky top-4 z-20"/>
  <div class="container mx-auto px-4 flex flex-col gap-2">
  <div>
    <div class="font-bold text-2xl">STP暑期黑馬營劃位</div>
    <div class="text-gray-500">說明文字...</div>
    <img src="https://images.plurk.com/5nmKlgKPdXuUiCcLjdLHvR.jpg" class='w-[1364px]'>
  </div>
  <div class='border-2 h-[1px]'></div>
  <div class='container mx-auto overflow-x-auto'>
  <div class="flex flex-col gap-10" v-if="list && supabaseUser">
    <div class="flex flex-row w-[1225px]">
      <div class='flex flex-col w-[100px] h-[60px]'>
        <div class='text-sm w-[100px] h-[20px]'>
          <Icon name='ph:circle' style="color: rgb(0 0 0 / 0.5)"/>
          ：可預約
        </div>
        <div class='text-sm w-[100px] h-[20px]'>
          <Icon name='ph:circle-duotone' style="color: rgb(22 163 74 / 0.5)"/>
          ：您的位置
        </div>
        <div class='text-sm w-[100px] h-[20px]'>
          <Icon name='ph:circle-duotone' style="color: rgb(59 130 246 / 0.5)" />
          ：已預約
        </div>
      </div>
    <div class="flex flex-row gap-[50px] w-[1125px] justify-center">
      <div class="w-[350px] h-[60px] border-2 flex place-content-center place-items-center">投影幕</div>
      <div class="w-[200px] h-[60px] border-2 flex place-content-center place-items-center">講台</div>
      <div class="w-[350px] h-[60px] border-2 flex place-content-center place-items-center">投影幕</div>
    </div>
  </div>
    <div class="flex flex-row gap-10">
    <GroupTable
      :user="user"
      :list="list![0]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
    <GroupTable
      :user="user"
      :list="list![1]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
    <GroupTable
      :user="user"
      :list="list![2]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
    <GroupTable
      :user="user"
      :list="list![3]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
  </div>
    <div class="flex flex-row gap-10">
    <GroupTable
      :user="user"
      :list="list![4]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
  
    <GroupTable
      :user="user"
      :list="list![5]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
    <GroupTable
      :user="user"
      :list="list![6]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
    <GroupTable
      :user="user"
      :list="list![7]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
  </div>
  <div class="flex flex-row gap-10">
    <GroupTable
      :user="user"
      :list="list![10]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
    <GroupTable
      :user="user"
      :list="list![8]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
    
    <GroupTable
      :user="user"
      :list="list![9]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
    
    <GroupTable
      :user="user"
      :list="list![11]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
  </div>
  <div class="flex flex-row gap-10" v-if="list![12][0].status !== 'lock'">
    <GroupTable
      :user="user"
      :list="list![14]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
    <GroupTable
      :user="user"
      :list="list![12]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
    <GroupTable
      :user="user"
      :list="list![13]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
    <GroupTable
      :user="user"
      :list="list![15]"
      :data_refresh="data_refresh"
      :personal_refresh="personal_refresh"
      :your_seat="your_seat"
    />
  </div>
  </div>
  <div v-else class='flex h-[50px] justify-center gap-5 text-gray-600'>請登入以查看預約列表及進行預約服務。</div>
</div>
</div>
</div>
</template>

<script lang="ts" setup>
import type { Database } from '~/database.types';
const supabase = useSupabaseClient<Database>();
const supabaseUser = useSupabaseUser();

const {data: user, error: user_error, refresh: user_refresh} = useAsyncData('get_user', async () => {
  const { data , error} = await supabase.from("app_user").select("*").eq('id', supabaseUser.value.id);
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

async function handleList(list: any){
  let group_list = []
  const seat_list = []
  for(let i = 1; i <= 14; i++){
    for(let j = 0; j < list.length; j++){
      if(list[j].group === i){
        group_list.push(list[j]);
      }
    }
    seat_list.push(group_list);
    group_list = [];
  }
  return seat_list;
}

const {data: your_seat, error, refresh: personal_refresh} = useAsyncData('get_personal_data', async () => {
  const { data: personal , error} = await supabase.from("seat").select("*, app_user(*)").eq("user_id", supabaseUser.value.id);
  if(error){
    return null;
  }
  return personal;
})

onMounted(async () => {
  await user_refresh();
  await data_refresh();
  await personal_refresh();
})
</script>