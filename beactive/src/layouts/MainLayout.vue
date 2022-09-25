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
        <q-space />
        <q-btn-dropdown stretch flat label="FILTER EVENTS">
        <q-list>
          <q-item-label header>Filter through social cause</q-item-label>
          <q-item v-for="filter in filters" :key="filter.id" clickable v-close-popup tabindex="0">
            <q-separator inset spaced />
            <q-item-section>
              <q-item-label>{{filter.label}}</q-item-label>
              <q-item-label caption>{{filter.title}}</q-item-label>
            </q-item-section>
            <q-separator inset spaced />
            <q-item-section side>
              <q-icon name="info" />
            </q-item-section>
          </q-item>
        <q-separator inset spaced />
      </q-list>
      </q-btn-dropdown>
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="group_add" />
    </q-toolbar>
    </q-header>


      
      <div class="grid_page">
        <div class="profile_page">
          <div class="user_profile">
            <q-avatar size="8rem"><img src="../assets/images/blankPFP.jpg"></q-avatar>
            <h1>First Last</h1>
            <q-btn color="blue">Account Settings</q-btn>            
          </div>
          <q-separator />
          <div class="expansion_items" style= "margin: 10px solid red;">
            <q-expansion-item
              expand-separator
              icon="today"
              label="My Events"
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
              default-opened
            >
              <q-expansion-item switch-toggle-side dense-toggle v-for="event in my_interests" :key="event.id" :label="event.title" :header-inset-level="0" :content-inset-level="1.3">
                <q-card>
                  {{event.description}}
                </q-card>
              </q-expansion-item>
            </q-expansion-item>
          </div>
          <div class="sign_out_button">
            <q-btn color="red">Sign Out</q-btn>            
          </div>
        </div>
            <div class="center-main">
              <q-page-container class="main_page">
                      <router-view />
              </q-page-container>
            </div>
            
      </div>
      <!-- <footer id="footer">Footer</footer> -->
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
  },
  methods: {
    num_my_events() {
      const app = getCurrentInstance();
      return app?.appContext.config.globalProperties.$MY_EVENTS.length;
    },
    num_my_interests() {
      const app = getCurrentInstance();
      return app?.appContext.config.globalProperties.$MY_INTERESTS.length;
    }
  }, data() {
    return {
      filters: [
        {
            label: 'Climate Change',
            title: 'Climate Change',
            id: 1
        },
        {
            label: 'Health',
            title: 'Health',
            id: 2
        },
        {
            label: 'Education',
            title: 'Education',
            id: 3
        },
        {
            label: 'Environment',
            title: 'Environment',
            id: 4
        },
        {
            label: 'Human Rights',
            title: 'Human Rights',
            id: 5
        },
        {
            label: 'Economy',
            title: 'Economy',
            id: 6
        },
        {
            label: 'Politics',
            title: 'Politics',
            id: 7
        }
    ]
    }
  }
});
</script>
