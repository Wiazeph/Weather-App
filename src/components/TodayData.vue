<template>
  <div class="today">
    <div class="section-title">Today</div>

    <div class="today-card">
      <div class="div1">1</div>
      <div class="div2">2</div>
      <div class="div3">3</div>
      <div class="div4">4</div>
      <div class="div5">5</div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@tailwind utilities;

@layer utilities {
  .today {
    @apply flex flex-col gap-6;
  }
  .section-title {
    @apply text-4xl;
  }
}

.today-card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  height: 400px;
}

.div1 {
  grid-area: 1 / 1 / 3 / 3;
  background-color: red;
}
.div2 {
  grid-area: 1 / 3 / 2 / 4;
  background-color: red;
}
.div3 {
  grid-area: 1 / 4 / 2 / 5;
  background-color: red;
}
.div4 {
  grid-area: 2 / 3 / 3 / 4;
  background-color: red;
}
.div5 {
  grid-area: 2 / 4 / 3 / 5;
  background-color: red;
}
</style>
