<template lang="pug">
#shop-list
  .shop-list-wrap(v-if="selectDyes !== ''")
    h3.title {{selectDyes.color}}の入手先一覧
    ul
      li(v-for="shopId in shopIds")
        dl
          dt {{shopId.name}}
          dd(v-if="shopId.place !== ''")
            p
              | {{shopId.place}}
            span(v-if="shopId.place !== ''" @click="mapOpen" :data-mapId="shopId.id") MAP
    p.notice
      | ※クエスト報酬、IDでの宝箱ドロップは除外しています
    .page-top-button
      button(@click="gotoTop") ページ最上部へ戻る
  .map-modal(v-if="mapModal === 'open'")
    .map-modal-inner
      img(:src="require(`@/assets/images/map/${mapId}.jpg`)")
      .button
        button(@click="mapClose") マップを閉じる
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'ShopList',
  data() {
    return {
      mapModal: '',
      mapId: ''
    }
  },
  computed: mapState([
    'selectDyes',
    'shopIds'
  ]),
  methods: {
    mapOpen(e) {
      this.mapModal = 'open'
      this.mapId = String(e.currentTarget.getAttribute('data-mapId'))
    },
    mapClose() {
      this.mapModal = ''
    },
    gotoTop() {
      const top = document.getElementById('header')
      top.scrollIntoView({behavior : 'smooth'})
    },
  }
}
</script>
