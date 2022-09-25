<template>
    <q-page class="row items-center justify-evenly">
      <full-post-component></full-post-component>
    </q-page>
</template>
  
<script lang="ts">
  import { Todo, Meta, Event } from 'components/models';
  import FormComponent from 'components/FormComponent.vue';
  import FullPostComponent from 'components/fullpostComponent.vue';
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'IndexPage',
    components: { FullPostComponent },
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

      const my_events = ref<Event[]>([
        {
          id: 0,
          title: 'Climate Change Convention',
          startingTime: new Date(),
          endTime: new Date(),
          location: 'RMC Hall',
          tags: [{id: 0, title: 'Climate Change', label: 'Climate Change'}],
          description: 'Some climate change convention thing at the RMC wooyeah',
          contactInfoOn: true,
          contactInfo: 'as328@rice.edu',
          interested: 10,
          timeOfPosting: new Date(),
        },
        {
          id: 1,
          title: 'Tree Convention',
          startingTime: new Date(),
          endTime: new Date(),
          location: 'Lovett College',
          tags: [{id: 0, title: 'Climate Change', label: 'Climate Change'}, {id: 1, title: 'Trees', label: 'Trees'}],
          description: 'We really do love trees, don\'t we?',
          contactInfoOn: false,
          interested: 10,
          timeOfPosting: new Date(),
        }
      ]);

      return { todos, meta, my_events };
    }
  });
</script>
  