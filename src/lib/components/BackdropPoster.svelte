<script lang="ts">
  export let posterPath: string = '';
  const bgImage = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${posterPath}`;
</script>

<div class="backdrop-poster" style="background-image: url('{bgImage}')">
  <div class="custom-bg">
    <slot />
  </div>
</div>

<style lang="scss">
  .backdrop-poster {
    border-bottom: 1px solid #000;
    background-position: left calc((50vw - 170px) - 340px) top;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    position: relative;
    z-index: 1;

    .custom-bg {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      background-image: linear-gradient(
        to right,
        rgba(18, 18, 10.5, 1) calc((50vw - 170px) - 340px),
        rgba(18, 18, 10.5, 0.84) 30%,
        rgba(18, 18, 10.5, 0.84) 100%
      );
    }
  }
</style>
