<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <WebView src="https://www.georgiahumanities.org/donate-form" height="100%" />
    </StackLayout>
  </Page>
</template>

<script>
  export default {
    name: 'Donate',
    displayName: 'Donate',
    icon: 'fa-gift',

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
