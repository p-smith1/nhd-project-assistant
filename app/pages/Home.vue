<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <DockLayout stretchLastChild="false">
        <StackLayout class="m-10" dock="top">
          <Image src="~/assets/images/nhd-ga-logo.png" width="35%" />
          <Label textWrap="true" class="m-b-20" 
                 text="Welcome to NHD Georgia. Our goal is to help you get the most out of your History Day Project. You are joining a global community of NHD scholars totaling more than half a million last year. So, welcome to the adventure that is National History Day!" />
        </StackLayout>

        <StackLayout orientation="horizontal" horizontalAlignment="center" dock="bottom">
          <Image src="~/assets/images/ga-humanities-logo.png" @tap="openHumanities()" width="45%" class="m-x-5" />
          <Image src="~/assets/images/lagrange-college-logo.png" @tap="openCollege()" width="45%" class="m-x-10" />
        </StackLayout>
      </DockLayout>
    </ScrollView>
  </Page>
</template>

<script>
  import * as utilsModule from 'tns-core-modules/utils/utils'

  export default {
    name: 'Home',
    displayName: 'Home',
    icon: 'fa-home',
    data () {
      return {};
    },
    methods: {
      openCollege: function () {
        utilsModule.openUrl('https://www.lagrange.edu/')
      },

      openHumanities: function () {
        utilsModule.openUrl('https://www.georgiahumanities.org/')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>