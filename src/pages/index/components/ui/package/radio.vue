<template>
    <el-card shadow="never">
        <div slot="header" class="clearfix">
            <i class="fab fa-hire-a-helper fa-lg" />&nbsp;<span>单选框</span>
        </div>
        <el-row>
            <el-radio v-model="radio1" label="1">备选项1</el-radio>
            <el-radio v-model="radio1" label="2">备选项2</el-radio>
            <el-radio disabled v-model="radio1" label="3">禁用备选项3</el-radio>
            <el-radio disabled v-model="radio1" label="4">禁用备选项4</el-radio>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio2">
                <el-radio :label="3">组选项3</el-radio>
                <el-radio :label="6">组选项6</el-radio>
                <el-radio :label="9">组选项9</el-radio>
            </el-radio-group>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio3">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio3" size="medium">
                <el-radio-button label="上海" ></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio3">
                <el-radio-button label="上海" ></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio3" disabled size="mini">
                <el-radio-button label="上海" ></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </el-row>
        <el-row>
            <el-radio v-model="radio4" label="1" border>备选项1</el-radio>
            <el-radio v-model="radio4" label="2" border>备选项2</el-radio>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio4">
                <el-radio label="1" border>备选项1</el-radio>
                <el-radio label="2" border disabled>备选项2</el-radio>
            </el-radio-group>
        </el-row>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            radio1: '1',
            radio2: 6,
            radio3: '上海',
            radio4: '1',
        };
    },
};
</script>
