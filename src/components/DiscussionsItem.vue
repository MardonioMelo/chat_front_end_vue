<template>
<!-- Start of Discussions -->
<div id="discussions" class="tab-pane fade active show">
    <div class="search">
        <form class="form-inline position-relative">
            <input type="search" class="form-control" id="conversations" placeholder="Search for conversations...">
            <button type="button" class="btn btn-link loop"><i class="material-icons">search</i></button>
        </form>
        <button class="btn create" data-toggle="modal" data-target="#startnewchat"><i class="material-icons">create</i></button>
    </div>
    <div class="list-group sort">
        <button class="btn filterDiscussionsBtn active show" data-toggle="list" data-filter="all">All</button>
        <button class="btn filterDiscussionsBtn" data-toggle="list" data-filter="read">Read</button>
        <button class="btn filterDiscussionsBtn" data-toggle="list" data-filter="unread">Unread</button>
    </div>						
    <div class="discussions">
        <h1>Fila de Espera</h1>
        <div class="list-group" id="chats" role="tablist">
            <a href="#list-chat" class="filterDiscussions all unread single active" id="list-chat-list" data-toggle="list" role="tab">
                <img class="avatar-md" src="https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png" data-toggle="tooltip" data-placement="top" title="Janette" alt="avatar">
                <div class="status">
                    <span class="material-icons online"><i class="fas fa-record-vinyl" aria-hidden="true"></i></span> 											
                </div>
                <div class="new bg-yellow">
                    <span>+7</span>
                </div>
                <div class="data">
                    <h5>Marilene Lima</h5>
                    <span>Seg</span>
                    <p>Um novo recurso foi atualizado em sua conta. Confira...</p>
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
<!-- Start of Create Chat -->
<div class="modal fade" id="startnewchat" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="requests">
            <div class="title">
                <h1>Start new chat</h1>
                <button type="button" class="btn" data-dismiss="modal" aria-label="Close"><i class="material-icons">close</i></button>
            </div>
            <div class="content">
                <form>
                    <div class="form-group">
                        <label for="participant">Recipient:</label>
                        <input type="text" class="form-control" id="participant" placeholder="Add recipient..." required>
                        <div class="user" id="recipient">
                            <img class="avatar-sm" src="dist/img/avatars/avatar-female-5.jpg" alt="avatar">
                            <h5>Keith Morris</h5>
                            <button class="btn"><i class="material-icons">close</i></button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="topic">Topic:</label>
                        <input type="text" class="form-control" id="topic" placeholder="What's the topic?" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message:</label>
                        <textarea class="text-control" id="message" placeholder="Send your welcome message...">Hmm, are you friendly?</textarea>
                    </div>
                    <button type="submit" class="btn button w-100">Start New Chat</button>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- End of Create Chat -->
</template>

<script>
export default {
    name: "DiscussionsItem"
}
</script>

<style>

</style>