<template>
    <q-page class="row items-center justify-evenly">
      <event-component
        title="Shaq on diesel"
        active
        :todos="todos"
        :meta="meta"
        :events="my_events"
      ></event-component>
    </q-page>
</template>
  
<script lang="ts">
  import { Todo, Meta, Event } from 'components/models';
  import EventComponent from 'components/EventComponent.vue';
  import { defineComponent, ref } from 'vue';
  import { getCurrentInstance } from 'vue'
  import { createApp } from 'vue';
  export default defineComponent({
    name: 'IndexPage',
    components: { EventComponent },
    setup() {
      const todos = ref<Todo[]>([
        {
          id: 1,
          content: 'ct1'
        },
        {
          id: 2,
          content: 'ct2'
        },
        {
          id: 3,
          content: 'ct3'
        },
        {
          id: 4,
          content: 'ct4'
        },
        {
          id: 5,
          content: 'ct5'
        }
      ]);

      const meta = ref<Meta>({
        totalCount: 1200
      });
      
      const app = getCurrentInstance();
      const my_events = app?.appContext.config.globalProperties.$ALL_EVENTS

      return { todos, meta, my_events};
    }
  });
</script>
  