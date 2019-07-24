<template>
    <el-card :class="$style.card" shadow="never">
        <div slot="header" class="clearfix">
            <el-input placeholder="请输入查询关键字" v-model="key">

                <el-radio-group v-model="category" size="mini" slot="prepend">
                    <el-radio-button label="">All</el-radio-button>
                    <el-radio-button label="solid">Solid</el-radio-button>
                    <el-radio-button label="regular">Regular</el-radio-button>
                    <el-radio-button label="brands">Brands</el-radio-button>
                </el-radio-group>

                <el-button slot="append">{{ fliterItems.length }}</el-button>
            </el-input>
        </div>
        <el-row :class="$style.list">
            <el-col
                v-for="item in list"
                :key="item.category + '/' + item.name"
                :xs="8"
                :sm="6"
                :md="4"
                :lg="3"
                :xl="2"
            >
                <div :class="$style.item">
                    <i :class="[item.prepend, `fa-${item.name}`, 'fa-3x']" />
                    <span v-text="item.name"></span>
                </div>
            </el-col>
            <infinite-loading @infinite="infiniteHandler"></infinite-loading>
        </el-row>
    </el-card>
</template>

<script>
import { items } from './items';
import { ClipboardJS } from '@/utils/cdn';

export default {
    data() {
        return {
            items,
            category: '',
            key: '',
            pagenum: 1,
            pagesize: 100,
            list: [],
            infiniteState: null,
            clipboard: null,
        };
    },
    computed: {
        fliterItems() {
            return this.category === ''
                ? items.filter(item => this.key === '' || (this.key !== '' && item.name.includes(this.key)))
                : items.filter(item => (item.category === this.category) && (this.key === '' || (this.key !== '' && item.name.includes(this.key))));
        },
    },
    mounted() {
        this.clipboard = new ClipboardJS(`.${this.$style.list}>div>div`, {
            text(trigger) {
                return `${trigger.querySelector('i').className.replace('fa-3x', 'fa-lg')}`;
            },
        });

        this.clipboard.on('success', (e) => {
            this.$message.success('复制成功');
            e.clearSelection();
        });
    },
    destroyed() {
        this.clipboard.destroy();
    },
    methods: {
        sliceItems() {
            const start = (this.pagenum - 1) * this.pagesize;
            const end = this.pagenum * this.pagesize - 1;
            return this.fliterItems.slice(start, end);
        },
        infiniteHandler($state) {
            this.infiniteState = $state;
            const data = this.sliceItems();

            if (data.length) {
                this.list = this.list.concat(data);
                this.pagenum += 1;
                $state.loaded();
            } else {
                $state.complete();
            }
        },
        reset() {
            this.list = [];
            this.pagenum = 1;
            this.infiniteState.reset(); // 重置滚动加载
        },
    },
    watch: {
        category() {
            this.reset();
        },
        key() {
            this.reset();
        },
    },
};
</script>

<style lang="less" module>
.card {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;

    :global(.el-card__header) {
        flex: 0 0 70px;
    }

    :global(.el-card__body) {
        flex-grow: 1;
        overflow: auto;
    }
}

.list {
    :global(.el-col) {
        text-align: center;
        height: 130px;

        div {
            display: flex;
            flex-direction: column;
            padding: 10px;
            cursor: pointer;

            &:hover {
                box-shadow: 0 0 3px #ccc;
                background-color: #f5f5f5;
            }
        }

        i {
            height: 60px;
        }
    }
}
</style>
