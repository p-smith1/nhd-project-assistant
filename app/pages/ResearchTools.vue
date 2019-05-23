<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Image src="~/assets/images/galileo-logo.png" @tap="openGalileo" backgroundColor="blue" class="research-link" />

      <Image src="~/assets/images/digi-lib-ga-logo.png" @tap="openDigitalLibraryGa" class="research-link" />
    </StackLayout>
  </Page>
</template>

<script>
  const utilsModule = require("tns-core-modules/utils/utils")
  import DigitalLibraryGeorgia from '~/pages/DigitalLibraryGeorgia'
  import Galileo from '~/pages/Galileo'

  export default {
    name: 'ResearchTools',
    displayName: 'Research Tools',
    icon: 'fa-wrench',
    data () {
      return {};
    },

    props: ['currentPage'],

    methods: {
      openGalileo: function () {
        this.$emit('update-current-page', Galileo)
      },

      openDigitalLibraryGa: function () {
        this.$emit('update-current-page', DigitalLibraryGeorgia)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .research-link {
    width: 75%;
    margin: 20px 0px;
  }
</style>
