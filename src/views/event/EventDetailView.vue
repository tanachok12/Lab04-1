<template>
  <p>{{ event.time }} on {{ event.data }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<script>
export default {
  props: ['event']
}
</script>
