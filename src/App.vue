<template>
  <div id="app">
    <catagtory></catagtory>
    <new-list></new-list>
  </div>
</template>

<script>
import Catagtory from './components/Catagtory'
import NewList from './components/NewList'

export default {
  components: { Catagtory, NewList },
  name: 'App',

}

</script>

<style lang="less" scoped>

</style>