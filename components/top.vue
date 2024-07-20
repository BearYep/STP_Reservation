<template>
  <div>
    <div class="p-4 flex flex-col gap-2 rounded-2xl md:rounded-2xl shadow-[0_0px_8px_0px_rgba(0,0,0,0.1)] bg-background border-2">
      <div class="flex items-center gap-5">
        <div class="flex flex-wrap mr-auto">
          <div class="font-mono text-xl">
            <NuxtLink
              to="/"
              class="font-mono text-2xl mx-2"
            >
              STP預約系統
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-wrap ml-auto">
          <div v-if="supabaseUser">
            <!-- {{ supabaseUser.id }} , email: {{ supabaseUser.email }}, Hi!! {{ supabaseUser.user_metadata.full_name }} -->
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button
                  size="xs"
                  variant="ghost"
                >
                  <Icon name="ri:more-fill" />
                </Button>
              </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{{ supabaseUser.user_metadata.full_name }}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem class="cursor-pointer" @click="navigateTo('/profile_edit')">
                    個人資料編輯
                </DropdownMenuItem>
                <DropdownMenuItem class="cursor-pointer" @click="navigateTo('/logout')">
                    登出
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div v-else>
            
            <Button
              variant="outline"
              @click="AuthMethods.loginWithGoogle"
            >
            <div class="flex items-center gap-2">
              <Icon name="devicon:google" size='20'/>
              <span class="w-full">登入</span>
            </div>
            </Button>
          
        </div>
    </div>
    </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Database } from '~/database.types';
const supabase = useSupabaseClient<Database>();
const supabaseUser = useSupabaseUser();

const router = useRouter();
// [Methods]
const back = () => {
  if (router.getRoutes().length > 1) {
    router.back();
  } else {
    router.push("/");
  }
};

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
<style></style>
