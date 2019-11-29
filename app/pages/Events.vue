<template>
  <Page actionBarHidden="true">
    <ScrollView>
      <ListView for="(event, index) in events" @itemTap="onEventTap">
        <v-template>
          <StackLayout>
            <Label :text="event.title" class="h2 p-0" />
            <DockLayout stretchLastChild="false">
              <StackLayout dock="left" class="p-0">
                <Label :text="event.startDate | date" class="font-weight-bold p-0" />
                <Label :text="event.notes" class="p-0" />
              </StackLayout>
              <Image :src="getCalendarSrc(index)" style="width: 120px" dock="right" horizontalAlignment="right" :class="{ toggling: event.isAddedToCalendar }" />
            </DockLayout>
          </StackLayout>
        </v-template>
      </ListView>
    </ScrollView>
  </Page>
</template>

<script>
  import * as utilsModule from 'tns-core-modules/utils/utils'
  import * as Calendar from 'nativescript-calendar'
  import { Toasty, ToastPosition } from 'nativescript-toasty'

  export default {
    name: 'Events',
    displayName: 'Events',
    icon: 'fa-calendar',
    data () {
      return {
        toggleAnimationState: [],
        events: [
          {
            title: 'UGA/NE Georgia Regional, UGA',
            startDate: new Date('2020-02-15T05:00:00'),
            endDate: new Date('2020-02-16T05:00:00'),
            location: '1197 S Lumpkin St, Athens, GA 30602',
            notes: 'UGA Center for Continuing Education',
            url: 'http://bit.ly/NHDGA_Regionals',
            isAddedToCalendar: false
          },
          {
            title: 'Middle Georgia History Day, MGSU',
            startDate: new Date('2020-02-15T05:00:00'),
            endDate: new Date('2020-02-16T05:00:00'),
            location: '100 University Pkwy, Macon, GA 31206',
            notes: 'Middle Georgia State University',
            url: 'http://bit.ly/NHDGA_Regionals',
            isAddedToCalendar: false
          },
          {
            title: 'Thomas County History Day, TCMS',
            startDate: new Date('2020-02-20T05:00:00'),
            endDate: new Date('2020-02-21T05:00:00'),
            location: '4681 US HWY 84 Bypass, Thomasville, GA 31792',
            notes: 'Thomas County Middle School',
            url: 'http://bit.ly/NHDGA_Regionals',
            isAddedToCalendar: false
          },
          {
            title: 'Henry County History Day, HCSS',
            startDate: new Date('2020-03-02T05:00:00'),
            endDate: new Date('2020-03-03T05:00:00'),
            location: '33 N Zack Hinton Pkwy, McDonough, GA 30253',
            notes: 'Henry Country School System',
            url: 'http://bit.ly/NHDGA_Regionals',
            isAddedToCalendar: false
          },
          {
            title: 'Toombs Christian Academy History Day',
            startDate: new Date('2020-03-03T05:00:00'),
            endDate: new Date('2020-03-04T05:00:00'),
            location: '628 W Oglethorpe Ave, Lyons, GA 30436',
            notes: 'Robert Toombs Christian Academy',
            url: 'http://bit.ly/NHDGA_Regionals',
            isAddedToCalendar: false
          },
          {
            title: 'Augusta Regional, Augusta University',
            startDate: new Date('2020-03-07T05:00:00'),
            endDate: new Date('2020-03-08T05:00:00'),
            location: '2500 Walton Way, Augusta, GA 30904',
            notes: 'Summerville Campus, Allgood Hall',
            url: 'http://bit.ly/NHDGA_Regionals',
            isAddedToCalendar: false
          },
          {
            title: 'KSU Regional, Kennesaw State University',
            startDate: new Date('2020-03-07T05:00:00'),
            endDate: new Date('2020-03-08T05:00:00'),
            location: '1000 Chastain Road, Kennesaw, GA 30144',
            notes: 'Kennesaw State University',
            url: 'http://bit.ly/NHDGA_Regionals',
            isAddedToCalendar: false
          },
          {
            title: 'South Metro Regional, Jonesboro Georgia',
            startDate: new Date('2020-03-07T05:00:00'),
            endDate: new Date('2020-03-08T05:00:00'),
            location: '1087 Battle Creek Road, Joneseboro, Georgia',
            notes: 'Professional Learning Center',
            url: 'http://bit.ly/NHDGA_Regionals',
            isAddedToCalendar: false
          },
          {
            title: 'Coastal Georgia Regional, CGHS, Liberty County PAC',
            startDate: new Date('2020-03-11T05:00:00'),
            endDate: new Date('2020-03-12T05:00:00'),
            location: '2140 E Oglethorpe Hwy, Hinesville, GA 31313',
            notes: 'Liberty Co. Performing Arts Center',
            url: 'http://bit.ly/NHDGA_Regionals',
            isAddedToCalendar: false
          },
          {
            title: 'Georgia Southwestern Regional, GSSU',
            startDate: new Date('2020-03-13T05:00:00'),
            endDate: new Date('2020-03-14T05:00:00'),
            location: '800 Georgia Southwestern State University Drive, Americus, GA 31709',
            notes: 'GA Southwestern State University',
            url: 'http://bit.ly/NHDGA_Regionals',
            isAddedToCalendar: false
          },
          {
            title: 'West Georgia Regional, LaGrange College',
            startDate: new Date('2020-03-13T05:00:00'),
            endDate: new Date('2020-03-14T05:00:00'),
            location: '601 Broad St, LaGrange, GA 30240',
            notes: 'LaGrange College',
            url: 'http://bit.ly/NHDGA_Regionals',
            isAddedToCalendar: false
          },
          {
            title: 'NHD Georgia State Contest',
            startDate: new Date('2020-04-18T05:00:00'),
            endDate: new Date('2020-04-19T05:00:00'),
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
        let options = {
          title: e.item.title,
          startDate: e.item.startDate,
          endDate: e.item.endDate,
          location: e.item.location,
          notes: e.item.notes,
          url: e.item.url,
          calendar: {
            name: 'NHD Georgia Events',
            color: '#CB2C30',
            accountName: 'NHD Georgia'
          }
        }

        try {
          let createdId = await Calendar.createEvent(options)
          console.log(`Created Event with ID: ${createdId}`)

          e.item.isAddedToCalendar = true

          const toast = new Toasty({
            text: 'Event Added to Calendar!',
            position: ToastPosition.CENTER,
            android: { yAxisOffset: 100 },
            ios: {
              displayShadow: true,
              cornerRadius: 24
            }
          })

          toast.show()
        }
        catch (e) {
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
  .toggling {
    animation-name: toggle;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }

  @keyframes toggle {
    0% {
      transform: scale(1, 1);
    }

    30%,
    70% {
      transform: scale(0.8, 0.8);
    }

    50% {
      transform: scale(1.2, 1.2);
    }

    100% {
      transform: scale(1, 1);
    }
  }
</style>
