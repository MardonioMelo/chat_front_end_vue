<template>
<!-- Start of Settings -->
<div class="tab-pane fade" id="settings">			
    <div class="settings">
        <div class="profile">
            <img class="avatar-xl" :src="avatar" alt="avatar">
            <h1><a href="#">Mardônio Melo</a></h1>
            <span>Anápolis-GO</span>            
        </div>
        <div class="categories" id="accordionSettings">
            <h1>Configurações</h1>
            <!-- Start of My Account -->
            <div class="category">
                <a href="#" class="title collapsed" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <span class="material-icons md-30 online"><i class="fa fa-user" aria-hidden="true"></i></span>
                    <div class="data">
                        <h5>Meus Dados</h5>
                        <p>Atualizar detalhes do meu perfil</p>
                    </div>
                    <span class="material-icons"><i class="fas fa-angle-right" aria-hidden="true"></i></span>
                </a>
                <div class="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionSettings">
                    <div class="content">
                        <div class="upload">
                            <div class="data">
                                <img class="avatar-xl" :src="avatar" alt="image">
                                <label>
                                    <input type="file">
                                    <span class="btn button">Upload avatar</span>
                                </label>
                            </div>
                            <p>Para obter os melhores resultados, use uma imagem de pelo menos 256px por 256px no formato .jpg ou .png!</p>
                        </div>
                        <form>
                            <div class="parent">
                                <div class="field">
                                    <label for="firstName">Nome <span>*</span></label>
                                    <input type="text" class="form-control" id="firstName" placeholder="Nome" value="Mardônio" required>
                                </div>
                                <div class="field">
                                    <label for="lastName">Sobrenome <span>*</span></label>
                                    <input type="text" class="form-control" id="lastName" placeholder="Sobrenome" value="Melo" required>
                                </div>
                            </div>
                            <div class="field">
                                <label for="email">Email <span>*</span></label>
                                <input type="email" class="form-control" id="email" placeholder="Digite seu endereço de e-mail" value="teste@gmail.com" required>
                            </div>
                            <div class="field">
                                <label for="password">Senha</label>
                                <input type="password" class="form-control" id="password" placeholder="Digite nova senha" value="password" required>
                            </div>
                            <div class="field">
                                <label for="location">Localização</label>
                                <input type="text" class="form-control" id="location" placeholder="Digite sua cidade-UF" value="Anápolis-GO" required>
                            </div>
                            <button class="btn btn-link w-100">Excluir conta</button>
                            <button type="submit" class="btn button w-100">Aplicar</button>
                        </form>
                    </div>
                </div>
            </div>
            <!-- End of My Account -->
          
            <!-- Start of Logout -->
            <div class="category">
                 <router-link class="title collapsed" to="/login">
                    <span class="material-icons md-30 online"><i class="fas fa-power-off"></i></span>
                    <div class="data">
                        <h5>Desligar</h5>
                        <p>Saia da sua conta</p>
                    </div>
                    <span class="material-icons"><i class="fas fa-angle-right" aria-hidden="true"></i></span>
                 </router-link>
            </div>
            <!-- End of Logout -->
        </div>
    </div>
</div>
<!-- End of Settings -->
</template>

<script>
export default {
    name: "SettingsItem",
    props:["avatar","user_id"],
    methods: {
        async getProfile(){
            const req = await fetch(process.env.VUE_APP_PROFILE+"/"+user_id)
            console.log(req)
        }
    },
}
</script>

<style>

</style>