<template>
    <x-col
        title="地图选点"
        icon="el-icon-location"
    >
        <el-alert title="百度地图选点返回坐标" type="info" :closable="false" />
        <el-divider><i class="el-icon-location" /></el-divider>
        <el-button type="primary" @click="handleOpen">选择地点</el-button>

        <!-- 地图选点 -->
        <map-point :visible.sync="visible" v-model="myPoint" />

        <p :class="$style.location">
            <el-alert type="info" :closable="false">
                经度：{{ myPoint.lng || '-' }}
                <br>维度：{{ myPoint.lat || '-' }}
            </el-alert>
        </p>
    </x-col>
</template>

<script>
import XCol from '../col.vue';
import MapPoint from '@/components/map-point/index.vue';

export default {
    components: {
        XCol,
        MapPoint,
    },
    data() {
        return {
            myPoint: { lng: null, lat: null },
            visible: false,
        };
    },
    methods: {
        handleOpen() {
            this.visible = true;
        },
    },
};
</script>

<style lang="less" module>
.location {
    line-height: 1.4em;
}
</style>
