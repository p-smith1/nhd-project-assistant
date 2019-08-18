<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <TabView>
        <TabViewItem title="Theme">
          <ScrollView>
            <StackLayout class="m-10">
              <Image src="~/assets/images/breaking-barriers-logo.png" width="70%" class="m-b-20" />

              <Label text="Theme" class="font-weight-bold" />
              <Label class="hr-dark m-10" />
              <Label textWrap="true" class="m-b-20" text="Start your NHD journey by reviewing the 2019-2020 theme book and rule book.  This year’s theme is “Breaking Barriers in History”" />

              <Button text="2020 Theme Book" class="m-y-10" @tap="openThemeBook()" />
              <Button text="2020 NHD Rule Book" class="m-y-10" @tap="openRuleBook()" />
              <Button text="2020 NHD Theme Narrative" class="m-y-10" @tap="openThemeNarrative()" />
            </StackLayout>
          </ScrollView>
        </TabViewItem>
        <TabViewItem title="Topic Exploration">
          <ScrollView height="100%">
            <StackLayout height="100%" class="m-10">
              <Label text="Topic Exploration" class="font-weight-bold" />
              <Label class="hr-dark m-10" />
              <Label textWrap="true" text="Selecting a topic for your NHD project is one of the most critical decisions you’re going to make.  This is a subject that you’re going to be spending a LOT of time with so it has to be something YOU are interested in.  Remember that you want to be able to show how your topic relates to the theme AND its significance to history!  Check out the following sources to help you select and narrow a topic for your NHD project:" />

              <ListView for="source in sources" height="100%" class="m-t-20">
                <v-template>
                  <Button :text="source.text" class="m-y-10" @tap="onSourceTap(source)" />
                </v-template>
              </ListView>
            </StackLayout>
          </ScrollView>
        </TabViewItem>
      </TabView>
    </StackLayout>
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
            url: 'https://www.lagrange.edu/academics/undergraduate/majors/history/national-history-day/_images/Narrowing-a-Topic.pdf',
            text: 'How to Narrow a Topic by Dr. Kevin Shirley'
          },
          {
            name: 'GettingStarted_SampleTopicFunnelMnhs',
            url: 'https://www.lagrange.edu/academics/undergraduate/majors/history/national-history-day/_images/Sample-Topic-Funnel.pdf',
            text: 'Sample Topic Funnel from MNHS'
          },
          {
            name: 'GettingStarted_HowToSelectNarrowTopicMnhs',
            url: 'https://www.lagrange.edu/academics/undergraduate/majors/history/national-history-day/_images/Selecting-and-Narrowing-Topic.pdf',
            text: 'How to Select and Narrow a Topic by MNHS'
          },
          {
            name: 'GettingStarted_SelectingTopicNhd',
            url: 'https://primarysourcenexus.org/2014/11/nhd-2015-selecting-topic-history-project/',
            text: 'Selecting a Topic for NHD'
          }
        ]
      }
    },

    methods: {
      onSourceTap: function (source) {
        this.$emit('update-current-page', source.name)

        utilsModule.openUrl(source.url)
      },

      openThemeBook: function () {
        this.$emit('update-current-page', 'GettingStarted_ThemeBook')

        utilsModule.openUrl('https://www.lagrange.edu/academics/undergraduate/majors/history/national-history-day/_images/NHD_2020ThemeBook_web%20version_0.pdf')
      },

      openRuleBook: function () {
        this.$emit('update-current-page', 'GettingStarted_RuleBook')

        utilsModule.openUrl('https://nimbus.lagrange.edu/resources/documents/NHDContestRuleBook_Web%202014-2015.pdf')
      },

      openThemeNarrative: function () {
        this.$emit('update-current-page', 'GettingStarted_ThemeNarrative')

        utilsModule.openUrl('https://www.lagrange.edu/academics/undergraduate/majors/history/national-history-day/_images/NHD_2020ThemeNarrative.pdf')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
