<template>
  <amp-body>
    <main>
      <h1>2018</h1>
      <nav>
        <a href="/archive">/archive</a>
      </nav>
      <amp-list width="auto" height="100" src="/reading2018.json" items=".">
        <!-- eslint-disable -->
        <div
          v-html="
            `<template type=&quot;amp-mustache&quot;>
              {{#attachments}}
                <div class=&quot;listitem&quot;>
                  <a
                    href=&quot;{{title_link}}&quot;
                    target=&quot;_blank&quot;>
                    {{title}}
                  </a>
                </div>
              {{/attachments}}
            </template>`
          "
        />
        <!-- eslint-enable -->
      </amp-list>
    </main>
  </amp-body>
</template>

<script>
export default {
  amp: 'only'
}
</script>

<style>
@import "yama-normalize";

[role="list"] {
  margin: calc(var(--rhythm) * 3) 0;
  line-height: 1;
  padding-left: calc(var(--rhythm) * 2) !important;
  list-style-type: none;
}
.listitem {
  line-height: calc(var(--rhythm) * 3);
  font-size: 1rem;
}
.listitem::before {
  background-color: var(--black);
  border-radius: 50%;
  color: #fff;
  content: "";
  width: 6px;
  height: 6px;
  margin: 9px 0 0;
  position: absolute;
  left: 0;
}
@media (prefers-color-scheme: dark) {
  .listitem::before {
    background-color: var(--white);
  }
}
</style>
