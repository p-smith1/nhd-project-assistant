<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <WebView src="http://www.galileo.usg.edu/welcome" height="100%" />
    </StackLayout>
  </Page>
</template>

<script>
  export default {
    name: 'Galileo',
    displayName: 'Galileo',
    icon: 'fa-wrench',

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
