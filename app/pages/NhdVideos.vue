<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <TabView>
        <TabViewItem title="NHD GA Channel" @selectedIndexChange="changeChannel">
          <WebView src="https://www.youtube.com/channel/UClWdIiQNkw26Tz4YQ77Hi5A" height="100%" />
        </TabViewItem>
        <TabViewItem title="NHD Channel">
          <WebView src="https://www.youtube.com/user/nationalhistory" height="100%" />
        </TabViewItem>
      </TabView>
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
      return {
        channels: [
          {
            name: 'NhdVideos_NhdGeorgiaYouTubeChannel',
            url: 'https://www.youtube.com/channel/UClWdIiQNkw26Tz4YQ77Hi5A',
            text: 'NHD Georgia YouTube Channel'
          },
          {
            name: 'NhdVideos_NhdYouTubeChannel',
            url: 'https://www.youtube.com/user/nationalhistory',
            text: 'National History Day (NHD) YouTube Channel'
          }
        ]
      }
    },

    methods: {
      changeChannel: function (newArgs) {
        let index = newArgs.value

        this.$emit('update-current-page', this.channels[index].name)
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
