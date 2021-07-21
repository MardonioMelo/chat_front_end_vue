<template>
  <header class="py-3 mb-3 border-bottom">
    <router-link to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo" />
    </router-link>

    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-pink">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">ChatBot</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/chat-client">Chat</router-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Configurações</a
              >
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0 dropdown">
              <a
                href="#"
                class="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/45853582?v=4"
                  alt="mdo"
                  width="32"
                  height="32"
                  class="rounded-circle"
                />
              </a>
              <ul
                class="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser2"
              >           
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavbarItem",
  props: ["logo", "alt"],
};
</script>