<template>
  <q-list>
    <q-list-header>User List</q-list-header>
    <q-collapsible group="users" :label="user.name" :avatar="user.avatar" v-for="user in users" :key="user.name">
      <q-card inline style="width: 300px">
        <q-card-media>
          <img :src="user.fullImage">
        </q-card-media>
        <q-card-title class="relative-position">
          <q-btn fab color="primary" icon="favorite" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);"/>
          <div class="ellipsis">About Me</div>
        </q-card-title>
        <q-card-main>
          <p class="text-faded">{{user.bio}}</p>
        </q-card-main>
        <q-card-separator/>
        <q-card-actions>
          <q-btn flat color="primary" icon="contacts">Contact Me</q-btn>
        </q-card-actions>
      </q-card>
    </q-collapsible>
  </q-list>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserList',
  computed: {
    ...mapState({
      users: state => state.users.userData
    })
  }
}
</script>
