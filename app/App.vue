<template>
  <Page>
    <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <Label class="fa" :text="'fa-bars' | fonticon" @tap="$refs.drawer.nativeView.toggleDrawerState()" col="0"/>
        <Label class="title" :text="currentPage.name"  col="1"/>
      </GridLayout>
    </ActionBar>

    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent class="sidedrawer-left">
        <!-- <Label class="sidedrawer-header" text="Drawer"/> -->
        <Image src="~/assets/images/nhd-logo.jpg" width="25%" />

        <StackLayout v-for="(page, i) in routes"
                     :key="i"
                     orientation="horizontal"
                     @tap="goToPage(page)">
          <Label width="110px" class="drawer-item fa" :text="page.icon | fonticon" />
          <Label :text="page.name" />
        </StackLayout>
      </StackLayout>

      <Frame ~mainContent>
        <!-- <slot name="mainContent"></slot> -->
        <component :is="currentPage"></component>
      </Frame>

      <!-- <GridLayout ~mainContent columns="*" rows="*">
        <Image src="~/assets/images/nhd-logo.jpg" width="50%" />
      </GridLayout> -->
    </RadSideDrawer>
  </Page>
</template>

<script>
  import routes from '~/router'

  export default {
    data() {
      return {
        routes,
        currentPage: routes.Home
      }
    },

    methods: {
      goToPage (pageComponent) {
        // use the manual navigation method
        // this.$navigateTo(pageComponent, { clearHistory: true })
        this.currentPage = pageComponent
        // and we probably want to close the drawer when changing pages
        this.$refs.drawer.nativeView.closeDrawer()
      }
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
