<template>
  <v-calendar
    ref="calendar"
    v-model="value"
    :events="events"
    color="primary"
    type="month"
    :hide-week-number="true"
  ></v-calendar>
</template>

<script>
export default {
  data: () => ({
    weekday: [0, 1, 2, 3, 4, 5, 6],
    value: [new Date()],
    events: [],
  }),
  mounted() {},
  methods: {},
};
</script>
