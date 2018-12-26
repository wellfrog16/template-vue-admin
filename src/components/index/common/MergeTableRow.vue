/* 合并table行 */
<template>
    <div class="merge-table-row">
        <el-table
            border
            ref="merge-table"
            highlight-current-row
            tooltip-effect="dark"
            style="width: 100%;"
            :span-method="spanMethod"
            :data="tableData">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column v-for="(item, index) in columns" :key="index" :label="item.label" :prop="item.field">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            spanArr: []
        }
    },
    props: {
        columns: {
            type: Array,
            default() {
                return []
            }
        },
        tableData: {
            type: Array,
            default() {
                return []
            }
        }
    },
    created() {
        this.getSpanArr(this.tableData)
    },
    methods: {
        getSpanArr(data) {　
            let pos = 0
            for (var i = 0; i < data.length; i++) {
                if (i === 0) {
                    this.spanArr.push(1);
                    pos = 0
                } else {
                    // 判断当前元素与上一个元素是否相同
                    if (data[i].date === data[i - 1].date) {
                        this.spanArr[pos] += 1;
                        this.spanArr.push(0);
                    } else {
                        this.spanArr.push(1);
                        pos = i;
                    }
                }
            }
        },
        spanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 1) {
                const _row = this.spanArr[rowIndex];
                const _col = _row > 0 ? 1 : 0;
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }
        }
    }
}
</script>
<style lang="less" scoped>

</style>

