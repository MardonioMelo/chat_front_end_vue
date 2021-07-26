<template>
<!-- Start of Contacts -->
<div id="members" class="tab-pane fade active show">
    <div class="search">
        <form class="form-inline position-relative">
            <input type="search" class="form-control" id="people" placeholder="Pesquisar por pessoa...">
            <button type="button" class="btn btn-link loop"><span class="material-icons"><i class="fa fa-search" aria-hidden="true"></i></span></button>
        </form>
        <button class="btn create" data-toggle="modal" data-target="#exampleModalCenter"><span><i class="far fa-edit" aria-hidden="true"></i></span></button>
    </div>
    <div class="list-group sort">
        <button class="btn filterMembersBtn active show" data-toggle="list" data-filter="all">Todos</button>
        <button class="btn filterMembersBtn" data-toggle="list" data-filter="online">Online</button>
        <button class="btn filterMembersBtn" data-toggle="list" data-filter="offline">Offline</button>
    </div>						
    <div class="contacts">
        <h1>Contatos</h1>
        <div class="list-group" id="contacts" role="tablist">									
            <a href="#" class="filterMembers all online contact" data-toggle="list">
                <img class="avatar-md" src="https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png" data-toggle="tooltip" data-placement="top" title="Lean" alt="avatar">
                <div class="status">
                    <span class="material-icons online"><i class="fas fa-record-vinyl" aria-hidden="true"></i></span>									
                </div>
                <div class="data">
                    <h5>Maria Joaquina</h5>
                    <p>Anápolis, Goiás</p>
                </div>
                <div class="person-add">
                    <span class="material-icons"><i class="fa fa-user" aria-hidden="true"></i></span>
                </div>
            </a>	
            <a href="#" class="filterMembers all online contact" data-toggle="list">
                <img class="avatar-md" src="https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png" data-toggle="tooltip" data-placement="top" title="Lean" alt="avatar">
                <div class="status">
                    <span class="material-icons offline"><i class="fas fa-record-vinyl" aria-hidden="true"></i></span>									
                </div>
                <div class="data">
                    <h5>Maria Joaquina</h5>
                    <p>Anápolis, Goiás</p>
                </div>
                <div class="person-add">
                    <span class="material-icons"><i class="fa fa-user" aria-hidden="true"></i></span>
                </div>
            </a>						
        </div>
    </div>
</div>
<!-- End of Contacts -->
<!-- Start of Add Friends -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="requests">
            <div class="title">
                <h1>Add your friends</h1>
                <button type="button" class="btn" data-dismiss="modal" aria-label="Close"><i class="material-icons">close</i></button>
            </div>
            <div class="content">
                <form>
                    <div class="form-group">
                        <label for="user">Username:</label>
                        <input type="text" class="form-control" id="user" placeholder="Add recipient..." required>
                        <div class="user" id="contact">
                            <img class="avatar-sm" src="dist/img/avatars/avatar-female-5.jpg" alt="avatar">
                            <h5>Keith Morris</h5>
                            <button class="btn"><i class="material-icons">close</i></button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="welcome">Message:</label>
                        <textarea class="text-control" id="welcome" placeholder="Send your welcome message...">Hi Keith, I'd like to add you as a contact.</textarea>
                    </div>
                    <button type="submit" class="btn button w-100">Send Friend Request</button>
                </form>
            </div>
        </div>
    </div>
</div>
<!-- End of Add Friends -->
</template>

<script>
export default {
    name:"ContactsItem"
}
</script>

<style>

</style>