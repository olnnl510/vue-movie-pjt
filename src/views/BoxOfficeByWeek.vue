<template>
    <div>
    <h1>BoxOfficeByDay</h1>
    <div>
        <input type="date" v-model="selectedDate">
        <button @click="search">검색</button>
    </div>
        <rank-table :list="list"/>  <!-- v-vind 생략이 : -->
    </div>
</template>

<script>
import RankTable from '../components/boxoffice/RankTable.vue';

export default {
    components: {
        RankTable
    },
    data() {
        return {
            selectedDate: '2022-07-14',
            list: []
        }
    },
    methods: {
        search() {
            const targetDt = this.selectedDate.replaceAll('-', '');
            this.getData(targetDt);
        },
        async getData(targetDt) {
            const data = await this.getBoxOfficeByWeek(targetDt);
            this.list = data.boxOfficeResult.weeklyBoxOfficeList;
            console.log(data);

        },
    },
    created() {
        const d = new Date();
        d.setDate(d.getDate() -1);
        this.selectedDate = this.getOnlyDateStr(d);
    }
}
</script>

<style>

</style>