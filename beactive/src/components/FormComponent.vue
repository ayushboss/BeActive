<template>
    <div class="q-pa-md">
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
        
        <q-input
          filled
          v-model="location"
          label="Event Location"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        >
            <template v-slot:prepend>
                <q-icon name="place" />
            </template>
        </q-input>
        <div class="text-bold">Starting Date and Time</div>  
        <q-input filled v-model="start">
            <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                    <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                    </q-date>
                </q-popup-proxy>
                </q-icon>
            </template>

            <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-time v-model="date" mask="YYYY-MM-DD HH:mm">
                    <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                    </q-time>
                </q-popup-proxy>
                </q-icon>
            </template>
        </q-input>
        <br />
        <div class="text-bold">Ending Date and Time</div> 
        <q-input filled v-model="start">
            <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                    <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                    </q-date>
                </q-popup-proxy>
                </q-icon>
            </template>

            <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-time v-model="date" mask="YYYY-MM-DD HH:mm">
                    <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                    </q-time>
                </q-popup-proxy>
                </q-icon>
            </template>
        </q-input>
        
        <br />
        <q-input
            v-model="description"
            filled
            label="Event Description"
            type="textarea"
        />
        <br />
        <div class="text-bold">Select tags to make your event reach more people!</div>
        <q-select
            filled
            v-model="multiple"
            multiple
            :options="tags"
            label="Select tag(s)"
            style="width: 250px"
        />

        <q-toggle v-model="includeContactInfo" label="I would like my contact info to be shown under this event" />
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
      const location = ref(null)
      const accept = ref(false)
      const start = ref('2019-02-22 21:02')
      const end = ref('2019-02-22 21:02')
      const description = ref('')  
      const includeContactInfo = ref(false)
      const multiple = ref(null)
      const tags = [
        {
            label: 'Climate Change',
            title: 'Climate Change',
            id: 1
        },
        {
            label: 'Health',
            title: 'Health',
            id: 2
        },
        {
            label: 'Education',
            title: 'Education',
            id: 3
        },
        {
            label: 'Environment',
            title: 'Environment',
            id: 4
        },
        {
            label: 'Human Rights',
            title: 'Human Rights',
            id: 5
        },
        {
            label: 'Economy',
            title: 'Economy',
            id: 6
        },
        {
            label: 'Politics',
            title: 'Politics',
            id: 7
        }
    ]

      return {
        title,
        location,
        accept,
        start,
        end,
        description,
        includeContactInfo,
        multiple,
        tags,

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