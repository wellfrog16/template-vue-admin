<template>
   <el-table
        border
        ref="selfTable"
        :data="newData"
        :height="height"
        v-loading="dealWithIsLoading"
        element-loading-text="数据加载中，请耐心等待..."
        element-loading-background="rgba(0,0,0,0.3)"
        :row-class-name="rowClassName"
        :cell-class-name="cellClassName"
        :show-summary="showSummary"
        :summary-method="summaryMethod"
        :span-method="spanMethod"
        :highlight-current-row="highlightCurrentRow"
        @header-contextmenu="headerRightClick"
        @select="handleSelectedRow"
        @select-all="handleSelectedAllRow"
        @selection-change="handleSelectionChange"
        @row-click="handleRowClick"
        @row-contextmenu="handleRowContextMenu"
        @row-dblclick="handleRowDbClick"
        @sort-change="sortChange"
        @current-change="handleCurrentChange"
        style="width: 100%; overflow:visible;">
        <slot name="tableColumnsUnshift"></slot>
        <el-table-column
          v-if="showSelectionColumn"
          type="selection"
          align="center"
          width="55">
        </el-table-column>
        <el-table-column
          v-if="showIndexColumn"
          type="index"
          width="80"
          align="center"
          label="序号">
        </el-table-column>
        <div slot="empty">
            <span>
                <i class="fa fa-bar-chart fa-lg"></i>
            </span>
                暂无数据
        </div>
        <s-table-columns v-for="(item,index) in newColumns"
                        :key="index"
                        :item="item"
                        :otherProps="otherProps"
                        @handlerChange="handlerChange"/>
        <slot name="tableColumnsPush"></slot>
    </el-table>
</template>
<script>
import STableColumns from './STableColumns'
export default {
  name: 'self-table',
  props: {
    showSelectionColumn: {
      type: Boolean,
      default: false
    },
    showIndexColumn: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      required: true
    },
    tableData: {
        type: Array,
        default() {
            return []
        }
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default () {
        if (!this.autoHeight) {
          return 400
        }
      }
    },
    maxHeight: {
      type: [Number, String],
      default () {
        if (this.autoHeight) {
          return 400
        }
      }
    },
    rowClassName: [String, Function],
    cellClassName: [String, Function],
    summaryMethod: Function,
    spanMethod: Function,
    showSummary: {
      type: Boolean,
      default () {
        return false
      }
    },
    loading: {
      type: Boolean,
      default () {
        return false
      }
    },
    highlightCurrentRow: {
      type: Boolean,
      default () {
        return false
      }
    },
    uniqueKey: String,
    otherProps: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    STableColumns // 表格列
  },
  mixins: [],
  data () {
    return {
    }
  },
  computed: {
    newData () {
      return this.tableData
    },
    dealWithIsLoading: {
      get () {
        return this.isLoading
      },
      set (bool) {
        this.isLoading = bool
      }
    },
    newColumns () {
        let columnsArr = []
        for (let key of this.refreshColumns) {
          if (key.isActive === undefined || key.isActive) {
            key.isActive = true
            columnsArr.push(key)
          }
        }
        return columnsArr
    }
  },
  watch: {
    loading: {
      handler () {
        this.isLoading = this.loading
      },
      immediate: true
    },
    columns: {
        handler () {
          this.refreshColumns = this.columns
        },
        immediate: true,
        deep: true
    },
    newData: {
      handler () {
        if (this.isPageination && this.uniqueKey) {
          for (let key of this.allMultipleSelection) {
            let index = this.newData.findIndex(item => {
              return item[this.uniqueKey] === key[this.uniqueKey]
            })
            if (index != -1) {
              this.$nextTick(function () {
                this.$refs.selfTable.toggleRowSelection(this.newData[index])
              })
            }
          }
        }
      },
      immediate: true,
      deep: true
    }
  },
  created () {
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    getPageination (pageinationVal) {
      if (this.isPageination && this.uniqueKey) {
        for (let key of this.multipleSelection) {
          let index = this.allMultipleSelection.findIndex(item => {
            return item[this.uniqueKey] === key[this.uniqueKey]
          })
          if (index == -1) {
            this.allMultipleSelection.push(key)
          }
        }
      }
      this.$emit('getPageination', pageinationVal)
    },
    showOrHideLoading (flag) {
      this.dealWithIsLoading = flag
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      this.$emit('selection-change', val)
    },
    handleRowClick (row, event, column) {
      this.$emit('row-click', row, event, column)
    },
    headerRightClick (column, event) {
      this.$emit('headerRightClick', column, event)
    },
    handleRowContextMenu (row, event) {
      this.$emit('handleRowContextMenu', row, event)
    },
    handleRowDbClick (row, event) {
      this.$emit('handleRowDbClick', row, event)
    },
    handleSelectedRow (selection, row) {
      this.$emit('select', selection, row)
    },
    handleSelectedAllRow (selection) {
      this.$emit('select-all', selection)
    },
    handlerChange (val) {
      this.$emit('handlerChange', val)
    },
    handleCurrentChange (val1, val2) {
      this.$emit('current-change', val1, val2)
    },
    sortChange (column) {
      this.$emit('sortChange', column)
    },
    setCurrentRow (row) {
      this.$refs.selfTable.setCurrentRow(row)
    }
  }
}
</script>

