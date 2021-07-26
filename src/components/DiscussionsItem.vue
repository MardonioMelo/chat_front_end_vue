<template>
<!-- Start of Discussions -->
<div id="discussions" class="tab-pane fade active show">
    <div class="search">
        <form class="form-inline position-relative">
            <input type="search" class="form-control" id="conversations" placeholder="Pesquisar conversas...">
            <button type="button" class="btn btn-link loop"><span class="material-icons"><i class="fa fa-search" aria-hidden="true"></i></span></button>
        </form>        
    </div>   			
    <div class="discussions">
        <h1>Fila de Espera</h1>
        <div class="list-group" id="chats" role="tablist">
            <a href="#list-chat" class="filterDiscussions all unread single active" id="list-chat-list" data-toggle="list" role="tab">
                <img class="avatar-md" src="https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar">
                             
                <div class="data">
                    <h5>name</h5>
                    <span>dia_semana</span>
                    <p>mensagem</p>
                </div>
            </a>									
            
            <a href="#list-chat" class="filterDiscussions all unread single" id="list-chat-list5" data-toggle="list" role="tab">
                <img class="avatar-md" src="https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png" data-toggle="tooltip" data-placement="top" title="Mildred" alt="avatar">
                <div class="status">
                    <span class="material-icons offline"><i class="fas fa-record-vinyl" aria-hidden="true"></i></span> 											
                </div>
                <div class="new bg-green">
                    <span>+9</span>
                </div>
                <div class="data">
                    <h5>Leonidas 300</h5>
                    <span>Ter</span>
                    <p>Aqui é sparta!</p>
                </div>
            </a>

            <a href="#list-chat" class="filterDiscussions all read single" id="list-chat-list5" data-toggle="list" role="tab">
                <img class="avatar-md" src="https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png" data-toggle="tooltip" data-placement="top" title="Mildred" alt="avatar">
                <div class="status">
                        <span class="material-icons offline"><i class="fas fa-record-vinyl" aria-hidden="true"></i></span> 											
                </div>   
                <div class="new bg-gray">
                    <span>?</span>
                </div>                                    
                <div class="data">
                    <h5>Abel Marcks</h5>
                    <span>Ter</span>
                    <p>Hoje não irei cantar!</p>
                </div>
            </a>

            <a href="#list-chat" class="filterDiscussions all read single" id="list-chat-list5" data-toggle="list" role="tab">
                <img class="avatar-md" src="https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png" data-toggle="tooltip" data-placement="top" title="Mildred" alt="avatar">
                <div class="status">
                        <span class="material-icons online"><i class="fas fa-record-vinyl" aria-hidden="true"></i></span> 											
                </div>                                                                      
                <div class="data">
                    <h5>Homo Sapiens</h5>
                    <span>Ter</span>
                    <p>Vamos evoluir mano, é preciso!</p>
                </div>
            </a>
        </div>
    </div>
</div>
<!-- End of Discussions -->
</template>

<script>
export default {
    name: "DiscussionsItem",   
}
</script>

<style>

</style>