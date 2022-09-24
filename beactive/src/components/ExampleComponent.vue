<template>
  <div>
    <div class="q-pa-md">
    <q-card class="my-card">
      <q-parallax
        src="https://cdn.quasar.dev/img/parallax1.jpg"
        :height="150"
      />

      <q-card-section>
        <h1 class="card__title">{{ title }}</h1>
        <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="watch"/>
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
      <q-card-section class="text-subitle2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sint sit ex, aliquid rem necessitatibus dolore reiciendis minima, modi facilis facere asperiores expedita in voluptatem!
      </q-card-section>
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
