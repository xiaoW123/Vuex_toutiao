<template>
  <div>
     <ul class="catagtory">
        <li :class='{select: item.id === currentCatagtory}' v-for="item,index in catagtory" :key="index"
        @click="$store.commit('catagtory/updataCurrentCatagtory', item.id)">{{item.name}}</li>
      </ul>
      
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Catagtory',
  computed: {
    ...mapGetters(['catagtory', 'currentCatagtory'])
  },
  created() {
    //通过子模块调用actions
    this.$store.dispatch('catagtory/getCatagtory')
  }
}
</script>

<style lang="less" scoped>

</style>