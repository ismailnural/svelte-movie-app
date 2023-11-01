<script lang="ts">
  import { GhostLoader } from '$components';

  export let title: string = '';
  export let posterPath: string = '';
  export let size: 'small' | 'medium' | 'large';

  const posterSize = {
    small: 300,
    medium: 780,
    large: 1280,
  };
</script>

<div class="poster">
  <img
    src={`https://www.themoviedb.org/t/p/w${posterSize[size]}${posterPath}`}
    width={posterSize[size] / 2}
    height="auto"
    alt={title}
  />
  <GhostLoader />
</div>

<style lang="scss">
  .poster {
    padding-top: calc(1920 / 1280 * 100%);
    position: relative;

    img {
      display: block;
      position: absolute;
      top: 0;
    }
  }
</style>
