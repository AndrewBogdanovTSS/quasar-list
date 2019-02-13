<template>
  <q-list>
    <q-list-header>User List</q-list-header>
    <q-collapsible group="users"
                   :label="`${user.name.first} ${user.name.last}`"
                   :avatar="user.picture.thumbnail"
                   v-for="user in users"
                   :key="user.name.first"
                   style="text-transform: capitalize">
      <q-card inline style="width: 300px">
        <q-card-media>
          <img :src="user.picture.large">
        </q-card-media>
        <q-card-title class="relative-position">
          <q-btn fab color="primary" icon="favorite" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);"/>
          <div class="ellipsis">{{user.name.title}}. {{user.name.first}} {{user.name.last}}</div>
          <div class="ellipsis" style="text-transform: none"><q-icon name="mail" color="primary"/> {{user.email}}</div>
          <div class="ellipsis"><q-icon name="location_on" color="primary"/> {{user.location.city}} / {{user.location.state}}</div>
          <div class="ellipsis"><q-icon name="phone" color="primary"/> {{user.phone}}</div>
        </q-card-title>
        <q-card-separator/>
        <q-card-actions>
          <q-btn flat color="primary" icon="contacts">Contact Me</q-btn>
        </q-card-actions>
      </q-card>
    </q-collapsible>
  </q-list>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserList',
  computed: {
    ...mapState({
      users: state => state.users.userData
    })
  },
  methods: {
    ...mapActions({
      getUsers: 'users/get'
    })
  },
  created () {
    this.getUsers()
  }
}
</script>
