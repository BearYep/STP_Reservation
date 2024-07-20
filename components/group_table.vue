<template>
  <div class="flex flex-col gap-3 w-[300px]">
    <div class="flex flex-row justify-center gap-3">
      <div class="flex flex-col gap-3">
        <ReservationButton
          :user="user"
          :data="list![0]"
          :data_refresh="data_refresh"
          :personal_refresh="personal_refresh"
          :your_seat="your_seat">
      </ReservationButton>
      <ReservationButton
          :user="user"
          :data="list![1]"
          :data_refresh="data_refresh"
          :personal_refresh="personal_refresh"
          :your_seat="your_seat">
      </ReservationButton>
      </div>
      <div v-if = "list![0].status !== 'lock'" class="w-[150px] border-2 flex place-content-center place-items-center">第{{ list[0].group }}組</div>
      <div v-else class="w-[150px] flex place-content-center place-items-center"></div>
      <div class="flex flex-col gap-3">
        <ReservationButton
            :user="user"
            :data="list![2]"
            :data_refresh="data_refresh"
            :personal_refresh="personal_refresh"
            :your_seat="your_seat">
        </ReservationButton>
        <ReservationButton
            :user="user"
            :data="list![3]"
            :data_refresh="data_refresh"
            :personal_refresh="personal_refresh"
            :your_seat="your_seat">
        </ReservationButton>
      </div>
    </div>
    <div class="flex flex-row justify-center gap-3">
      <ReservationButton
          :user="user"
          :data="list![4]"
          :data_refresh="data_refresh"
          :personal_refresh="personal_refresh"
          :your_seat="your_seat">
      </ReservationButton>
      <ReservationButton
          :user="user"
          :data="list![5]"
          :data_refresh="data_refresh"
          :personal_refresh="personal_refresh"
          :your_seat="your_seat">
      </ReservationButton>
      <ReservationButton
          :user="user"
          :data="list![6]"
          :data_refresh="data_refresh"
          :personal_refresh="personal_refresh"
          :your_seat="your_seat">
      </ReservationButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
  reservation_status: boolean
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
  user: user_type | null
  list: seat_type[],
  your_seat: seat_type[] | null,
  data_refresh: Function,
  personal_refresh: Function,
}>();

</script>

<style>

</style>