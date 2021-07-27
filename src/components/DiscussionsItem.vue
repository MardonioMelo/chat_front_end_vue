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
            
            <a v-for="client in clients" :key="client.id" href="#list-chat" class="filterDiscussions all unread single" id="list-chat-list5" data-toggle="list" role="tab">
                <img class="avatar-md" src="https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png" data-toggle="tooltip" data-placement="top" title="Mildred" alt="avatar">
                             
                <div class="data">
                    <h5>{{client.name}}</h5>
                    <span>{{client.date}}</span>
                    <p>{{client.description}}</p>
                </div>
            </a>           

            <a v-for="client in clients" :key="client.id" href="#list-chat" class="filterDiscussions all read single" id="list-chat-list5" data-toggle="list" role="tab">
                <img class="avatar-md" src="https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png" data-toggle="tooltip" data-placement="top" title="Mildred" alt="avatar">
                                                                                     
                 <div class="data">
                    <h5>{{client.name}}</h5>
                    <span>{{client.date}}</span>
                    <p>{{client.description}}</p>
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
    data() {
        return {
            clients: []
        }
    },  
    methods: {
        async getRowClients(){
            const req = await fetch("http://localhost:3000/row")
            const res = await req.json()          

            if(res.result){
                console.log(res.error.msg)
                 this.clients = res.error.data;
            }else{
              console.log(res.error.msg)
            }          
        }
    },
    mounted(){
        this.getRowClients()
    }
}
</script>

<style>

</style>