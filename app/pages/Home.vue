<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <StackLayout class="m-10">
        <Image src="~/assets/images/nhd-ga-logo.png" width="35%" />
        <Label textWrap="true" class="m-b-20" text="Welcome to NHD Georgia. Our goal is to help you get the most out of your History Day Project. You are joining a global community of NHD scholars totaling more than half a million last year. So, welcome to the adventure that is National History Day!" />

        <Label text="Upcoming Events" class="font-weight-bold" />
        <Label class="hr-dark m-10" />
        <Label textWrap="true" text="The 2019 National Contest will be held June 9-13, 2019 at the University of Maryland, College Park." />
        <Label class="hr-light m-10" />
        <Label textWrap="true" text="The 2018-2019 theme is Triumph &amp; Tragedy in History" />
        <Label class="hr-light m-10" />

        <Label text="Sponsors" class="font-weight-bold m-t-10" />
        <Label class="hr-dark m-10" />
        <StackLayout orientation="horizontal" horizontalAlignment="center">
          <Image src="~/assets/images/ga-humanities-logo.png" width="45%" class="m-x-5" />
          <Image src="~/assets/images/lagrange-college-logo.png" width="45%" class="m-x-10" />
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
  export default {
    name: 'Home',
    displayName: 'Home',
    icon: 'fa-home',
    data () {
      return {};
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

</style>