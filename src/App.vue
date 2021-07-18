<template>
  <NavbarItem />
  <main>
    <router-view />
  </main>
  <FooterItem />
</template>

<script>
import FooterItem from "@/components/FooterItem.vue";
import NavbarItem from "@/components/NavbarItem.vue";

export default {
  components: {
    NavbarItem,
    FooterItem,
  },
};
</script>