<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout class="m-10" height="100%">
        <Label text="Theme and Topic Exploration" class="font-weight-bold" />
        <Label class="hr-dark m-10" />
        <Label textWrap="true" class="m-b-20" text="Start your NHD journey by reviewing the theme sheet, theme book, and rule book. Check out the following sources to help you select and narrow a topic for your NHD project:" />

        <ListView for="source in sources" height="100%">
          <v-template>
            <Button :text="source.text" class="m-y-10" @tap="onSourceTap(source)" />
          </v-template>
        </ListView>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
  import * as utilsModule from 'tns-core-modules/utils/utils'

  export default {
    name: 'GettingStarted',
    displayName: 'Getting Started',
    icon: 'fa-rocket',
    data () {
      return {
        sources: [
          {
            name: 'GettingStarted_HowToNarrowTopicDrShirley',
            url: 'https://www.lagrange.edu/academics/undergraduate/majors/history/Narrowing-a-Topic.pdf',
            text: 'How to Narrow a Topic by Dr. Kevin Shirley'
          },
          {
            name: 'GettingStarted_SampleTopicFunnelMnhs',
            url: 'https://www.lagrange.edu/academics/undergraduate/majors/history/Sample-Topic-Funnel.pdf',
            text: 'Sample Topic Funnel from MNHS'
          },
          {
            name: 'GettingStarted_HowToSelectNarrowTopicMnhs',
            url: 'https://www.lagrange.edu/academics/undergraduate/majors/history/Selecting-and-Narrowing-Topic.pdf',
            text: 'How to Select and Narrow a Topic by MNHS'
          },
          {
            name: 'GettingStarted_SelectingTopicNhd',
            url: 'http://primarysourcenexus.org/2014/11/nhd-2015-selecting-topic-history-project',
            text: 'Selecting a Topic for NHD'
          }
        ]
      }
    },

    methods: {
      onSourceTap: function (source) {
        this.$emit('update-current-page', source.name)

        utilsModule.openUrl(source.url)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
