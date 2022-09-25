<template>
    <div class="main_cards">
    <div class="q-pa-md card__view" v-for="event in events" :key="event.id">
      <q-card class="my-card">
        <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        class="card__image"
      />

      <q-card-section class="card__section-one">
        <div class="card__header">
          <h1 class="card__title">{{ event.title }}</h1>
          <p class="card__ago"> posted 4 hours ago</p>
        </div>
        <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color= "blue" name="watch"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>Date/Time</q-item-label>
            <q-item-label caption>September 25th, 2022 5 PM - 7 PM</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="red" name="place" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Location</q-item-label>
            <q-item-label caption>{{event.location}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      </q-card-section>
      <q-separator color="blue" inset />
      <q-card-section class=" card__section-two text-subitle2">
      {{event.description}}
      </q-card-section>
      <q-card-section class="card__section-three">
      <div class="card__badge-list">
        <q-badge class= "card__badge-each" color="blue" v-for="tag in event.tags" :key="tag.id">
        {{tag.title}}
        </q-badge>
      </div>
      <q-btn color="red" label="Interested" @click="onInterestClick(event.id)" unelevated rounded/>
    </q-card-section>
    <div class="card__interested">
      <p>View More</p>
      <p>{{event.interested}} interested</p>
      <a href="http://localhost:8080/event/t21t523434"><p>View More</p></a>
    </div>
    </q-card>
    </div>
  </div>
</template>
  
<style scoped>
    .clicked{
      background-color: green;
    }
</style>

<script lang="ts">
  import {
    defineComponent,
    PropType,
    computed,
    ref,
    toRef,
    Ref,
    getCurrentInstance,
  } from 'vue';
  import { Todo, Meta, Event } from './models';

  function useClickCount() {
    const clickCount = ref(0);
    function increment() {
      clickCount.value += 1
      return clickCount.value;
    }
  
    return { clickCount, increment };
  }

  function useDisplayTodo(todos: Ref<Todo[]>) {
    const todoCount = computed(() => todos.value.length);
    return { todoCount };
  }
  
  export default defineComponent({
    name: 'EventComponent',
    props: {
      title: {
        type: String,
        required: true
      },
      todos: {
        type: Array as PropType<Todo[]>,
        default: () => []
      },
      meta: {
        type: Object as PropType<Meta>,
        required: true
      },
      events: {
        type: Object as PropType<Event[]>,
        required: true
      },
      active: {
        type: Boolean
      }
    },
    setup(props) {
        const app = getCurrentInstance();
        var clicked = false;
        function onInterestClick(curId: number) {
            const my_interests = app?.appContext.config.globalProperties.$MY_INTERESTS
            const all_events = app?.appContext.config.globalProperties.$ALL_EVENTS
            
            var desiredEvent;

            for (var i = 0; i < my_interests.length; i++) {
                if (all_events[i].id == curId) {
                    desiredEvent = all_events[i];
                }
            }

            var flag = false

            for (var i = 0; i < my_interests.length; i++) {
                let cur_interest = my_interests[i];
                if (cur_interest.id == i) {
                    flag = true;
                    app?.appContext.config.globalProperties.$MY_INTERESTS.splice(i,1);
                    break;
                }
            }

            if (!flag) {
                app?.appContext.config.globalProperties.$MY_INTERESTS.push(desiredEvent);
            }
            clicked = !clicked;
        }
      return { ...useClickCount(), ...useDisplayTodo(toRef(props, 'todos')), onInterestClick, clicked};
    }
  });
</script>
