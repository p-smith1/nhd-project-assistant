<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <WebView src="https://www.youtube.com/user/nationalhistory" height="100%" />
    </StackLayout>

    <StackLayout class="m-10" height="100%" verticalAlignment="middle">
      <ListView for="channel in channels">
        <v-template>
          <Button :text="channel.text" class="m-y-10" @tap="onChannelTap(channel)" />
        </v-template>
      </ListView>
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
            name: 'NhdVideos_NhdYouTubeChannel',
            url: 'https://www.youtube.com/user/nationalhistory',
            text: 'National History Day (NHD) YouTube Channel'
          },
          {
            name: 'NhdVideos_NhdGeorgiaYouTubeChannel',
            url: 'https://www.youtube.com/channel/UClWdIiQNkw26Tz4YQ77Hi5A',
            text: 'NHD Georgia YouTube Channel'
          }
        ]
      }
    },

    methods: {
      onChannelTap: function (channel) {
        this.$emit('update-current-page', channel.name)

        utilsModule.openUrl(channel.url)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
