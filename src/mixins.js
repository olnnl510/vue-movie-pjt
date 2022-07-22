import axios from 'axios';

export default {
    data() {
        return {
            key: '596dabd335c712ae65990509d2580e42',
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
            boxOfficeByWeek: 'boxoffice/searchWeeklyBoxOfficeList.json',
        }
    },
    methods: {
        async $api(url, parameter) {
            return (await axios.get(url, {
                params: parameter
            })
            .catch(e => {
                console.log(e);
            })).data;
        },

        async getBoxOfficeByDay(targetDt) {
            const parameter = {
                key: this.key,
                // 'targetDt': targetDt, // key값과 변수명 같다면
                targetDt // 이렇게 적을 수 있음
            }
            const url = this.baseUrl + this.boxOfficeByDay;
            return await this.$api(url, parameter);
        },

        async getBoxOfficeByWeek(targetDt, weekGb) {
            const parameter = {
                key: this.key,
                targetDt,
                weekGb: 0
            }
            const url = this.baseUrl + this.boxOfficeByWeek;
            return await this.$api(url, parameter);
        },

        getOnlyDateStr(date) {
            return date.toISOString().split('T')[0];
        }
    }
}