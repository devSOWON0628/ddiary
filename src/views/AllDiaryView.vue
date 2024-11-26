<template>
  <v-container>
    <v-row align="start">
      <v-col class="py-2">
        <v-btn-toggle v-model="type" color="deep-purple-accent-3" group>
          <v-btn value="calendar"> Calendar </v-btn>
          <v-btn value="list"> List </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <v-row v-show="type === 'calendar'">
      <v-col align-self="center">
        <v-sheet> <CustomCalendar /> </v-sheet>
      </v-col>
    </v-row>

    <v-row v-show="type === 'list'"> "리스트로보기" </v-row>
  </v-container>
</template>

<script>
import CustomCalendar from "@/components/Custom-Calendar.vue";
export default {
  components: {
    CustomCalendar,
  },
  data: () => ({
    type: "calendar",
  }),
  mounted() {},
  methods: {},
  watch: {
    type(val, pre) {
      console.log(pre + "값이 " + val + "로 변경되었습니다");
    },
  },
};
</script>
