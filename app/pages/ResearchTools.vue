<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <ListView for="tool in researchTools" @itemTap="onResearchToolTap">
        <v-template>
          <Image :src="tool.imageSrc" width="80%" class="m-y-5" />
        </v-template>
      </ListView>
    </ScrollView>
  </Page>
</template>

<script>
  import * as utilsModule from 'tns-core-modules/utils/utils'

  export default {
    name: 'ResearchTools',
    displayName: 'Research Tools',
    icon: 'fa-wrench',
    data () {
      return {
        researchTools: [
          {
            name: 'ResearchTool_Galileo',
            imageSrc: '~/assets/images/galileo-logo.png',
            url: 'http://www.galileo.usg.edu/express?link=nhda'
          },
          {
            name: 'ResearchTool_DigitalLibrarayGeorgia',
            imageSrc: '~/assets/images/digi-lib-ga-logo.png',
            url: 'https://dlg.usg.edu'
          },
          {
            name: 'ResearchTool_NewGaEncyclopedia',
            imageSrc: '~/assets/images/new-ga-encyclopedia-logo.png',
            url: 'https://www.georgiaencyclopedia.org'
          },
          {
            name: 'ResearchTool_GaArchives',
            imageSrc: '~/assets/images/ga-archives-logo.png',
            url: 'https://www.georgiaarchives.org'
          },
          {
            name: 'ResearchTool_LewisLibraryLibGuides',
            imageSrc: '~/assets/images/lagrange-college-logo.png',
            url: 'https://lagrange.libguides.com/nhd'
          },
          {
            name: 'ResearchTool_ChroniclingAmerica',
            imageSrc: '~/assets/images/chronicling-america-logo.png',
            url: 'https://chroniclingamerica.loc.gov'
          }
        ]
      }
    },

    props: ['currentPage'],

    methods: {
      onResearchToolTap: function (e) {
        this.$emit('update-current-page', e.item.name)
        utilsModule.openUrl(e.item.url)
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
