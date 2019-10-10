<template>
    <div>
        <el-form
            ref="form"
            inline
            :model="form.fields"
            :rules="form.rules"
            @submit.native.prevent
        >
            <el-form-item>
                <el-input
                    placeholder="请输入查询内容"
                    v-model="form.fields.q"
                    prefix-icon="el-icon-search"
                    autocomplete="on"
                    maxlength="20"
                    clearable
                    @clear="search"
                    @keyup.native.enter="search"
                />
            </el-form-item>
            <el-form-item>
                <el-select style="width: 120px;" v-model="form.fields.education" clearable @clear="search" placeholder="所有学历">
                    <el-option
                        v-for="item in edus"
                        :key="item"
                        :label="item"
                        :value="item"
                    />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
        <div>
            <el-button type="primary" icon="el-icon-plus" @click="handleCreate">新增</el-button>
            <el-button type="primary" icon="el-icon-refresh" @click="refresh">刷新</el-button>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import AbsSearch from '#index/components/abstract/search/default.vue';

const { mapState, mapMutations, mapActions } = createNamespacedHelpers('research/tableLazy');

export default {
    mixins: [AbsSearch],
    data() {
        return {
            edus: ['专科', '本科', '硕士研究生', '博士研究生', '其他'],
            form: {
                fields: {
                    q: '',
                    education: '',
                },
                rules: {},
            },
        };
    },
    computed: {
        ...mapState(['filters', 'overdue', 'infiniteState', 'lazy']),
    },
    methods: {
        ...mapMutations(['setState']),
        ...mapActions(['loadList']),

        // 新建
        handleCreate() {
            this.setState({ activeUid: 0, editVisible: true });
        },
    },
};
</script>
