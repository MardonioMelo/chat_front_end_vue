<template>
  <div class="layout">
    <!-- Start of Sign In -->
    <div class="main order-md-1">
      <div class="start">
        <div class="container">
          <div class="col-md-12">
            <div class="content">
              <h1>Faça login</h1>             
              <p>Use seu CPF:</p>
              <form>
                <div class="form-group">
                  <input type="number" id="inputText" class="form-control" placeholder="Seu CPF" required>
                  <button class="btn icon"><i class="material-icons"><i class="fas fa-id-card" aria-hidden="true"></i></i></button>
                </div>
                <div class="form-group">
                  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                  <button class="btn icon"><i class="material-icons"><i class="fas fa-lock" aria-hidden="true"></i></i></button>
                </div>
                <button type="submit" class="btn button" formaction="index-2.html">Entrar</button>
                <div class="callout">
                  <span>Não tem conta?  <router-link to="/logout">Criar conta</router-link></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Sign In -->
    <!-- Start of Sidebar -->
    <div class="aside order-md-2">
      <div class="container">
        <div class="col-md-12">
          <div class="preference">
            <h2>Olá amigo(a)!</h2>
            <p>Cadastre-se para começar a atender clientes.</p>
            <router-link to="/logout" class="btn button">Inscrever-se</router-link>            
          </div>
        </div>
      </div>
    </div>
    <!-- End of Sidebar -->
  </div> <!-- Layout -->
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            title: "Chat - Logoin"
        }
    },
    created () {
        this.pageTitle()
    },
    mounted() {
    
    },
    methods: {
        pageTitle(){
            document.title = this.title
        }
    }   
};
</script>

<style>
</style>