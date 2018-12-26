/* 树形table */
<template>
    <div class="tree-table-component">
        <div class="table-header-container">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkedAll" @change="handleCheckAll"></el-checkbox>
            <span class="table-header">
                <div v-for="(item, index) in columns" :key="index">
                    {{item.label}}
                </div>
            </span>
        </div>
        <el-tree
            ref="tree-table"
            class="tree-table"
            :data="data"
            show-checkbox
            node-key="id"
            @check-change="handleTreeCheckedChange"
            :expand-on-click-node="false">
            <span class="custom-tree-node" slot-scope="{ node, data }">
                <div v-for="(item, index) in columns" :key="index">
                    {{data[item.field] || ''}}
                </div>
            </span>
        </el-tree>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isIndeterminate: false,
            checkedAll: false,
            columns: [{
                field: 'accountId',
                label: '账户号'
            }, 
            {
                field: 'customId',
                label: '客户号'
            }, {
                field: 'customName',
                label: '客户名称'
            }],
            data: [{
                id: 1,
                accountId: '1111',
                children: [{
                    id: 4,
                    accountId: '1111',
                    customId: '11111',
                    customName: '张三11'
                }]
            }, {
                id: 2,
                accountId: '2222',
                children: [{
                    id: 5,
                    accountId: '2222',
                    customId: '22221',
                    customName: '张三21'
                }, {
                    id: 6,
                    accountId: '2222',
                    customId: '22222',
                    customName: '张三22'
                }]
            }, {
                id: 3,
                accountId: '3333',
                children: [{
                    id: 7,
                    accountId: '3333',
                    customId: '33331',
                    customName: '张三31'
                }, {
                    id: 8,
                    accountId: '3333',
                    customId: '33332',
                    customName: '张三32'
                }]
            }]
        }
    },
    props: {
        // columns: {
        //     type: Array,
        //     default() {
        //         return []
        //     }
        // },
        tableData: {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed: {
        allArray() {
            let allArray = []
            this.data.forEach(v => {
                if (v.children) {
                    allArray = allArray.concat(v.children)
                }  
            })
            return allArray
        }
    },
    methods: {
        handleCheckAll(val) {
            if (val) {
                this.$refs['tree-table'].setCheckedNodes(this.allArray)
            } else {
                this.$refs['tree-table'].setCheckedNodes([])
            }
            this.isIndeterminate = false
        },
        handleTreeCheckedChange(value) {
            let checkedCount = this.$refs['tree-table'].getCheckedNodes(true).length
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.allArray.length
        }
    }
}
</script>
<style lang="less" scoped>
    .tree-table-component {
        .tree-table {
            color: #606266;

            .custom-tree-node {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 14px;
                padding-right: 8px;

                > div {
                    flex: 1;
                    padding: 0 10px;
                    color: #606266;
                }
            }

            /deep/ .el-tree-node__content {
                padding: 10px;
                border-radius: 3px;
                border-bottom: 1px solid #ebebeb;
            }
        }

        .table-header-container {
            line-height: 55px;
            background: #fff !important;
            border-top: 1px solid #e6e4e4;
            border-bottom: 1px solid #e6e4e4;
            padding-left: 12px;

            .el-checkbox {
                display: inline-block;
                position: relative;
                float: left;
                margin-right: 20px;
            }

            .table-header {
                display: flex;
                flex: 1;
                align-items: center;
                justify-content: space-between;
                font-size: 14px;

                > div {
                    flex: 1;
                    padding: 0 10px;
                    color: #606266;
                }
            }
        }
    }
</style>

