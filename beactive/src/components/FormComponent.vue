<template>
    <div class="q-pa-md" style="max-width: 400px">
      <h1>Create an event</h1>
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="title"
          label="Event title"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        
        <div class="text-bold">Starting Date and Time</div>  
        <div class="dateTime">
          <q-date v-model="start" mask="YYYY-MM-DD HH:mm" color="purple" class="datePicker"/>
          <q-time v-model="start" mask="YYYY-MM-DD HH:mm" color="purple" />
        </div>
        <br />
        <div class="text-bold">Ending Date and Time</div> 
        <div class="dateTime">
          <q-date v-model="end" mask="YYYY-MM-DD HH:mm" color="purple" class="datePicker"/>
          <q-time v-model="end" mask="YYYY-MM-DD HH:mm" color="purple" />
        </div>
        
        <br />
        <q-input
            v-model="description"
            filled
            label="Event Description"
            type="textarea"
        />

        <q-toggle v-model="includeContactInfo" label="I would like my contact info to be shown under this event" />
        <q-toggle v-model="accept" label="I accept the license and terms" />
  
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>

        <q-select
            filled
            v-model="multiple"
            multiple
            :options="options"
            label="Multiple"
            style="width: 250px"
        />
        
      </q-form>
  
    </div>
  </template>
  
  <script>
  import { useQuasar } from 'quasar'
  import { ref } from 'vue'
  
  export default {
    setup () {
      const $q = useQuasar()
  
      const title = ref(null)
      const accept = ref(false)
      const start = ref('2019-02-22 21:02')
      const end = ref('2019-02-22 21:02')
      const description = ref('')  
      const includeContactInfo = ref(false)

      return {
        title,
        accept,
        start,
        end,
        description,
        includeContactInfo,

        onSubmit () {
          if (accept.value !== true) {
            $q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'You need to accept the license and terms first'
            })
          }
          else {
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Submitted'
            })
          }
        },
  
        onReset () {
          name.value = null
          age.value = null
          accept.value = false
        }
      }
    }
  }
  </script>