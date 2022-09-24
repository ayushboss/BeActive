<template>
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
