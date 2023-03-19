<template>
    <footer class="footer">
    <div class="footer-row">
        <div class="footer-item footer-logo">one</div>
        <div class="footer-item footer-link">two</div>
        <div class="footer-item contact">three</div>
    </div>
    <div class="footer-nav">fffffffff</div>
    </footer>
</template>

<script>
    export default {
     name: 'Footer',   
    }
</script>

<style lang="scss" scoped>
footer {
    grid-area: footer;

.footer-row {
    background: #000;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
}
.footer-nav {
    background-color: aqua;
}

}

</style>