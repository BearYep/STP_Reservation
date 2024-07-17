<template>
  <div>
    正在登入...
  </div>
</template>

<script lang="ts" setup>
import type { Database, Tables, Enums } from "~/database.types";
const supabase = useSupabaseClient<Database>();
const supabaseUser = useSupabaseUser();

const user = ref({
  id: supabaseUser.value?.id,
  email: supabaseUser.value?.email,
})

onMounted(async () => {
  console.log(supabaseUser.value)
  if(user.value){
    console.log(user.value)
    const { data } = await supabase.from("app_user").select("*").eq("id", user.value!.id!).single();
    if (data) {
      if (!data.first_time) {
        navigateTo("/profile_edit");
        return;
      }
    }
    else{
      const { data , error } = await supabase
      .from("app_user")
      .insert({
        "id":user.value.id,
        "email":user.value.email,
        "first_time": true,
      });
      if(error){
        console.log(error);
        navigateTo("/");
        return;
      }
      navigateTo("/profile_edit");
      return;
    }
  }
  else{
    navigateTo("/auth/login");
    return;
  }
  navigateTo("/");
})
</script>

<style>

</style>