<template>
  <v-card>
    <v-card-text>
      <v-subheader>Dimentions</v-subheader>
      <v-list>
        <ZExploreFieldsPanelItem
          v-for="dimention in dimentions"
          :field="dimention"
          :key="dimention.text"
          @toggleSelection="onSelectionChange"
          @toggleFilter="onFilterChange"
        />
      </v-list>
      <v-subheader>Mesures</v-subheader>
      <v-list>
        <ZExploreFieldsPanelItem
          v-for="measure in measures"
          :field="measure"
          :key="measure.text"
          @toggleSelection="onSelectionChange"
          @toggleFilter="onFilterChange"
        />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import ZExploreFieldsPanelItem from './ZExploreFieldsPanelItem'

export default {
  name: 'ZExploreFieldsPanel',
  components: {
    ZExploreFieldsPanelItem
  },
  props: {
    dimentions: {
      type: Array,
      defaults: () => []
    },
    measures: {
      type: Array,
      defaults: () => []
    }
  },
  methods: {
    onSelectionChange (field) {
      this.$emit('changeFieldSelection', field)
    },
    onFilterChange (field) {
      this.$emit('changeFilter', field)
    }
  }
}
</script>
