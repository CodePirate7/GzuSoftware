<template>
    <div>
        <div class="demo dev">
            <p>
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </p>
            <div class="text">
                该页面不存在(´･ω･`)
            </div>
        </div>
    </div>

</template>

<script>
    import '../assets/404.css'
    export default {
        name: "404"
    }
</script>

<style scoped lang="less">

    .dev{
        position: absolute;
        top:25%;
        .text{
            margin-top: 30px;
            text-align: center;
            font-size: 24;
            font-weight: bolder;
            letter-spacing: 1px;
        }

    }
</style>