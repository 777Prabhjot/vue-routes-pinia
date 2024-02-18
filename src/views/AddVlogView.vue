<script setup>

  import { ref } from 'vue';
  import {useRouter} from 'vue-router'
  import {useVlogStore} from '@/stores/vlog';

  const vlogs = useVlogStore();
  const router = useRouter();

  const title = ref('');

  const handleSubmit = () => {
    if(!title.value || title.value === ''){
      alert("Title is required");
    }else{
    vlogs.addVlog({
      id: Math.floor(Math.random() * 10000),
      title,
    });

    title.value = "";
    router.push("/");
  }
  }

</script>


<template>
  <div class="flex justify-center items-center h-full">
      <form class="border border-green-300 rounded-md p-3 w-fit flex flex-col" @submit.prevent="handleSubmit">
        <input placeholder="Title" class="my-5 border border-black rounded-sm p-1" v-model="title"/>
        <button class="bg-green-400 hover:bg-green-500 text-white">Add Vlog</button>
      </form>
  </div>
</template>
