<template>
  <demo-section>
    <demo-block card :title="dateType">
      <van-datetime-picker v-model="value.date" type="date" :title="dateType" :min-date="minDate" :max-date="maxDate" />
    </demo-block>

    <demo-block card :title="yearMonthType">
      <van-datetime-picker
        v-model="value.yearMonth"
        type="year-month"
        :title="yearMonthType"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </demo-block>

    <demo-block card :title="monthDayType">
      <van-datetime-picker
        v-model="value.monthDayType"
        type="month-day"
        :title="monthDayType"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </demo-block>

    <demo-block card :title="timeType">
      <van-datetime-picker v-model="value.time" type="time" :title="timeType" :min-hour="10" :max-hour="20" />
    </demo-block>

    <demo-block card :title="datetimeType">
      <van-datetime-picker
        v-model="value.datetime"
        type="datetime"
        :title="datetimeType"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </demo-block>

    <demo-block card :title="datehourType">
      <van-datetime-picker
        v-model="value.datehour"
        type="datehour"
        :title="datehourType"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </demo-block>

    <demo-block card :title="optionFilter">
      <van-datetime-picker v-model="value.optionFilter" type="time" :title="optionFilter" :filter="filter" />
    </demo-block>

    <demo-block card :title="sortColumns">
      <van-datetime-picker
        v-model="value.sortColumnsDate"
        type="date"
        :title="sortColumns"
        :columns-order="['month', 'day', 'year']"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      day: "日",
      year: "年",
      month: "月",
      timeType: "选择时间",
      dateType: "选择年月日",
      datetimeType: "选择完整时间",
      datehourType: "选择年月日小时",
      monthDayType: "选择月日",
      yearMonthType: "选择年月",
      optionFilter: "选项过滤器",
      sortColumns: "自定义列排序",
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      value: {
        date: null,
        time: "12:00",
        datetime: new Date(2020, 0, 1),
        datehour: new Date(2020, 0, 1),
        monthDay: new Date(2020, 0, 1),
        yearMonth: new Date(2020, 0, 1),
        optionFilter: "12:00",
        sortColumnsDate: new Date(2020, 0, 1)
      }
    };
  },

  methods: {
    formatter(type, value) {
      if (type === "year") {
        return value + this.year;
      }
      if (type === "month") {
        return value + this.month;
      }
      if (type === "day") {
        return value + this.day;
      }
      return value;
    },

    filter(type, values) {
      if (type === "minute") {
        return values.filter(value => value % 5 === 0);
      }

      return values;
    }
  }
};
</script>
