import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useVlogStore = defineStore('vlogs', () => {
  const vlogs = ref([
    { id: 1, title: 'first vlog' },
    { id: 2, title: 'second vlog' },
    { id: 3, title: 'third vlog' },
    { id: 4, title: 'fourth vlog' }
  ])

  function addVlog(data) {
    vlogs.value.push(data)
  }

  function findVlogById(id) {
    return vlogs.value.find((vlog) => vlog.id === id)
  }

  function deleteVlog(id) {
    vlogs.value = vlogs.value.filter((vlog) => vlog.id !== parseInt(id))
  }

  function updateVlog(id, data) {
    vlogs.value = vlogs.value.map((vlog) => (vlog.id === parseInt(id) ? data : vlog))
  }

  return { vlogs, findVlogById, addVlog, deleteVlog, updateVlog }
})
