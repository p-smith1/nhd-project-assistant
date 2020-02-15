<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <WebView src="https://www.youtube.com/user/nationalhistory" height="100%" />
    </StackLayout>
  </Page>
</template>

<script>
  import * as utilsModule from 'tns-core-modules/utils/utils'

  export default {
    name: 'NhdVideos',
    displayName: 'NHD Videos',
    icon: 'fa-film',

    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
</style>
