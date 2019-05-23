<template>
  <Page>
    <ActionBar>
      <GridLayout class="fa-lg" width="100%" columns="auto, *" @tap="$refs.drawer.nativeView.toggleDrawerState()">
        <Label class="fa" verticalAlignment="center" :text="'fa-bars' | fonticon" col="0"/>
        <Label class="title" :text="currentPage.displayName"  col="1"/>
      </GridLayout>
    </ActionBar>

    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent class="sidedrawer-left">
        <!-- <Label class="sidedrawer-header" text="Drawer"/> -->
        <Image src="~/assets/images/nhd-logo.jpg" width="25%" />

        <StackLayout v-for="(page, i) in routes"
                     :key="i"
                     orientation="horizontal"
                     @tap="goToPage(page)"
                     class="fa-lg item-border">
          <Label class="drawer-item fa fa-lg" :text="page.icon | fonticon" />
          <Label :text="page.displayName" verticalAlignment="center" />
        </StackLayout>
      </StackLayout>

      <Frame ~mainContent>
        <!-- <slot name="mainContent"></slot> -->
        <component
          :is="currentPage"
          @update-current-page="handleUpdateCurrentPage"></component>
      </Frame>

      <!-- <GridLayout ~mainContent columns="*" rows="*">
        <Image src="~/assets/images/nhd-logo.jpg" width="50%" />
      </GridLayout> -->
    </RadSideDrawer>
  </Page>
</template>

<script>
  import routes from '~/router'
  import firebase from 'nativescript-plugin-firebase'

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
        this.logEvent(pageComponent.name)
        this.currentPage = pageComponent
        // and we probably want to close the drawer when changing pages
        this.$refs.drawer.nativeView.closeDrawer()
      },

      handleUpdateCurrentPage: function (e) {
        this.logEvent(e.name)
        this.currentPage = e
      },

      logEvent: function (key) {
        firebase.analytics.logEvent({ key: `${key}_tapped` }).then(
          function () {
            console.log("Firebase Analytics event logged");
          }
        )
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #DD2D30;
        color: #ffffff;
    }

    .fa-lg {
      font-size: 20em;
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
        padding: 16 16;
        color: #333333;
        width: 60em;
    }

    .item-border {
      border-bottom-color: black;
      border-bottom-width: 1px;
    }
</style>
