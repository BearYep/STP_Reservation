<template>
  <div>
    <Dialog v-if="data.status === 'available'">
        <DialogTrigger>
        <Button class="rounded-full h-[40px] w-[75px]" variant='outline'>
          <!-- <Icon name='teenyicons:circle-outline' /> -->
          可預約
        </Button>
      </DialogTrigger>

      <DialogContent v-if='user?.first_time === true' class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>請先填寫資料。</DialogTitle>
        </DialogHeader>
        <Button @click="navigateTo('/profile_edit')">
          個人資料編輯
        </Button>
      </DialogContent>

      <DialogContent v-else-if='your_seat && your_seat![0]' class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>您已預約位置</DialogTitle>
          <DialogDescription>
            以下為您的預約資料。
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <Label>
            位置：第 {{ your_seat![0].group }} 組 - {{ your_seat![0].number}}
          </Label>
          <Label>
            綽號：{{ your_seat![0].app_user!.nick_name }}
          </Label>
          <Label>
            MBTI：{{ your_seat![0].app_user!.mbti }}
          </Label>
        </div>
        <DialogFooter>
          <DialogClose as-child>
            <Button variant="outline">
              關閉
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>

      <DialogContent v-else-if="user" class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>確認要預約這個座位嗎?</DialogTitle>
          <DialogDescription class="text-red-500 font-bold">
            請確認以下的資料，送出後無法更改。
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <Label>
            位置：第 {{ data.group }} 組 - {{ data.number }}
          </Label>
          <Label>
            綽號：{{ user?.nick_name }}
          </Label>
          <Label>
            MBTI：{{ user?.mbti }}
          </Label>
        </div>
        <DialogFooter>
          <DialogClose as-child>
            <Button @click="sendReservation(data.group, data.number, user!.id);" class="bg-green-500 text-white px-4 py-1 rounded">
              確認
            </Button>
          </DialogClose>
          <DialogClose as-child>
            <Button variant="outline">
              關閉
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>

      <DialogContent v-else class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>請先登入。</DialogTitle>
        </DialogHeader>
        <Button
          variant="outline"
          @click="AuthMethods.loginWithGoogle"
        >
          <Icon name="devicon:google" />
          <span class="w-full">透過 Google 登入</span>
        </Button>
      </DialogContent>
    </Dialog>
    <Button v-if="data.user_id === user?.id" class="bg-green-600 text-white px-4 py-1 rounded-full h-[40px] w-[75px]" disabled>
      <div class='flex flex-col text-xs'>
      <div>{{ data.app_user?.nick_name ? data.app_user?.nick_name : '無'}}</div>
      <div> {{ data.app_user?.mbti ? data.app_user?.mbti : '無'}}</div>
      </div>
    </Button>
    <Button v-else-if="data.status === 'taken'" class="bg-sky-800 rounded-full h-[40px] w-[75px]" disabled>
      <div class='flex flex-col text-xs'>
      <div>{{ data.app_user?.nick_name ? data.app_user?.nick_name : '無'}}</div>
      <div> {{ data.app_user?.mbti ? data.app_user?.mbti : '無'}}</div>
      </div>
    </Button>
    <Button v-else-if="data.status === 'lock'" variant='secondary' class='rounded-full h-[40px] w-[75px] bg-white' disabled>
    </Button>
  </div>
</template>

<script lang="ts" setup>
import type { Database } from '~/database.types';
const supabase = useSupabaseClient<Database>();
import { toast } from '@/components/ui/toast'

type user_type={
  created_at: string
  department: string | null
  email: string | null
  first_time: boolean | null
  id: string
  mbti: string | null
  name: string | null
  nick_name: string | null
  phone: string | null
  school: string | null
}
type seat_type = {
  group: number,
  number: number,
  status: string | null,
  user_id: string | null
  app_user: user_type | null,
};
const props = defineProps<{
  data: seat_type
  user: user_type | null
  your_seat: seat_type[] | null,
  data_refresh: Function,
  personal_refresh: Function,
}>();

async function sendReservation(group: number, number: number, id: string){
  const { data, error } = await supabase
  .from('seat')
  .upsert({
    "group": group,
    "number": number,
    "user_id": id,
    "status": "taken",
  })
  toast({
      title: '已送出預約資料!',
  })

  await props.data_refresh();
  await props.personal_refresh();
}

const AuthMethods = {
  async loginWithGoogle() {
    const host_url = ref('localhost:3000');
    if(window.location.host === 'localhost:3000'){
      host_url.value = 'localhost:3000'
    }
    else{
      host_url.value = 'bearyep.github.io/STP_Reservation/'
    }
    console.log(host_url);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.protocol + "//bearyep.github.io/STP_Reservation/" + "/auth/callback",
      },
    });
  },
}
</script>

<style>

</style>