<script setup>
import {useVlogStore} from '@/stores/vlog'
import {useRouter} from 'vue-router'

const vlogs = useVlogStore();
const router = useRouter();

const handleDelete = (id) => {
  vlogs.deleteVlog(id);
}

</script>

<template>
  <main class="flex flex-wrap justify-evenly mt-5">
    <div class="border border-blue-300 rounded-md w-fit p-3" v-for="vlog in vlogs.vlogs" :key="vlog.id">
      <h1>{{ vlog.title }}</h1>
      <button class="bg-red-400 hover:bg-red-500 px-1 mt-2 text-white rounded-md" @click="handleDelete(vlog.id)">delete</button>
      <button class="bg-green-400 hover:bg-green-500 px-1 mt-2 text-white rounded-md" @click="router.push(`/updatevlog/${vlog.id}`)">update</button>
    </div>
  </main>
</template>
