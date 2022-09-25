<template>
  <div>
    <div class="q-pa-md card__view">
    <q-card class="my-card">
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        class="card__image"
      />
      

      <q-card-section class="card__section-one">
        <div class="card__header">
          <h1 class="card__title">{{ title }}</h1>
          <p class="card__ago"> posted 4 hours ago</p>
        </div>
        <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color= "blue" name="watch"/>
          </q-item-section>

          <q-item-section>
            <q-item-label>Date/Time</q-item-label>
            <q-item-label caption>24 Sept, 2024 | 5:00 pm - 6:00 pm</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="red" name="place" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Location</q-item-label>
            <q-item-label caption>RMC Grand Hall</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      </q-card-section>
      <q-separator color="blue" inset />
      <q-card-section class=" card__section-two text-subitle2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sint sit ex, aliquid rem necessitatibus dolore reiciendis minima, modi facilis facere asperiores expedita in voluptatem!
      </q-card-section>
      <q-card-section class="card__section-three">
      <div class="card__badge-list">
      <q-badge class= "card__badge-each" color="blue">
      Environment
      </q-badge>
      <q-badge class= "card__badge-each" color="blue">
      Cimate
      </q-badge>
      <q-badge class= "card__badge-each" color="blue">
      Future
      </q-badge>
      </div>
      <q-btn color="red" label="Interested?" unelevated rounded/>
    </q-card-section>
    <div class="card__interested">
      <p>67 interested</p>
    </div>
    </q-card>


    
    
    </div>
  </div>
</template>



<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  ref,
  toRef,
  Ref,
} from 'vue';
import { Todo, Meta } from './models';

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
  name: 'ExampleComponent',
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
    active: {
      type: Boolean
    }
  },
  setup(props) {
    return { ...useClickCount(), ...useDisplayTodo(toRef(props, 'todos')) };
  },
  methods: {
    incrementCountM() {
      this.clickCount++;
    }


  }

});






</script>
