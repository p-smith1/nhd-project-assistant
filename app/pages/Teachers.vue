<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Label text="Teachers Page" horizontalAlignment="center" />
    </StackLayout>
  </Page>
</template>

<script>
  export default {
    name: 'Teachers',
    icon: 'fa-university',
    data () {
      return {};
    },
    methods: {
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #DD2D30;
        color: #ffffff;
    }

    .title {
        text-align: left;
        padding-left: 16;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background-color: #53ba82;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }
</style>