<template>
    <div class="q-pa-md" style="max-width: 400px">
  
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
  
        <div class="dateTime">
          <q-date v-model="start" mask="YYYY-MM-DD HH:mm" color="purple" class="datePicker"/>
          <q-time v-model="start" mask="YYYY-MM-DD HH:mm" color="purple" />
        </div>
        
        <div class="dateTime">
          <q-date v-model="end" mask="YYYY-MM-DD HH:mm" color="purple" class="datePicker"/>
          <q-time v-model="end" mask="YYYY-MM-DD HH:mm" color="purple" />
        </div>
  
        <q-toggle v-model="accept" label="I accept the license and terms" />
  
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
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
      const endDate = ref('2020/01/01')
      const endTime = ref('10:00')
  
      return {
        title,
        accept,
        start,
        endDate,
        endTime,
  
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