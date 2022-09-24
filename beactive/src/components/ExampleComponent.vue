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

      <div class="dateTimeSection">
        <div class="text-bold">Starting Date and Time</div>
        <div class="dateTime">
          <q-date
            v-model="startDate"
            first-day-of-week="1"
            class="date"
          />
          <q-time 
            v-model="startTime"
          />
        </div>
      </div>
      
      <div class="dateTimeSection">
        <div class="text-bold">Ending Date and Time</div>
        <div class="dateTime">
          <q-date
            v-model="endDate"
            first-day-of-week="1"
            class="date"
          />
          <q-time 
            v-model="endTime"
          />
        </div>
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
    const startDate = ref('2020/01/01')
    const startTime = ref('10:00')
    const endDate = ref('2020/01/01')
    const endTime = ref('10:00')

    return {
      title,
      accept,
      startDate,
      startTime,
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