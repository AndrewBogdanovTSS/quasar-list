<template>
  <q-list>
    <q-list-header>User List</q-list-header>
    <q-collapsible group="users" label="Jane Doe" avatar="https://placeimg.com/38/38/people/1">
      <q-card inline style="width: 300px">
        <q-card-media>
          <img src="https://placeimg.com/300/200/people/1">
        </q-card-media>
        <q-card-title class="relative-position">
          <q-btn fab color="primary" icon="favorite" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);" />

          <div class="ellipsis">About Me</div>
        </q-card-title>
        <q-card-main>
          <p class="text-faded">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci magnam nam obcaecati placeat voluptatibus. Quis?</p>
        </q-card-main>
        <q-card-separator />
        <q-card-actions>
          <q-btn flat color="primary" icon="contacts">Contact Me</q-btn>
        </q-card-actions>
      </q-card>
    </q-collapsible>
    <q-collapsible group="users" label="Patrick Swayze" avatar="https://placeimg.com/38/38/people/2">
      <q-card inline style="width: 300px">
        <q-card-media>
          <img src="https://placeimg.com/300/200/people/2">
        </q-card-media>
        <q-card-title class="relative-position">
          <q-btn fab color="primary" icon="favorite" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);" />

          <div class="ellipsis">About Me</div>
        </q-card-title>
        <q-card-main>
          <p class="text-faded">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci magnam nam obcaecati placeat voluptatibus. Quis?</p>
        </q-card-main>
        <q-card-separator />
        <q-card-actions>
          <q-btn flat color="primary" icon="contacts">Contact Me</q-btn>
        </q-card-actions>
      </q-card>
    </q-collapsible>
    <q-collapsible group="users" label="Walter White" avatar="https://placeimg.com/38/38/people/3">
      <q-card inline style="width: 300px">
        <q-card-media>
          <img src="https://placeimg.com/300/200/people/3">
        </q-card-media>
        <q-card-title class="relative-position">
          <q-btn fab color="primary" icon="favorite" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);" />

          <div class="ellipsis">About Me</div>
        </q-card-title>
        <q-card-main>
          <p class="text-faded">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci magnam nam obcaecati placeat voluptatibus. Quis?</p>
        </q-card-main>
        <q-card-separator />
        <q-card-actions>
          <q-btn flat color="primary" icon="contacts">Contact Me</q-btn>
        </q-card-actions>
      </q-card>
    </q-collapsible>
  </q-list>
</template>

<script>
export default {
  name: 'UserList'
}
</script>

<style scoped>

</style>
