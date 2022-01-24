# eleventy-plugin-link-preview

Responsive link preview block.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="GROKobB" data-editable="true" data-user="aloskutov" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/aloskutov/pen/GROKobB">
  Link Preview Template</a> by Alex Loskutov (<a href="https://codepen.io/aloskutov">@aloskutov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Default style

### inline CSS
```css
<style>
.link-preview {
  padding: 0;
  display: flex;
  flex: 0 0 auto;
  box-shadow: inset 0 0 0 1px rgb(230 230 230);
}
.link-preview__link {
  text-decoration: none;
}
.link-preview__wrapper {
  display: flex;
  flex-wrap: wrap;
}
.link-preview__content {
  padding: 1rem;
  display: flex;
  flex: 1 1 270px;
  min-width: 270px;
  justify-content: center;
  flex-direction: column;
}
.link-preview__title {
  display: block;
  font-weight: 600;
  line-height: 24px;
  max-height: 50px;
  font-size: 20px;
  color: hsl(219, 25%, 25%);
  font-family: fell, Georgia, Cambria, "Times New Roman", Times, serif;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
}
.link-preview__description {
  margin-top: 8px;
  color: hsl(220, 15%, 30%);
  line-height: 20px;
  font-weight: 400;
  min-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  max-height: 40px;
}
.link-preview__domain {
  margin-top: 12px;
  color: hsl(221, 10%, 40%);
}
.link-preview__image {
  display: block;
  flex: 0 0 clamp(270px, (589px - 100vw)*1000, 100%);
  background-position: 0% 50%;
  background-size: cover;
  background-origin: border-box;
  height: clamp(180px, (589px - 100vw)*1000, auto);
  aspect-ratio: 1.5;
  box-shadow: inset 0 0 0 1px rgb(230 230 230);
  padding: 0;
  margin: 0;
}
</style>
```

### SCSS

```scss
.link-preview {
  padding: 0;
  display: flex;
  flex: 0 0 auto;
  box-shadow: inset 0 0 0 1px rgb(230 230 230);
  &__link {
    text-decoration: none;
    }
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  &__content {
    padding: 1rem;
    display: flex;
    flex: 1 1 270px;
    min-width: 270px;
    justify-content: center;
    flex-direction: column;
  }
  &__title {
    display: block;
    font-weight: 600;
    line-height: 24px;
    max-height: 50px;
    font-size: 20px;
    color: hsl(219, 25%, 25%);
    font-family: fell, Georgia, Cambria, "Times New Roman", Times, serif;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;
  }
  &__description {
    margin-top: 8px;
    color: hsl(220, 15%, 30%);
    line-height: 20px;
    font-weight: 400;
    min-width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    max-height: 40px;
  }
  &__domain {
    margin-top: 12px;
    color: hsl(221, 10%, 40%);
  }
  &__image {
    display: block;
    flex: 0 0 clamp(270px, (589px - 100vw)*1000, 100%);
    background-position: 0% 50%;
    background-size: cover;
    background-origin: border-box;
    height: clamp(180px, (589px - 100vw)*1000, auto);
    aspect-ratio: 1.5;
    box-shadow: inset 0 0 0 1px rgb(230 230 230);
    padding: 0;
    margin: 0;
  }
}
```
