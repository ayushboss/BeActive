<template>
  <div class="full_view">
        <q-banner inline-actions class="text-white bg-blue banner">
        <p class="full_title"> Climate Change Convention</p>
        <p class="full_time">posted 4 hours ago</p>
        </q-banner>
        <div class="full_view_list">
          <q-list>
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color= "blue" name="watch"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Date/Time</q-item-label>
              <q-item-label caption>25 Sept, 2022 | 5:00 pm - 6:00 pm</q-item-label>
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
          <q-item clickable>
            <q-item-section avatar>
              <q-icon color= "green" name="phone"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Contact Info</q-item-label>
              <q-item-label caption>jm139@rice.edu</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <div class="full_description">#FridaysForFuture is a youth-led and -organised movement that began in August 2018, after 15-year-old Greta Thunberg and other young activists sat in front of the Swedish parliament every schoolday for three weeks, to protest against the lack of action on the climate crisis. She posted what she was doing on Instagram and Twitter and it soon went viral.

</div>
        </div>
        <q-separator />
        <q-card-section class="card__section-three">
          <div class="card__interested full">
            <p>4.1K interested</p>
        <q-btn class = "thin" color="red" label="Interested?" unelevated rounded/>
      
  </div>
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
    </q-card-section>
 
    <div>

    </div>
    <div class="full_discussion">
      <h1 class="discussion">Discussion</h1>
    <q-separator />

      <div class="together">
        
        <p>Add comment</p>
        <q-icon class = "comment-icon" color= "green" name="comment"/>
        
      </div>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Brunch this weekend?</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Janet</span>
            -- I'll be in your neighborhood doing errands this
            weekend. Do you want to grab brunch?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>

      <q-separator inset="item" />

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Linear Project</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">John</span>
            -- Can we schedule a call for tomorrow?
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>
      <q-separator inset="item" />

<q-item clickable v-ripple>
  <q-item-section avatar>
    <q-avatar>
      <img src="https://cdn.quasar.dev/img/avatar4.jpg">
    </q-avatar>
  </q-item-section>

  <q-item-section>
    <q-item-label lines="1">Linear Project</q-item-label>
    <q-item-label caption lines="2">
      <span class="text-weight-bold">John</span>
      -- Can we schedule a call for tomorrow?
    </q-item-label>
  </q-item-section>

  <q-item-section side top>
    1 min ago
  </q-item-section>
</q-item>

<q-separator inset="item" />



      

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
  import { Todo, Meta, Event } from './models';
  
  export default defineComponent({
    name: 'FullPostComponent',
    props: {
    },
    setup(props) {
      console.log("Setting up full post component");
      // return {toRef(props, 'event')};
      return {};
    }
  });
  </script>
  