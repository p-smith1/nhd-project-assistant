<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout>
        <TabView>
          <TabViewItem title="Theme">
            <StackLayout class="m-10">
              <Image src="~/assets/images/breaking-barriers-logo.png" width="70%" class="m-b-20" />

              <Label text="Theme" class="font-weight-bold" />
              <Label class="hr-dark m-10" />
              <Label textWrap="true" class="m-b-20" text="Start your NHD journey by reviewing the 2019-2020 theme book and rule book.  This year’s theme is “Breaking Barriers in History”" />

              <Button text="2019 Theme Book" class="m-y-10" />
              <Button text="2019 NHD Rule Book" class="m-y-10" />
            </StackLayout>
          </TabViewItem>
          <TabViewItem title="Topic Exploration">
            <StackLayout class="m-10">
              <Label text="Topic Exploration" class="font-weight-bold" />
              <Label class="hr-dark m-10" />
              <Label textWrap="true" text="Selecting a topic for your NHD project is one of the most critical decisions you’re going to make.  This is a subject that you’re going to be spending a LOT of time with so it has to be something YOU are interested in.  Remember that you want to be able to show how your topic relates to the theme AND its significance to history!  Check out the following sources to help you select and narrow a topic for your NHD project:" />

              <ListView for="source in sources" height="100%" class="m-t-20">
                <v-template>
                  <Button :text="source.text" class="m-y-10" @tap="onSourceTap(source)" />
                </v-template>
              </ListView>
            </StackLayout>
          </TabViewItem>
        </TabView>
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
