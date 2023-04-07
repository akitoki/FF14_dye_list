<template lang="pug">
.wrapper
  header
    h1.h1-title カララントどこで売ってますか？
  .main-contents
    DyeSelect
    ShopList
  footer
    .copyright
      | (C) SQUARE ENIX CO., LTD. All Rights Reserved.
      br
      | Copyright © A-HEAD All right reserved.
</template>
<script>
import DyeSelect from './components/DyeSelect.vue'
import ShopList from './components/ShopList.vue'
export default {
  name: 'App',
  components: {
    DyeSelect,
    ShopList,
  }
}
</script>
