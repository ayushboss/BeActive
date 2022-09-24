<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>


      
      <div class="grid_page">
        <div class="profile_page">
          <div class="user_profile" >
            <q-avatar size="8rem" style="margin-left:auto;margin-right:auto;margin-top:3rem;display:block;"><img src="../assets/images/blankPFP.jpg"></q-avatar>
            <h5 style="text-align: center;">First Last</h5>
          </div>
          <q-separator />
          <div class="expansion_items" style= "margin: 10px solid red;">
            <q-expansion-item
              expand-separator
              icon="today"
              label="My Events"
              :caption="my_events.length + ' event(s)'"
              default-opened
            >
              <q-expansion-item switch-toggle-side dense-toggle v-for="event in my_events" :key="event.id" :label="event.title" :header-inset-level="0" :content-inset-level="1.3">
                <q-card>
                  {{event.description}}
                </q-card>
              </q-expansion-item>
            </q-expansion-item>
            <q-expansion-item
              expand-separator
              icon="check"
              label="My Interests"
              :caption="my_interests.length +  ' interest(s)'"
              default-opened
            >
              <q-expansion-item switch-toggle-side dense-toggle v-for="event in my_interests" :key="event.id" :label="event.title" :header-inset-level="0" :content-inset-level="1.3">
                <q-card>
                  {{event.description}}
                </q-card>
              </q-expansion-item>
            </q-expansion-item>
          </div>
          <q-btn>
        
          </q-btn>
        </div>
        
            <q-page-container class="main_page">
        <router-view />
            </q-page-container>
      </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'MainLayout',


  setup () {
    const leftDrawerOpen = ref(false)

    const app = getCurrentInstance();
    const my_events = app?.appContext.config.globalProperties.$MY_EVENTS
    const my_interests = app?.appContext.config.globalProperties.$MY_INTERESTS 
    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      my_events,
      my_interests
    }
  }
});
</script>
