<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <ListView for="(event, index) in events" @itemTap="onEventTap">
        <v-template>
          <StackLayout class="p-10">
            <Label :text="event.title" class="h2" />
            <DockLayout stretchLastChild="false">
              <StackLayout dock="left">
                <Label :text="event.startDate | date" class="font-weight-bold" />
                <Label :text="event.notes" />
              </StackLayout>
              <Image :src="getCalendarSrc(index)" style="width: 120px" dock="right" horizontalAlignment="right" />
            </DockLayout>
          </StackLayout>
        </v-template>
      </ListView>
    </ScrollView>
  </Page>
</template>

<script>
  import * as utilsModule from 'tns-core-modules/utils/utils'
  import * as Calendar from "nativescript-calendar"

  export default {
    name: 'Events',
    displayName: 'Events',
    icon: 'fa-calendar',
    data () {
      return {
        events: [
          {
            title: '"Welcome to the Theme" Live Webinar (via Vimeo)',
            startDate: new Date('2019-09-10T23:00:00'),
            endDate: new Date('2019-09-11T00:00:00'),
            location: 'Online',
            notes: 'Online',
            url: 'https://forms.gle/gemtP3Kn9mdBqatq5',
            isAddedToCalendar: false
          },
          {
            title: '"Research!" Live Webinar (via Vimeo)',
            startDate: new Date('2019-10-01T23:00:00'),
            endDate: new Date('2019-10-02T00:00:00'),
            location: 'Online',
            notes: 'Online',
            url: '',
            isAddedToCalendar: false
          },
          {
            title: 'Research Round Up',
            startDate: new Date('2019-10-05T13:00:00'),
            endDate: new Date('2019-10-05T17:00:00'),
            location: '601 Broad St, LaGrange, GA 30240',
            notes: 'Lewis Library, LaGrange College',
            url: '',
            isAddedToCalendar: false
          },
          {
            title: 'Research Round Up',
            startDate: new Date('2019-10-19T13:00:00'),
            endDate: new Date('2019-10-19T17:00:00'),
            location: '5800 Jonesboro Rd, Morrow, GA 30260',
            notes: 'Georgia Archives, Morrow Georgia',
            url: '',
            isAddedToCalendar: false
          },
          {
            title: 'West Georgia Regional Contest',
            startDate: new Date('2020-03-13T12:00:00'),
            endDate: new Date('2020-03-13T19:00:00'),
            location: '601 Broad St, LaGrange, GA 30240',
            notes: 'LaGrange College',
            url: '',
            isAddedToCalendar: false
          },
          {
            title: 'NHD Georgia State Contest',
            startDate: new Date('2020-04-18T00:00:00'),
            endDate: new Date('2020-04-19T00:00:00'),
            location: '601 Broad St, LaGrange, GA 30240',
            notes: 'Hosted at LaGrange College',
            url: '',
            isAddedToCalendar: false
          }
        ]
      }
    },

    filters: {
      date : function (value) {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

        return value.toLocaleDateString("en-US", options)
      }
    },

    props: ['currentPage'],

    methods: {
      onEventTap: async function (e) {
        // this.$emit('update-current-page', e.item.title)
        // utilsModule.openUrl(e.item.url)
        console.log(e)

        let options = {
          title: e.item.title,
          startDate: e.item.startDate,
          endDate: e.item.endDate,
          location: e.item.location,
          notes: e.item.notes,
          url: e.item.url
        }

        try {
          let createdId = await Calendar.createEvent(options)
          console.log(`Created Event with ID: ${createdId}`)

          e.item.isAddedToCalendar = true
        } catch (e) {
          console.log("Error creating an Event: " + e)
        }
      },

      getCalendarSrc: function (idx) {
        let event = this.events[idx]

        return (event.isAddedToCalendar)
          ? '~/assets/images/calendar-check.png'
          : '~/assets/images/calendar-add.png'
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
