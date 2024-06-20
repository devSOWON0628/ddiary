<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet>
        <v-calendar
          ref="calendar"
          v-model="value"
          :events="events"
          color="primary"
          type="month"
          :hide-week-number="true"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    weekday: [0, 1, 2, 3, 4, 5, 6],
    value: [new Date()],
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
  }),
  mounted() {},
  methods: {},
};
</script>
