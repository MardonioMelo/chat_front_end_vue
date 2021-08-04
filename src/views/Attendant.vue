<template>
  <div class="layout">
    <NavbarItem :avatar="user_avatar" />
    <ChatItem />
  </div>
</template>

<script>
import NavbarItem from "../components/NavbarItem.vue";
import ChatItem from "../components/ChatItem.vue";

export default {
  name: "Attendant",
  components: {
    NavbarItem,
    ChatItem,
  },
  data() {
    return {
      title: "Chat - Atendimento",
      user_avatar: null,
      user_name: null,
      lastname: null,
      uuid: null,
      cpf: null,
      institution: null,
      city: null,
      created_at: null,
      updated_at: null,
    };
  },
  created() {
    this.pageTitle();
  },
  mounted() {
    this.getProfile();
    this.increment();
  },
  methods: {
    pageTitle() {
      document.title = this.title;
    },
    async getProfile() {
      const req = await fetch(process.env.VUE_APP_PROFILE + "/2");
      const res = await req.json();

      if (res.error.data.avatar !== null) {
        this.user_avatar = res.error.data.avatar;
      } else {
        this.user_avatar = "./avatars/user.png";
      }
    },
    increment() {
      console.log(this.$store.state.count);
      console.log(this.$store.state.login.name);
    },
  },
};
</script>

<style>
</style>
