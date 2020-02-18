<template>
    <el-card shadow="never">
        <div slot="header">
            <i class="fab fa-hire-a-helper fa-lg" /><span>穿梭框</span>
        </div>
        <el-row>
            <el-transfer v-model="value1" :data="data"></el-transfer>
        </el-row>
    </el-card>
</template>

<script>
export default {
    data() {
        const generateData = () => {
            const data = [];
            for (let i = 1; i <= 15; i += 1) {
                data.push({
                    key: i,
                    label: `备选项 ${i}`,
                    disabled: i % 4 === 0,
                });
            }
            return data;
        };
        return {
            data: generateData(),
            value1: [1, 4],
        };
    },
};
</script>
