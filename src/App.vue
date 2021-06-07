<template>
  <v-app>
    <div style="z-index:999999;">
      <v-bottom-navigation color="teal" grow>
        <v-btn style="height: auto; max-width: none" @click="toHome">
          <span>Home</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <!-- <v-btn style="height: auto; max-width: none" @click="toItem">
          <span>Item</span>
          <v-icon>mdi-folder-star-multiple</v-icon>
        </v-btn> -->
        <v-btn style="height: auto; max-width: none" @click="toHint">
          <span>Hint</span>
          <v-icon>mdi-account-check</v-icon>
        </v-btn>
        <v-btn style="height: auto; max-width: none" @click="toHelp">
          <span>Help</span>
          <v-icon>mdi-clipboard-alert-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>

    <v-container style="max-width: none !important; padding:12px 0 12px 13px; z-index:99999999;">
      <v-row no-gutters>
        <v-col md="11">
          <v-main>
            <router-view />
          </v-main>
        </v-col>
        <v-col md="1">
          <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            マップ
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-content @click="toArea(item.area)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    items: [
          { title: '古い物置', icon: 'mdi-view-dashboard', area: 'apple'},
          { title: '深い森', icon: 'mdi-help-box', area: 'firefly'},
          { title: '夕焼け丘', icon: 'mdi-view-dashboard', area: 'sunset'},
          { title: '海底', icon: 'mdi-image', area: 'ship'},
          // { title: 'About2', icon: 'mdi-help-box', area: '6'},
          // { title: 'メリー', icon: 'mdi-help-box', area: '7'},
        ],
        right: null,
    //
  }),
  methods: {
    toHome: function() {
      this.$router.push({ name: 'Home' })
    },
    toHint: function() {
      this.$router.push({ name: 'Hint' })
    },
    toItem: function() {
      this.$router.push({ name: 'Item' })
    },
    toHelp: function() {
      this.$router.push({ name: 'Help' })
    },
    toArea(areaId){
      switch (areaId) {
        case 'apple':
          this.$router.push({ name: 'apple' })
          break;
        case '2':
          this.$router.push({ name: 'side2' })
          break;
        case 'firefly':
          this.$router.push({ name: 'firefly' })
          break;
        case 'sunset':
          this.$router.push({ name: 'sunset' })
          break;
        case 'ship':
          this.$router.push({ name: 'ship' })
          break;
        case '6':
          this.$router.push({ name: 'side6' })
          break;
        default:
          break;
      }
    }
  },
};
</script>

<style scoped>
/* .container {
  max-width: none !important;
} */
html {
  background: lightgrey;
}
</style>
