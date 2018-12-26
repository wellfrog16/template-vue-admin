<template>
    <el-table-column
            v-if="item.isTwoTable"
            :render-header="readerHeader"
            :align="item.align"
            :show-overflow-tooltip="item.showTooltip==null?true:item.showTooltip"
            :prop="item.field"
            :label="item.label"
            :min-width="item.minWidth?item.minWidth:80"
            :width="item.width?item.width:80"
            :formatter="item.formatter"
            :header-align="item.align == null ? 'left' : item.align"
            :sortable="item.sortable == null ? false : item.sortable"
            :sort-method="item.sortMethod"
            :selectable="item.selectable"
    >
        <el-table-column
                v-for="child in item.children"
                :key="child.field"
                :render-header="readerHeader"
                :align="child.align"
                :show-overflow-tooltip="item.showTooltip==null?true:item.showTooltip"
                :prop="child.field"
                :label="child.label"
                :min-width="child.width?child.width:80"
                :formatter="child.formatter"
                :header-align="child.align == null ? 'left' : child.align"
                :sortable="child.sortable == null ? false : child.sortable"
                :sort-method="child.sortMethod"
                :selectable="child.selectable"
        ></el-table-column>
    </el-table-column>
    <el-table-column
            v-else-if="item.template"
            :render-header="readerHeader"
            :align="item.align"
            :show-overflow-tooltip="item.showTooltip==null?true:item.showTooltip"
            :prop="item.field"
            :label="item.label"
            :min-width="item.width?item.width:80"
            :header-align="item.align == null ? 'left' : item.align"
            :sortable="item.sortable == null ? false : item.sortable"
            :sort-method="item.sortMethod"
            :selectable="item.selectable"
    >
        <template slot-scope="scope">
            <component :is="item.template" :scope="scope" :item="item" :otherProps="otherProps"
                       @handlerChange="handlerChange"></component>
        </template>
    </el-table-column>
    <el-table-column
            v-else
            :render-header="readerHeader"
            :align="item.align"
            :show-overflow-tooltip="item.showTooltip==null?true:item.showTooltip"
            :prop="item.field"
            :label="item.label"
            :min-width="item.width?item.width:80"
            :formatter="item.formatter"
            :header-align="item.align == null ? 'left' : item.align"
            :sortable="item.sortable == null ? false : item.sortable"
            :sort-method="item.sortMethod"
            :selectable="item.selectable"
    ></el-table-column>
</template>

<script>
  export default {
    name: 's-table-columns',
    props: {
      item: {
        type: Object,
        default: function () {
          return {}
        }
      },
      otherProps: { // 其他想传入的参数，比如disabled
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    components: {},
    mixins: [],
    data () {
      return {}
    },
    computed: {},
    watch: {},
    methods: {
      readerHeader (h, {column}) {
        if (this.item.tooltip) {
          let arr = this.item.tooltip.split('\n')
          return h(
          'el-tooltip',
          {
            attrs: {
              placement: 'bottom'
            },
            class: {
              tooltip: true
            }
          },
          [
            h('div', [column.label]),
            h('div', {
              slot: 'content'
            }, Array.apply(null, {length: arr.length}).map(function (val, index) {
              return h('p', {
                style: {
                  margin: 0,
                  padding: 0
                }
              }, arr[index])
            }))
          ]
          )
        }
        return column.label
      },
      handlerChange (val) {
        this.$emit('handlerChange', val)
      }
    },
    created () {
    },
    mounted () {
    },
    beforeDestroy () {
    }
  }
</script>

<style lang="less">

</style>
