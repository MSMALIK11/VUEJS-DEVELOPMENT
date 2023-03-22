<template>
  <div>
    <div class="icons-wraper mt-3">
      <div class="icon">
        <v-icon
          v-if="isLike"
          large
          color="secondary darken-2"
          @click="isLike = !isLike"
        >
          mdi-heart
        </v-icon>
        <v-icon v-else large color="darken-2" @click="isLike = !isLike">
          mdi-heart-outline
        </v-icon>
        <!-- comment -->
        <v-icon large color="darken-2" @click="isOpen = !isOpen">
          mdi-message-settings
        </v-icon>

        <v-icon large color="darken-2"> mdi-send </v-icon>
      </div>
      <div class="icon">
        <v-icon
          v-if="isSave"
          large
          color="green darken-2"
          @click="isSave = !isSave"
        >
          mdi-heart-remove
        </v-icon>
        <v-icon v-else large color="darken-2" @click="isSave = !isSave">
          mdi-heart-plus-outline
        </v-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>