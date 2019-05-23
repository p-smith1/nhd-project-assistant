<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <WebView src="https://www.youtube.com/user/nationalhistory" height="100%" />
    </StackLayout>
  </Page>
</template>

<script>
  export default {
    name: 'NhdVideos',
    displayName: 'NHD Videos',
    icon: 'fa-film',

    data () {
      return {
      }
    },

    methods: {
    }
  }
</script>

<style lang="scss" scoped>

</style>
