<template>
    <el-dialog
        title="选择地点"
        :visible.sync="visible"
        :width="dialogWidth"
        class="or-dialog-wrapper"
        custom-class="or-dialog"
        append-to-body
        :close-on-click-modal="false"
        :before-close="handleBeforeClose"
        top='0'
    >
        <div id="baiduMapContainer" :style="containerStyle"></div>
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
        value: { type: Object, default: () => ({ lng: 121.481114, lat: 31.240128 }) },
        visible: { type: Boolean, default: false },
    },
    data() {
        return {
            point: '',
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
        },
    },
    methods: {
        init() {
            const map = new BMap.Map('baiduMapContainer', { enableMapClick: false });
            const point = new BMap.Point(this.value.lng, this.value.lat);
            let marker = new BMap.Marker(point);
            map.addOverlay(marker); // 定点坐标红点覆盖
            map.centerAndZoom(point, 13); // 定位中心和缩放
            map.enableScrollWheelZoom(); // 允许鼠标缩放
            map.addControl(new BMap.NavigationControl()); // 缩放平移控件
            map.addControl(new BMap.ScaleControl()); // 比例尺

            const geoc = new BMap.Geocoder();

            map.addEventListener('click', (e) => {
                // 通过点击百度地图，可以获取到对应的point,由point的lng、lat属性就可以获取对应的经度纬度
                this.point = e.point;
                geoc.getLocation(this.point, () => {
                    map.removeOverlay(marker);
                    marker = new BMap.Marker(this.point);
                    map.addOverlay(marker); // 定点坐标红点覆盖
                });
            });
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
