<template>
    <div class="main">
        <div class="container">
            <div class="row col-md-7 offset-md-3 mt-md-1">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">支付宝五福图片</h4>
                        <p class="alert alert-warning">注：今年的五福每天扫的次数有限，但每天可扫。</p>
                        <p class="alert alert-success">共：<span v-text="max_num"></span>条数据，第：<span v-text="nowId"></span>条</p>
                        <img :src="imgUrl">
                        <p class="card-text">
                            <button :disabled="nowId <= 1" class="btn btn-info pull-left" @click="goPre()">上一张</button>
                            <button :disabled="nowId >= max_num" class="btn btn-success float-right" @click="goNext()">下一张</button>
                        </p>
                    </div>
                </div>
            </div>
            <router-view/>
        </div>
    </div>
</template>

<script>
import {data} from './data.json';
// console.log(data);
export default {
    data() {
        return {
            imgUrl:'',
            idParams:this.$route.query.id,
            nowId:0,
            max_num:0,
        }
    },
    mounted:function(){
        // console.log(data.length);
        this.max_num = data.length;
        this.putUrl();
    },
    methods: {
        getUrl(id = 1) {
            this.nowId = id;
            return data[id-1];
        },
        putUrl() {
            this.imgUrl = this.getUrl(this.idParams);
            // console.log(this.imgUrl);
        },
        goPre() {
            this.imgUrl = this.getUrl(--this.nowId);
        },
        goNext() {
            this.imgUrl = this.getUrl(++this.nowId);
        }
    }
}
</script>

<style lang="less" scoped>
@import url(./theme/base.less);
.main {
}
.img-300 {
    width: 500px;
}
</style>


