<template>
  <div class="container-fluid pb-3">
    <div class="d-grid gap-3" style="grid-template-columns: 2fr 5fr 10fr 5fr">
      <div class="border rounded-3 side-menu">
       <ul class="nav nav-tabs|pills flex-column">
         <li class="nav-item">
           <a href="#" class="nav-link active">Perfil</a>
         </li>
         <li class="nav-item">
           <a href="#" class="nav-link">Contatos</a>
         </li>
         <li class="nav-item">
           <a href="#" class="nav-link">Chats</a>
         </li>
         <li class="nav-item">
           <a href="#" class="nav-link">Configurações</a>
         </li>
         <li class="nav-item">
           <a href="#" class="nav-link">Imagem</a>
         </li>
         <li class="nav-item disabled">
           <a href="#" class="nav-link">Disabled</a>
         </li>
       </ul>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <div class="bg-light border rounded-3">
        Lista de clientes<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <div class="bg-light border rounded-3">
        Chat<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
       <div class="bg-light border rounded-3">
        Info do cliente<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
