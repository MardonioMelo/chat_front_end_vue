<template>
    <div class="layout">
        <!-- Start of Sign Up -->
        <div class="main order-md-2">
            <div class="start">
                <div class="container">
                    <div class="col-md-12">
                        <div class="content">
                            <h1>Criar Conta</h1>                            
                            <p>Use seu CPF:</p>
                            <form class="signup">
                                <div class="form-parent">
                                    <div class="form-group">
                                        <input type="text" id="inputName" class="form-control" placeholder="Username" required>
                                        <button class="btn icon"><i class="material-icons">person_outline</i></button>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" id="inputEmail" class="form-control" placeholder="Email Address" required>
                                        <button class="btn icon"><i class="material-icons">mail_outline</i></button>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                                    <button class="btn icon"><i class="material-icons">lock_outline</i></button>
                                </div>
                                <router-link class="btn button" to="/">Inscrever-se</router-link>
                               
                                <div class="callout">
                                    <span>Already a member? <router-link to="/login">Entrar</router-link></span>                                       
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End of Sign Up -->
        <!-- Start of Sidebar -->
        <div class="aside order-md-1">
            <div class="container">
                <div class="col-md-12">
                    <div class="preference">
                        <h2>Welcome Back!</h2>
                        <p>To keep connected with your friends please login with your personal info.</p>                      
                         <router-link class="btn button" to="/login">Entrar</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- End of Sidebar -->
    </div> <!-- Layout -->
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            title: "Chat - Logout"
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