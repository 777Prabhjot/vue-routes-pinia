<script setup>
    import { useRoute, useRouter} from 'vue-router';
    import { useVlogStore } from '@/stores/vlog';
    import { onMounted, ref } from 'vue';

    const title = ref('');
    const route = useRoute();
    const router = useRouter();

    const vlogStore = useVlogStore();
    const vlogId = route.params.id;
    const vlog = vlogStore.findVlogById(parseInt(vlogId));  

    onMounted(() => {
        title.value = vlog.title;
    });

    const handleSubmit = () => {
        if(!title.value || title.value === ''){
            alert("Please enter a title");
        }
        
        vlogStore.updateVlog(vlogId, {title: title.value});
        title.value = '';
        router.push('/');
    }

</script>

<template>
    <div>
        <div class="flex justify-center items-center h-full">
      <form class="border border-green-300 rounded-md p-3 w-fit flex flex-col" @submit.prevent="handleSubmit">
        <input placeholder="Title" class="my-5 border border-black rounded-sm p-1" v-model="title"/>
        <button class="bg-green-400 hover:bg-green-500 text-white">Update Vlog</button>
      </form>
  </div>
    </div>
</template>