<template>
  <div>
    <div
      v-for="(data, index) in list" 
      :key="index"
    >
      <span>
        {{ data.name }}
      </span>
    </div>
    測試
    <NuxtLink to="a">
      <Button>
        到下一頁
      </Button>
    </NuxtLink>

    <Button
      v-if="!supabaseUser"
      class="w-full flex"
      variant="outline"
      @click="AuthMethods.loginWithGoogle"
    >
      <Icon name="devicon:google" />
      <span class="w-full">透過 Google 登入</span>
    </Button>
    <div v-if="supabaseUser">{{ supabaseUser.id }} , email: {{ supabaseUser.email }}</div>
    <Button
      v-if="supabaseUser"
      class="w-full flex"
      variant="outline"
      @click="navigateTo('/logout')"
    >
      <Icon name="devicon:google" />
      <span class="w-full">登出</span>
    </Button>
  </div>

</template>

<script lang="ts" setup>
import type { Database } from '~/database.types';
const supabase = useSupabaseClient<Database>();
const supabaseUser = useSupabaseUser();
const {data: list, error} = useAsyncData('get_data', async () => {
  const { data , error} = await supabase.from("reservation_list").select();
  if(error){
    return null;
  }
  return data;
})

const AuthMethods = {
  async loginWithGoogle() {
    const host_url = ref('');
    if(window.location.host === 'localhost:3000'){
      host_url.value = 'localhost:3000'
    }
    else{
      host_url.value = 'bearyep.github.io/STP_Reservation/'
    }
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.protocol + "//" + host_url.value + "/auth/callback",
      },
    });
  },
}
</script>