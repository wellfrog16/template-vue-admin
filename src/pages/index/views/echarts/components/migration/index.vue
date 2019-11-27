<template>
    <div :class="$style.main" v-resize:delay="100" v-resize="handleResize">
        <div :class="$style.container"></div>
    </div>
</template>

<script>
import { echarts } from '@/utils/cdn';
import api from '@/api/mock/echarts';

export default {
    data() {
        return {
            myChart: null,
        };
    },
    mounted() {
        this.myChart = echarts.init(document.querySelector(`.${this.$style.container}`), 'macarons');

        // const uploadedDataURL = 'https://echarts.baidu.com/examples/data-gl/asset/data/flights.json';

        // app.title = '65k+ 飞机航线';

        this.myChart.showLoading();

        api.flights().then((data) => {
            this.myChart.hideLoading();

            function getAirportCoord(idx) {
                return [data.airports[idx][3], data.airports[idx][4]];
            }
            const routes = data.routes.map((airline) => [
                getAirportCoord(airline[1]),
                getAirportCoord(airline[2]),
            ]);

            this.myChart.setOption({
                geo3D: {
                    map: 'world',
                    shading: 'realistic',
                    silent: true,
                    environment: '#333',
                    realisticMaterial: {
                        roughness: 0.8,
                        metalness: 0,
                    },
                    postEffect: {
                        enable: true,
                    },
                    groundPlane: {
                        show: false,
                    },
                    light: {
                        main: {
                            intensity: 1,
                            alpha: 30,
                        },
                        ambient: {
                            intensity: 0,
                        },
                    },
                    viewControl: {
                        distance: 70,
                        alpha: 89,
                        panMouseButton: 'left',
                        rotateMouseButton: 'right',
                    },
                    itemStyle: {
                        areaColor: '#000',
                    },
                    regionHeight: 0.5,
                },
                series: [{
                    type: 'lines3D',
                    coordinateSystem: 'geo3D',
                    effect: {
                        show: true,
                        trailWidth: 1,
                        trailOpacity: 0.5,
                        trailLength: 0.2,
                        constantSpeed: 5,
                    },
                    blendMode: 'lighter',
                    lineStyle: {
                        width: 0.2,
                        opacity: 0.05,
                    },
                    data: routes,
                }],
            });

            window.addEventListener('keydown', () => {
                this.myChart.dispatchAction({
                    type: 'lines3DToggleEffect',
                    seriesIndex: 0,
                });
            });
        });
    },
    methods: {
        handleResize() {
            this.myChart.resize();
        },
    },
};
</script>

<style lang="less" module>
.main {
    height: 100%;
}

.container {
    height: 100%;
}
</style>
