<template>
  <div>
    <div class="flex items-center justify-center h-[100vh]">
      <div class="flex flex-col items-center space-y-4">
        <div>登出中...</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const supabase = useSupabaseClient();

// onMounted
onMounted(async () => {
  const { error } = await supabase.auth.signOut({
    scope: "local"
  });
  if (!error) {
    setTimeout(() => {
      navigateTo("/");
    }, 1000);
  } else {
    console.error(error);
    };
    localStorage.removeItem(`sb-cxbuvmlyimilvflpwslv-auth-token`);
    setTimeout(() => {
      navigateTo("/");
    }, 3000);
  }
);
</script>
