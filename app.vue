<template>
  <div>
    <Toaster />
    <NuxtPage />
    
  </div>
</template>


<script setup lang="ts">
import type { Database } from '~/database.types';
const supabase = useSupabaseClient<Database>();
useHead({
  title: "STP預約系統",
  meta: [
    {
      name: "description",
      content: "STP預約系統",
    },
  ],
  htmlAttrs: {
    class: "theme-zinc",
  },
});


</script>