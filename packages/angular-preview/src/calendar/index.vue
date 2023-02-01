<template>
  <glue-doc-section :class="demoName">
    <glue-doc-block card :gtitle="basicUsage">
      <glue-cell
        is-link
        :title="selectSingle"
        :value="formatFullDate(date.selectSingle)"
        @click="show('single', 'selectSingle')"
      />

      <glue-cell
        is-link
        :title="selectMultiple"
        :value="formatMultiple(date.selectMultiple)"
        @click="show('multiple', 'selectMultiple')"
      />

      <glue-cell
        is-link
        :title="selectRange"
        :value="formatRange(date.selectRange)"
        @click="show('range', 'selectRange')"
      />
    </glue-doc-block>

    <glue-doc-block card :gtitle="quickSelect">
      <glue-cell
        is-link
        :title="selectSingle"
        :value="formatFullDate(date.quickSelect1)"
        @click="show('single', 'quickSelect1')"
      />

      <glue-cell
        is-link
        :title="selectRange"
        :value="formatRange(date.quickSelect2)"
        @click="show('range', 'quickSelect2')"
      />
    </glue-doc-block>

    <glue-doc-block card :gtitle="customCalendar">
      <glue-cell
        is-link
        :title="customColor"
        :value="formatRange(date.customColor)"
        @click="show('range', 'customColor')"
      />

      <glue-cell
        is-link
        :title="customRange"
        :value="formatFullDate(date.customRange)"
        @click="show('single', 'customRange')"
      />

      <glue-cell
        is-link
        :title="customConfirm"
        :value="formatRange(date.customConfirm)"
        @click="show('range', 'customConfirm')"
      />

      <glue-cell
        is-link
        :title="customDayText"
        :value="formatRange(date.customDayText)"
        @click="show('range', 'customDayText')"
      />

      <glue-cell
        is-link
        :title="customPosition"
        :value="formatFullDate(date.customPosition)"
        @click="show('single', 'customPosition')"
      />

      <glue-cell
        is-link
        :title="maxRangeaTitle"
        :value="formatRange(date.maxRange)"
        @click="show('range', 'maxRange')"
      />

      <glue-cell
        is-link
        :title="firstDayOfWeekTitle"
        @click="show('single', 'firstDayOfWeek')"
      />
    </glue-doc-block>

    <glue-doc-block card :gtitle="tiledDisplay">
      <glue-calendar
        :show="true"
        show-title
        show-subtitle
        :show-confirm="true"
        show-mark
        round
        title="选择单个日期"
        type="multiple"
        color="#1989fa"
        max-range="3"
        first-day-of-week="1"
      />
    </glue-doc-block>

    <glue-calendar
      :poppable="true"
      :show-title="true"
      :show-subtitle="true"
      title="选择日期"
      :show="showCalendar"
      :type="type"
      :color="color"
      :round="round"
      :position="position"
      :formatter="formatter"
      :show-confirm="true"
      :confirm-text="confirmText"
      :confirm-disabled-text="confirmDisabledText"
      :first-day-of-week="firstDayOfWeek"
      @confirm="onConfirm"
      @glueClose="this.glueClose"
    />
  </glue-doc-section>
</template>

<script>
import { getDemoName } from "@glue/glue-cli";
export default {
  data() {
    return {
      basicUsage: "基础用法",
      in: "入店",
      out: "离店",
      today: "今天",
      laborDay: "劳动节",
      youthDay: "青年节",
      calendar: "日历",
      maxRangeaTitle: "日期区间最大范围",
      selectCount: (count) => `选择了 ${count} 个日期`,
      selectSingle: "选择单个日期",
      selectMultiple: "选择多个日期",
      selectRange: "选择日期区间",
      quickSelect: "快捷选择",
      confirmText: "完成",
      customColor: "自定义颜色",
      customRange: "自定义日期范围",
      customConfirm: "自定义按钮文字",
      customDayText: "自定义日期文案",
      customPosition: "自定义弹出位置",
      customCalendar: "自定义日历",
      confirmDisabledText: "请选择结束时间",
      firstDayOfWeekTitle: "自定义周起始日",
      tiledDisplay: "平铺展示",
      date: {
        maxRange: [],
        selectSingle: null,
        selectRange: [],
        selectMultiple: [],
        quickSelect1: null,
        quickSelect2: [],
        customColor: [],
        customConfirm: [],
        customRange: null,
        customDayText: [],
        customPosition: null,
      },
      type: "single",
      round: true,
      color: undefined,
      minDate: undefined,
      maxDate: undefined,
      maxRange: undefined,
      position: undefined,
      formatter: undefined,
      showConfirm: true,
      showCalendar: false,
      tiledMinDate: new Date(2012, 0, 10),
      tiledMaxDate: new Date(2012, 2, 20),
      firstDayOfWeek: 0,
    };
  },

  computed: {
    demoName() {
      return getDemoName(this.$route);
    },
  },
  methods: {
    glueClose() {
      this.showCalendar = false;
    },
    resetSettings() {
      this.round = true;
      this.color = undefined;
      this.minDate = undefined;
      this.maxDate = undefined;
      this.maxRange = undefined;
      this.position = undefined;
      this.formatter = undefined;
      this.showConfirm = true;
      this.confirmText = undefined;
      this.confirmDisabledText = undefined;
      this.firstDayOfWeek = 0;
    },

    show(type, id) {
      this.resetSettings();
      this.id = id;
      this.type = type;
      this.showCalendar = true;
      console.log(this.type, "this.type");
      switch (id) {
        case "quickSelect1":
        case "quickSelect2":
          this.showConfirm = false;
          break;
        case "customColor":
          this.color = "#1989fa";
          break;
        case "customConfirm":
          this.confirmText = this.confirmText;
          this.confirmDisabledText = this.confirmDisabledText;
          break;
        case "customRange":
          this.minDate = new Date(2010, 0, 1);
          this.maxDate = new Date(2010, 0, 31);
          break;
        case "customDayText":
          this.minDate = new Date(2010, 4, 1);
          this.maxDate = new Date(2010, 4, 31);
          this.formatter = this.dayFormatter;
          break;
        case "customPosition":
          this.round = false;
          this.position = "right";
          break;
        case "maxRange":
          this.maxRange = 3;
          break;
        case "firstDayOfWeek":
          this.firstDayOfWeek = 1;
          break;
      }
    },

    dayFormatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();

      if (month === 5) {
        if (date === 1) {
          day.topInfo = this.laborDay;
        } else if (date === 4) {
          day.topInfo = this.youthDay;
        } else if (date === 11) {
          day.text = this.today;
        }
      }

      if (day.type === "start") {
        day.bottomInfo = this.in;
      } else if (day.type === "end") {
        day.bottomInfo = this.out;
      }

      return day;
    },

    formatDate(date) {
      if (date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      }
    },

    formatFullDate(date) {
      if (date) {
        return `${date.getFullYear()}/${this.formatDate(date)}`;
      }
    },

    formatMultiple(dates) {
      if (dates.length) {
        return this.selectCount;
      }
    },

    formatRange(dateRange) {
      if (dateRange.length) {
        const [start, end] = dateRange;
        return `${this.formatDate(start)} - ${this.formatDate(end)}`;
      }
    },

    onConfirm(date) {
      this.showCalendar = false;
      this.date[this.id] = date;
    },
  },
};
</script>
