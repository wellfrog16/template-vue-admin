<template>
    <div>
        <el-tooltip :effect="tooltip.effect" content="全屏" :placement="tooltip.placement" :class="$style.fullscreen">
            <i class="fas fa-lg fa-fw" @click="screenfull" :class="clsScreenFull"></i>
        </el-tooltip>

        <el-badge :value="200" :max="99" :class="$style.bell">
            <el-tooltip :effect="tooltip.effect" content="通知" :placement="tooltip.placement">
                <i class="fas fa-bell fa-lg fa-fw" @click="handleNotification"></i>
            </el-tooltip>
        </el-badge>

        <el-dropdown>
            <span class="el-dropdown-link" :class="$style['dropdown-link']">
                <i class="fas fa-user fa-lg fa-fw"></i>
                <span>用户名</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" :class="$style['dropdown-menu']">
                <el-dropdown-item><i class="fas fa-id-card fa-lg fa-fw"></i>个人中心</el-dropdown-item>
                <el-dropdown-item><i class="fas fa-cog fa-lg fa-fw"></i>设置</el-dropdown-item>
                <el-dropdown-item divided><i class="fas fa-sign-out-alt fa-lg fa-fw"></i>注销</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
import { screenfull } from '@/utils/cdn';

export default {
    data() {
        return {
            tooltip: {
                effect: 'dark',
                placement: 'bottom',
            },
            isFullscreen: false,
        };
    },
    mounted() {
        this.bindEvents();
    },
    methods: {
        bindEvents() {
            // 全屏变化改变状态
            if (screenfull.enabled) {
                screenfull.on('change', () => {
                    this.isFullscreen = screenfull.isFullscreen;
                });
            }
        },
        // 全屏
        screenfull() {
            if (screenfull.enabled) {
                screenfull.toggle();
            } else {
                this.$message.error('您的浏览器不支持全屏');
            }
        },
        // 通知
        handleNotification() {
            this.$message.info('通知事件');
        },
    },
    computed: {
        clsScreenFull() {
            return {
                'fa-expand-arrows-alt': !this.isFullscreen,
                'fa-compress-arrows-alt': this.isFullscreen,
            };
        },
    },
};
</script>

<style lang="less" module>
.fullscreen {
    cursor: pointer;
    margin-right: 30px;
}

.bell {
    cursor: pointer;
    margin-right: 40px;

    i {
        position: relative;
        top: -2px;
    }

    sup {
        top: 18px !important;
    }
}

.dropdown-link {
    cursor: default;
    user-select: none;
}

.dropdown-menu {
    i {
        margin-right: 8px;
        position: relative;
        top: 1px;
    }
}
</style>
