<template>
    <el-dialog
        title="选择地点"
        :visible.sync="visible"
        :width="dialogWidth"
        :class="[$style.main, 'or-dialog-wrapper']"
        custom-class="or-dialog"
        append-to-body
        :close-on-click-modal="false"
        :before-close="handleBeforeClose"
        top='0'
    >
        <div :class="$style.container" :style="containerStyle"></div>
        <div :class="$style.search">
            <el-input placeholder="请输入查询地址" clearable v-model="key" @keyup.native.enter="handleSearch">
                <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
            </el-input>
        </div>
        <span slot="footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="handleSubmit">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { BMap } from '@/utils/cdn';

export default {
    props: {
        // value: { type: Object, default: () => ({ lng: 121.481114, lat: 31.240128 }) },
        value: { type: Object, default: () => ({ lng: null, lat: null }) },
        city: { type: String, default: '上海' },
        visible: { type: Boolean, default: false },
    },
    data() {
        return {
            point: '',
            key: '',
            local: null, // 地图的local对象
            map: null, // 地图对象
        };
    },
    computed: {
        dialogWidth() {
            const width = parseInt(document.body.clientWidth * 0.8, 0);
            const maxWidth = 1000;
            return `${width > maxWidth ? maxWidth : width}px`;
        },
        containerStyle() {
            let height = parseInt(document.body.clientHeight * 0.8, 0);
            const maxHeight = 600;
            height = `${height > maxHeight ? maxHeight : height}px`;
            return { height };
        },
    },
    watch: {
        visible(val) {
            val && this.$nextTick(() => this.init());
            !val && this.destroy();
        },
    },
    methods: {
        init() {
            this.map = new BMap.Map(document.querySelector(`.${this.$style.container}`), { enableMapClick: false });
            const { map } = this;
            // const point = new BMap.Point(this.value.lng, this.value.lat);
            // let marker = new BMap.Marker(point);
            let marker = null;
            if (this.value.lng !== null) {
                const point = new BMap.Point(this.value.lng, this.value.lat);
                marker = new BMap.Marker(point);
                map.addOverlay(marker); // 定点坐标红点覆盖
                map.centerAndZoom(point, 14); // 定位中心和缩放
            } else {
                map.centerAndZoom(this.city, 14); // 定位中心和缩放
            }
            map.enableScrollWheelZoom(); // 允许鼠标缩放
            map.addControl(new BMap.NavigationControl()); // 缩放平移控件
            // map.addControl(new BMap.OverviewMapControl()); // 缩略图
            setTimeout(() => {
                map.addControl(new BMap.ScaleControl()); // 比例尺，延迟加载，否则会有黑色闪烁
            }, 1000);
            // map.addControl(new BMap.MapTypeControl());

            // 地图搜索
            this.local = new BMap.LocalSearch(map, {
                renderOptions: { map },
            });
            // local.search('上海火车站');

            const geoc = new BMap.Geocoder();

            map.addEventListener('click', (e) => {
                // 通过点击百度地图，可以获取到对应的point,由point的lng、lat属性就可以获取对应的经度纬度
                this.point = e.point;
                geoc.getLocation(this.point, () => {
                    marker && map.removeOverlay(marker);
                    marker = new BMap.Marker(this.point);
                    map.addOverlay(marker); // 定点坐标红点覆盖
                });
            });
        },

        destroy() {
            this.map = null;
        },

        handleSearch() {
            this.local.search(this.key);
        },

        handleClose() {
            this.$emit('update:visible', false);
            this.$emit('on-close');
        },

        handleBeforeClose() {
            this.handleClose();
        },

        handleSubmit() {
            this.$emit('input', this.point);
            this.handleClose();
        },
    },
};
</script>

<style lang="less" module>
.main {
    :global(.el-dialog__body) {
        position: relative;
    }
}

.container {
    padding: 0;
}

.search {
    position: absolute;
    top: 10px;
    width: 300px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    text-align: center;
    padding: 4px;
    background-color: #fff;
}
</style>
