<template>
    <div :key="task.id" v-for="task in tasks">
       <TasK @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task"/> 
        
    </div>
</template>

<script>
import TasK from "./TasK"
export default {
    name:'TaskS',
    props:{
        tasks:Array,
    },
    components:{
        TasK ,
    },
    emits:['delete-task', 'toggle-reminder'],
}
</script>