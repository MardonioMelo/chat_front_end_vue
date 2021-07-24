<template>
  <!-- Start of Navigation -->
  <div class="navigation">
    <div class="container">
      <div class="inside">
        <div class="nav nav-tab menu">
          <button class="btn">
            <img class="avatar-xl" :src="avatar" alt="avatar" />
          </button>
          <a href="#members" data-toggle="tab">
            <span class="material-icons">
              <i class="fa fa-user-circle" aria-hidden="true"></i>
            </span>
          </a>
          <a href="#discussions" data-toggle="tab" class="active">
            <span class="material-icons">
              <i class="far fa-comments" aria-hidden="true"> </i>
            </span>
          </a>
          <a href="#notifications" data-toggle="tab" class="f-grow1">
            <span class="material-icons">
              <i class="far fa-bell" aria-hidden="true"></i>
            </span>
          </a>
          <!-- <button class="btn mode">
            <span class="material-icons">
              <i class="fas fa-moon" aria-hidden="true"></i>
            </span>
          </button> -->
          <a href="#settings" data-toggle="tab">
            <span class="material-icons">
              <i class="fas fa-cog" aria-hidden="true"></i>
            </span>
          </a>
          <router-link class="btn power" to="/login">
            <span class="material-icons">
              <i class="fas fa-power-off" aria-hidden="true"></i>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- End of Navigation -->
</template>

<script>
export default {
  name: "NavbarItem",
  props: ["image"],
  data() {
    return {
      avatar:
        "https://c0.klipartz.com/pngpicture/348/800/gratis-png-hombre-vestido-con-camisa-azul-ilustracion-iconos-de-computadora-avatar-usuario-login-avatar-thumbnail.png",
    };
  },
  methods: {},
};
</script>