
<template>
  <div>
    <div class="container">
      <div class="Chart__list">
        <div class="Chart">
          <h2>Linechart</h2>
          <line-example></line-example>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineExample from './Chart.js'
export default {
  components: {
    LineExample
  }
}
</script>