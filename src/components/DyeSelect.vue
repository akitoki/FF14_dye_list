<template lang="pug">
.dye-select-wrap
  h2.title 色カテゴリ
  .color-category-wrap
    label(v-for="selectCategory in selectCategoryArr")
      input(type="radio" v-model="selectCategoryColor" :value="selectCategory" name="colorCat")
      .cursor
      span(:class="selectCategory")
  h2.title カララント選択
  .wrap(v-if="selectCategoryColor === 'white'")
    label(v-for="selectDye in whiteArr")
      input(type="radio" v-model="selectDyes" :value="selectDye" name="color")
      span(:style="selectDye")
      | {{selectDye.color}}
  .wrap(v-if="selectCategoryColor === 'red'")
    label(v-for="selectDye in redArr")
      input(type="radio" v-model="selectDyes" :value="selectDye" name="color")
      span(:style="selectDye")
      | {{selectDye.color}}
  .wrap(v-if="selectCategoryColor === 'brown'")
    label(v-for="selectDye in brownArr")
      input(type="radio" v-model="selectDyes" :value="selectDye" name="color")
      span(:style="selectDye")
      | {{selectDye.color}}
  .wrap(v-if="selectCategoryColor === 'yellow'")
    label(v-for="selectDye in yellowArr")
      input(type="radio" v-model="selectDyes" :value="selectDye" name="color")
      span(:style="selectDye")
      | {{selectDye.color}}
  .wrap(v-if="selectCategoryColor === 'green'")
    label(v-for="selectDye in greenArr")
      input(type="radio" v-model="selectDyes" :value="selectDye" name="color")
      span(:style="selectDye")
      | {{selectDye.color}}
  .wrap(v-if="selectCategoryColor === 'blue'")
    label(v-for="selectDye in blueArr")
      input(type="radio" v-model="selectDyes" :value="selectDye" name="color")
      span(:style="selectDye")
      | {{selectDye.color}}
  .wrap(v-if="selectCategoryColor === 'purple'")
    label(v-for="selectDye in purpleArr")
      input(type="radio" v-model="selectDyes" :value="selectDye" name="color")
      span(:style="selectDye")
      | {{selectDye.color}}
  .wrap(v-if="selectCategoryColor === 'extra'")
    label(v-for="selectDye in extraArr")
      input(type="radio" v-model="selectDyes" :value="selectDye" name="color")
      span(:style="selectDye")
      | {{selectDye.color}}
    p.notice ※上記以外のカララントは全てNPCからは入手不可
</template>
<script>
export default {
  name: 'DyeSelect',
  data() {
    return {
      selectColor: 'white',
      selectCategoryColor: 'white',
      selectCategoryArr: ['white', 'red', 'brown', 'yellow', 'green', 'blue', 'purple', 'extra'],
      selectDyes: [{color: 'スノウホワイト', id:[8], background: '#e4dfd0'}],
      whiteArr: [
        {color: 'スノウホワイト', id:[8], background: '#e4dfd0'},
        {color: 'アッシュグレイ', id:[1,2,3,4,5,6,16,7], background: '#aca8a2'},
        {color: 'グゥーブーグレイ', id:[1,2,3,4,5,6,16], background: '#898784'},
        {color: 'スレートグレイ', id:[1,2,3,4,5,6,16], background: '#656565'},
        {color: 'チャコールグレイ', id:[1,2,3,4,5,6,16], background: '#484742'},
        {color: 'スートブラック', id:[8], background: '#2b2923'},
      ],
      redArr: [
        {color: 'ローズピンク', id:[1,2,3,4,5,6,16,7], background: '#e69f96'},
        {color: 'ライラックパープル', id:[9], background: '#836969'},
        {color: 'ロランベリーレッド', id:[1,2,3,4,5,6,16], background: '#5b1729'},
        {color: 'ダラガブレッド', id:[15], background: '#781a1a'},
        {color: 'ラストレッド', id:[1,2,3,4,5,6,16], background: '#622207'},
        {color: 'ワインレッド', id:[15], background: '#451511'},
        {color: 'コーラルピンク', id:[9], background: '#cc6c5e'},
        {color: 'ブラッドレッド', id:[1,2,3,4,5,6,16], background: '#913b27'},
        {color: 'サーモンピンク', id:[1,2,3,4,5,6,16], background: '#e4aa8a'},
        {color: 'ルビーレッド', id:[13,14,17], background: '#e40011'},
        {color: 'チェリーピンク', id:[13,14,17], background: '#f5379b'},
        {color: 'カーマインレッド', id:[17], background: '#de0b16'},
        {color: 'ネオンピンク', id:[17], background: '#ed118e'},
      ],
      brownArr: [
        {color: 'サンセットオレンジ', id:[15], background: '#b75c2d'},
        {color: 'メサレッド', id:[1,2,3,4,5,6,16], background: '#7d3906'},
        {color: 'バークブラウン', id:[1,2,3,4,5,6,16,7], background: '#6e3d24'},
        {color: 'チョコレートブラウン', id:[1,2,3,4,5,6,16], background: '#6e3d24'},
        {color: 'ラセットブラウン', id:[1,2,3,4,5,6,16], background: '#4f2d1f'},
        {color: 'コボルドブラウン', id:[15], background: '#30211b'},
        {color: 'コルクブラウン', id:[12], background: '#c99156'},
        {color: 'キキルンブラウン', id:[10], background: '#996e3f'},
        {color: 'オポオポブラウン', id:[1,2,3,4,5,6,16], background: '#996e3f'},
        {color: 'アルドゴートブラウン', id:[10], background: '#a2875c'},
        {color: 'パンプキンオレンジ', id:[15], background: '#c57424'},
        {color: 'エーコンブラウン', id:[10], background: '#8e581b'},
        {color: 'オーチャードブラウン', id:[1,2,3,4,5,6,16], background: '#644216'},
        {color: 'チェスナットブラウン', id:[1,2,3,4,5,6,16], background: '#3d290d'},
        {color: 'ゴブリンブラウン', id:[12], background: '#b9a489'},
        {color: 'シェールブラウン', id:[10], background: '#92816c'},
        {color: 'モールブラウン', id:[1,2,3,4,5,6,16], background: '#615245'},
        {color: 'ロームブラウン', id:[15], background: '#3f3329'},
        {color: 'ブライトオレンジ', id:[17], background: '#f45011'},
      ],
      yellowArr: [
        {color: 'ボーンホワイト', id:[1,2,3,4,5,6,16,7], background: '#ebd3a0'},
        {color: 'ウルダハンブラウン', id:[12], background: '#b7a370'},
        {color: 'デザートイエロー', id:[1,2,3,4,5,6,16,7], background: '#dbb457'},
        {color: 'ハニーイエロー', id:[15], background: '#fac62b'},
        {color: 'ミリオンコーンイエロー', id:[15], background: '#e49e34'},
        {color: 'クァールイエロー', id:[11], background: '#bc8804'},
        {color: 'クリームイエロー', id:[1,2,3,4,5,6,16], background: '#f2d770'},
        {color: 'ハラタリイエロー', id:[1,2,3,4,5,6,16], background: '#a58430'},
        {color: 'レーズンブラウン', id:[11], background: '#403311'},
        {color: 'カナリーイエロー', id:[13,14,17], background: '#fef864'},
        {color: 'バニライエロー', id:[13,14,17], background: '#fbf1b4'},
        {color: 'ネオンイエロー', id:[17], background: '#dfea08'},
      ],
      greenArr: [
        {color: 'マッドグリーン', id:[1,2,3,4,5,6,16,7], background: '#585230'},
        {color: 'シルフグリーン', id:[12], background: '#bbbb8a'},
        {color: 'ライムグリーン', id:[10], background: '#abb054'},
        {color: 'モスグリーン', id:[1,2,3,4,5,6,16], background: '#707326'},
        {color: 'メドウグリーン', id:[12], background: '#8b9c63'},
        {color: 'オリーヴグリーン', id:[1,2,3,4,5,6,16], background: '#4b5232'},
        {color: 'マーシュグリーン', id:[10], background: '#323621'},
        {color: 'アップルグリーン', id:[12], background: '#9bb363'},
        {color: 'サボテンダーグリーン', id:[10], background: '#658241'},
        {color: 'ハンターグリーン', id:[8], background: '#284b2c'},
        {color: 'オチューグリーン', id:[8], background: '#406339'},
        {color: 'アダマンタスグリーン', id:[12], background: '#5f7558'},
        {color: 'ノフィカグリーン', id:[1,2,3,4,5,6,16], background: '#3b4d3c'},
        {color: 'ディープウッドグリーン', id:[15], background: '#1e2a21'},
        {color: 'セレストグリーン', id:[15], background: '#96bdb9'},
        {color: 'ターコイズグリーン', id:[12], background: '#437272'},
        {color: 'モルボルグリーン', id:[8], background: '#1f4646'},
        {color: 'ネオングリーン', id:[17], background: '#b5f710'},
      ],
      blueArr: [
        {color: 'アイスブルー', id:[1,2,3,4,5,6,16,7], background: '#b2c4ce'},
        {color: 'スカイブルー', id:[1,2,3,4,5,6,16], background: '#83b0d2'},
        {color: 'シーフォグブルー', id:[11], background: '#6481a0'},
        {color: 'ピーコックブルー', id:[11], background: '#3b6886'},
        {color: 'ロータノブルー', id:[9], background: '#1c3d54'},
        {color: 'コープスブルー', id:[9], background: '#8e9bac'},
        {color: 'セルレアムブルー', id:[1,2,3,4,5,6,16], background: '#4f5766'},
        {color: 'ウォードブルー', id:[15], background: '#4f5766'},
        {color: 'インクブルー', id:[1,2,3,4,5,6,16], background: '#1a1f27'},
        {color: 'ラプトルブルー', id:[11], background: '#5b7fc0'},
        {color: 'オサードブルー', id:[15], background: '#2f5889'},
        {color: 'ストームブルー', id:[15], background: '#234172'},
        {color: 'ヴォイドブルー', id:[15], background: '#112944'},
        {color: 'ロイヤルブルー', id:[8], background: '#273067'},
        {color: 'ミッドナイトブルー', id:[1,2,3,4,5,6,16], background: '#181937'},
        {color: 'シャドウブルー', id:[9], background: '#373747'},
        {color: 'アビサルブルー', id:[15], background: '#312d57'},
        {color: 'ドラグーンブルー', id:[13,14,17], background: '#000ea2'},
        {color: 'ターコイズブルー', id:[13,14,17], background: '#04afcd'},
        {color: 'アズールブルー', id:[17], background: '#3a4c90'},
      ],
      purpleArr: [
        {color: 'ラベンダーブルー', id:[9], background: '#877fae'},
        {color: 'グルームパープル', id:[1,2,3,4,5,6,16,7], background: '#514560'},
        {color: 'カラントパープル', id:[11], background: '#322c3b'},
        {color: 'アイリスパープル', id:[9], background: '#b79ebc'},
        {color: 'グレープパープル', id:[1,2,3,4,5,6,16], background: '#3b2a3d'},
        {color: 'ロータスピンク', id:[15], background: '#fecef5'},
        {color: 'コリブリピンク', id:[15], background: '#dc9bca'},
        {color: 'プラムパープル', id:[15], background: '#79526c'},
        {color: 'リーガルパープル', id:[15], background: '#66304e'},
        {color: 'バイオレットパープル', id:[17], background: '#62508f'},
      ],
      extraArr: [
        {color: 'ガンメタル', id:[13,14,17], background: '#606068'},
        {color: 'パールホワイト', id:[13,14,17], background: '#e9e3da'},
        {color: 'シャインブラス', id:[13,14,17], background: '#e7d197'},
      ],
      shops: [
        {id: 1, name: '雑貨屋 ウンシンレール', place: 'リムサ・ロミンサ：下甲板層 X:6.0 Y:12.3'},
        {id: 2, name: '雑貨屋 アラリック', place: 'グリダニア：旧市街 X:14.3 Y:8.8'},
        {id: 3, name: '雑貨屋 ナナベ', place: 'ウルダハ：ザル回廊 X:14.2 Y:11.0'},
        {id: 4, name: 'よろず屋 フリヌ', place: 'イシュガルド：上層 X:6.0 Y:9.9'},
        {id: 5, name: 'エイロンウィー', place: '蒼天街 X:12.2 Y:14.2'},
        {id: 6, name: 'よろず屋 トコハナ', place: 'クガネ X:12.9 Y:12.2'},
        {id: 7, name: 'カスミ', place: 'ゴールドソーサー X:7.2 Y:7.3'},
        {id: 8, name: 'イクサル族のよろず屋', place: '黒衣森：北部森林 X:24.9 Y:22.7'},
        {id: 9, name: 'サハギン族のよろず屋', place: '西ラノシア X:16.9 Y:22.4'},
        {id: 10, name: 'シルフ族のよろず屋', place: '黒衣森：東部森林 X:22.3 Y:26.3'},
        {id: 11, name: 'アマルジャ族のよろず屋', place: '南ザナラーン X:23.2 Y:14.1'},
        {id: 12, name: 'コボルド族のよろず屋', place: '外地ラノシア X:21.6 Y:17.8'},
        {id: 13, name: 'おみせやさん（青船貨）', place: '名もなき島 X:12.6 Y:28.3'},
        {id: 14, name: 'エニー（蒼天街振興券）', place: '蒼天街 X:12.0 Y:14.0'},
        {id: 15, name: 'NPC販売なし（製作のみ）', place: ''},
        {id: 16, name: 'ハウジング雇用NPC', place: ''},
        {id: 17, name: 'メズエードンク（コスモクレジット）', place: '焦がれの入江 X:21.8 Y:21.8'}
      ],
      shopId: []
    }
  },
  watch: {
    selectCategoryColor(value) {
      this.selectCategoryColor = value
    },
    selectDyes(value) {
      this.$store.commit('selectDyes', value)
      const values = this.selectDyes.id
      const shopArr = []
      this.shops.forEach((shop) => {
        const shopIds = shop.id
        for (let i= 0; i < values.length; i++) {
          if (values[i] === shopIds) {
            shopArr.push(shop)
          }
        }
      })
      this.$store.commit('shopIds', shopArr);
      this.$nextTick(() => {
        const shopList = document.getElementById('shop-list')
        shopList.scrollIntoView({behavior : 'smooth'})
      })
    }
  }
}
</script>
