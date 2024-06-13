<template>
  <v-row dense align="center" justify="center">
    <v-col align-self="center" cols="12" md="4">
      <v-card
        variant="outlined"
        class="mx-auto py-auto"
        color="primary"
        max-width="344"
        subtitle="이메일과 비밀번호를 입력해주세요"
        title="login"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                :counter="10"
                :rules="emailRules"
                label="email"
                hide-details
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                :counter="10"
                :rules="emailRules"
                label="password"
                hide-details
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <template v-slot:actions>
          <v-btn variant="tonal" block text="login"></v-btn>
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    password: "",
    email: "",
    emailRules: [
      (value) => {
        if (value) return true;

        return "E-mail is requred.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "E-mail must be valid.";
      },
    ],
  }),
};
</script>
