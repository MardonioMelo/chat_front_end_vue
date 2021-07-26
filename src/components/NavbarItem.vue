<template>
  <!-- Start of Navigation -->
  <div class="navigation">
    <div class="container">
      <div class="inside">
        <div class="nav nav-pills menu" id="pills-tab">
          <button class="btn">
            <img class="avatar-xl" :src="avatar" alt="avatar" />
          </button>
          <a href="#" data-bs-toggle="pill" data-bs-target="#discussions" data-toggle="tab">
            <span class="material-icons" @click="setActive('discussions')" :class="{ active:isActive('discussions') }">
              <i class="far fa-comments" aria-hidden="true"></i>
            </span>
          </a>    
          <span class="f-grow1"></span>         
          <a href="#" data-bs-toggle="pill" data-bs-target="#settings" data-toggle="tab">         
            <span class="material-icons" @click="setActive('settings')" :class="{ active:isActive('settings') }">
              <i class="fas fa-cog" aria-hidden="true"> </i>
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

  <!-- Start of Sidebar -->
  <div class="sidebar" id="sidebar">
    <div class="container">
      <div class="col-md-12">
        <div class="tab-content">        
          <DiscussionsItem />
          <SettingsItem :avatar="avatar" />         
        </div>
      </div>
    </div>
  </div>
  <!-- End of Sidebar -->

</template>

<script>

import DiscussionsItem from "./DiscussionsItem.vue";
import SettingsItem from "./SettingsItem.vue";

export default {
  name: "NavbarItem",
  props: ["avatar"],
  components:{
    DiscussionsItem,   
    SettingsItem,  
  },
  data() {
    return {
     activeItem: 'active show'
    };
  },
  created() {
   
  },
  methods: {  
    isActive: function (menuItem) {     
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem 
    }    
  },
  mounted() {
    this.setActive('discussions')
  },
};
</script>