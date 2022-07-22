<template>
    <tr>
        <td>{{ item.rank }}</td>
        <td>{{ item.movieNm }}</td>
        <td>{{ item.openDt }}</td>
        <!-- <td>{{ item.audiAcc }}</td> -->
        <td>{{ getAudiAcc }}</td>
        <!-- <td>{{ item.salesAcc }}</td> -->
        <td>{{ getSalesAcc }}</td>
    </tr>
</template>

<script>
export default {
    props: { // components :자식. 부모로부터 자료를 전달받는 통로(위에서부터 아래로만. 일방통행)
        item: Object
    },
    computed: {
        getAudiAcc() {
            return this.numberComma(this.item.audiAcc);
        },
        getSalesAcc() {
            return this.numberComma(this.item.salesAcc);
        }
    },
    methods: {
        numberComma(num) {
            return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}

</script>

<style>

</style>