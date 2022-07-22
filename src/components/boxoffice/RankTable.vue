<template>
    <table>
        <thead>
            <tr>
                <th>순위</th>
                <th>제목</th>
                <th>개봉일</th>
                <th>누적관객수</th>
                <th>누적매출액</th>
            </tr>
        </thead>
        <tbody>
            <rank-row v-for="item in list" :key="item.moveCd" :item="item" />

            <!-- <tr v-for="item in list" :key="item.movieCd">
                <td>{{ item.rank }}</td>
                <td>{{ item.movieNm }}</td>
                <td>{{ item.openDt }}</td>
                <td>{{ item.audiAcc }}</td>
                <td>{{ item.salesAcc }}</td>
            </tr> -->
        </tbody>
    </table>
</template>

<script>
import RankRow from './RankRow';

export default {
    components: {
        RankRow // 얘를 쓰겠다. 얘가 자식이라는 뜻.
    },
    props: { // components :자식. 부모로부터 자료를 전달받는 통로(위에서부터 아래로만. 일방통행)
        list: Array,
    }
}
</script>

<style>

</style>