---
home: true
heroImage: /MLAide-Radierer_Blau_bold.png
tagline: We make Machine Learning operable
actionText: Quick Start →
actionLink: /guide/
footer: Made by Farruch Kouliev with ❤️
---

<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card class="mx-auto my-12">
          <v-card-title v-text="card.title"></v-card-title>
          <v-card-text>
            <div v-text="card.text"></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', text: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.', flex: 4 },
        { title: 'Favorite road trips', text: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.', flex: 4 },
        { title: 'Best airlines', text: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.', flex: 4 },
        { title: 'Pre-fab homes', text: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.', flex: 4 },
        { title: 'Favorite road trips', text: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.', flex: 4 },
        { title: 'Best airlines', text: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.', flex: 4 },
      ],
    }),
  }
</script>
