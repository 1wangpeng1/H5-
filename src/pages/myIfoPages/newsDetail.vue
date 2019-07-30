<template>
    <div>
      newsDetail
    </div>
</template>

<script>
  export default {
    name: 'newsDetail',
    onLoad () {
      console.log(this.$route.query.newsId)
    }
  }
</script>

<style scoped>

</style>
