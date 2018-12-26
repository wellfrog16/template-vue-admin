/* 可折叠，嵌套table组件 */
<template>
  <el-table
    ref="multipleTable"
    highlight-current-row
    tooltip-effect="dark"
    style="width: 100%;"
    :data="tableData"
    @select="handleRowSelect"
    @selection-change="handleSelectionChange">
     <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-table 
            :ref="`subTableRef${props.row.accountId}`"
            style="width: 100%;"
            highlight-current-row
            tooltip-effect="dark"
            :show-header="false"
            :data="subTableDataMap[props.row.accountId]"
            @selection-change="handleSubTableSelectionChange">
             <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                v-for="(item, index) in columns" :key="index"
                :label="item.label"
                :prop="item.field">
            </el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column
        v-for="(item, index) in columns" :key="index"
        :label="item.label"
        :prop="item.field">
    </el-table-column>
  </el-table>
</template>
<script>
export default {
    data() {
        return {
            multipleSelection: [],
            currentRow: {}
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
        },
        subTableDataMap: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        handleRowSelect(selection, row) {
            this.currentRow = row
            let accountIds = selection.map(v => {
                return v.accountId
            })
            this.$refs['multipleTable'].toggleRowExpansion(row, true);
            if (accountIds.indexOf(row.accountId) === -1) {
                this.$refs[`subTableRef${row.accountId}`].clearSelection();
                this.multipleSelection = this.multipleSelection.filter(v => {
                    return v.accountId !== row.accountId
                })
            }
        },
        handleSelectionChange(selection, row) {
            setTimeout(() => {
                if (selection.length) {
                    selection.forEach((v) => {
                        this.toggleSelection(this.subTableDataMap[v.accountId])
                    })
                } else {
                    this.multipleSelection = []
                }
                console.log(this.multipleSelection)
            })
        },
        handleSubTableSelectionChange(selection) {
            console.log(selection)
            // let seledtionCodes = selection.map(v => {
            //     return v.accountId
            // })
            // this.multipleSelection = this.multipleSelection.filter(v => {
            //     return seledtionCodes.indexOf(v.accountId) !== -1
            // })
            // console.log(1, this.multipleSelection)
            // this.multipleSelection = [...this.multipleSelection, ...selection]
            // console.log(this.multipleSelection)
        },
        toggleSelection(rows) {
            let seledtionCodes = rows.map(v => {
                return v.customId
            })
            this.multipleSelection = this.multipleSelection.filter(v => {
                return seledtionCodes.indexOf(v.customId) === -1
            })
            this.multipleSelection = [...this.multipleSelection, ...rows]
            console.log(this.multipleSelection)
            if (rows) {
                rows.forEach((row) => {
                    this.$refs[`subTableRef${row.accountId}`].toggleRowSelection(row, true);
                });
            }
        }
    }
}
</script>
