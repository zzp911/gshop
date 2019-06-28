// 日期格式化过滤器
import Vue from 'vue'
// import moment from 'moment'
import format from 'date-fns/format'

// 自定义过滤器
Vue.filter('date-format', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return format(value, formatStr)
})
