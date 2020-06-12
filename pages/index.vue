<template>
  <div class="container container--border">
    <my-header></my-header>
    <h1>Hello</h1>
    <label>
      <input type="text" v-model="text" />
    </label>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Header from '~/components/Header'
export default {
  components: {
    'my-header': Header,
  },
  data() {
    return {
      text: '',
    }
  },
}
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
