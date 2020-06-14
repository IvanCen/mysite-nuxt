<template>
  <footer class="footer">
    <p class="footer__author">Copyright &#169; 2020 Ivan Senkov</p>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: #828282;
  padding: 10px;

  .footer__author {
    font-size: 14px;
  }
}
</style>
