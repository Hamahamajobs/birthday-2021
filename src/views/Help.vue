<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        autocomplete="off"
        v-model="name"
        :counter="30"
        :rules="nameRules"
        label="〇〇ところはどこですか？"
        required
      ></v-text-field>

      <v-checkbox
        v-model="checkbox"
        :rules="[(v) => !!v || 'チェック入れて！！！']"
        label="してね?"
        required
        
      ></v-checkbox>
      <v-btn color="error" class="mr-4" @click="send" :disabled='!checkbox || !valid'>送信！</v-btn>
    </v-form>

    <link
      href="https://fonts.googleapis.com/css?family=Montserrat"
      rel="stylesheet"
    />
  </div>
</template>


<script>
export default {
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      (v) => !!v || "○○ところを書いて〜〜",
      (v) => (v && v.length <= 30) || "30文字いないで簡潔に〜〜",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    hamadaFlag: true,
  }),

  methods: {
    send() {
      alert('ヒントをあげちゃいます〜〜〜！');
    },
  },
};
</script>

<style lang="scss">
.modal_wrap input {
  display: none;
}

.modal_overlay {
  display: flex;
  justify-content: center;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.5s, transform 0s 0.5s;
  transform: scale(0);
}

.modal_trigger {
  position: absolute;
  width: 100%;
  height: 100%;
}

.modal_content {
  align-self: flex-start;
  width: 60%;
  padding: 30px 30px 15px;
  box-sizing: border-box;
  background: #fff;
  line-height: 1.4em;
  transform: translateY(-100%);
  transition: 0.5s;
}

.close_button {
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 24px;
  cursor: pointer;
}

.modal_wrap input:checked ~ .modal_overlay {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.5s;
}

.modal_wrap input:checked ~ .modal_overlay .modal_content {
  transform: translateY(20px);
}

.open_button {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 30px;
  margin: auto;
  padding: 8px 16px;
  color: #444;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  border-radius: 16px;
  cursor: pointer;
}
</style>
