
<template>
  <main>
    <h1>Archive Page</h1>
    <p>これまで読んできたしてきた情報の年別ページ</p>
    <ul role="list">
      <li role="listitem">
        <nuxt-link to="/archive/2019">
          2019
        </nuxt-link>
      </li>
      <li role="listitem">
        <nuxt-link to="/archive/2018">
          2018
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>

<style lang="scss">
:root {
  --rhythm: .5rem;
  --space: 1.5rem;
}
.with-sidebar {
  & > * {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  & > * > * {
    flex-grow: 1;
    flex-basis: 120px;
  }
  & > * > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(50% - 90px);
  }
}
</style>

<style scoped>
main {
  max-width: 48rem;
  margin: 0 var(--rhythm) 0 calc(var(--rhythm) * 3);
}
</style>
