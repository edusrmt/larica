
<li>
  <button on:click="{remove}">
    <img src="/icons/x-mark.svg" alt="remover ingrediente" />
  </button>
  {name}
</li>

<script>
  export let name;
  export let remove;
</script>

<style scoped>
  li {
    background-color: #F4FFF7;
    border-radius: 30px;
    font-size: 1.3rem;
    color: #559F64;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  img {
    width: 1.5rem;
  }

  button {
    background-color: #358E48;
    border: none;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    cursor: pointer;
  }

</style>