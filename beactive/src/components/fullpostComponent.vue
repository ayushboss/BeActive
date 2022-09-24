<template>
    <div>
      <div class="q-pa-md">
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
      </q-card>
      
      </div>
    </div>
  </template>