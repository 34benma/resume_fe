<script setup lang="ts">
import ColumnTitle from './common_components/ColumnTitle.vue'
import WorkInfo from './common_components/WorkInfo.vue'
import { reactive, ref } from 'vue'

import { CHANGE_LOCALE } from '@/utils/Constants'
import emitter from '@/utils/emitter'

const workInfoArrayZh = [{ "startYear": "2021.9", "endYear": "2024.10", "companyName": "新奥集团(好买气电子商务有限公司)", "title": "软件工程师", "desc": ['公司内部沟通工具Icome系统优化和开发', '生产中泰设备管理系统架构设计和开发', '常规工程系统架构优化，系统性能优化'] }, { "startYear": "2020.5", "endYear": "2021.08", "companyName": "长沙蜜獾信息科技有限公司", "title": "TeamLeader(架构师)", "desc": ['团队基础设施维护和搭建', '客户产品DAL思想提出和设计实现', '数据库数据加密包设计和实现', '数据库数据源管理包的设计和实现', '业务版本升级,数据库数据迁移工程的设计和实现'] }, { "startYear": "2017.11", "endYear": "2020.05", "companyName": "阿里巴巴集团", "title": "高级软件工程师", "desc": ['交易链路日常需求开发，对交易正向流程、逆向流程非常熟悉', '新奥创平台设计和开发，在支撑端到端一体化解决方案上发挥了重要作用', '淘宝详情日常开发，详情2.0视图层设计和开发'] }]


const workInfoArrayEn = [{ "startYear": "2021.9", "endYear": "2024.10", "companyName": "新奥集团(好买气电子商务有限公司)", "title": "软件工程师", "desc": ['公司内部沟通工具Icome系统优化和开发', '生产中泰设备管理系统架构设计和开发', '常规工程系统架构优化，系统性能优化'] }, { "startYear": "2020.5", "endYear": "2021.08", "companyName": "长沙蜜獾信息科技有限公司", "title": "TeamLeader(架构师)", "desc": ['团队基础设施维护和搭建', '客户产品DAL思想提出和设计实现', '数据库数据加密包设计和实现', '数据库数据源管理包的设计和实现', '业务版本升级,数据库数据迁移工程的设计和实现'] }, { "startYear": "2017.11", "endYear": "2020.05", "companyName": "阿里巴巴集团", "title": "高级软件工程师", "desc": ['交易链路日常需求开发，对交易正向流程、逆向流程非常熟悉', '新奥创平台设计和开发，在支撑端到端一体化解决方案上发挥了重要作用', '淘宝详情日常开发，详情2.0视图层设计和开发'] }]

const workInfoArray = reactive([{ "startYear": "2021.9", "endYear": "2024.10", "companyName": "新奥集团(好买气电子商务有限公司)", "title": "软件工程师", "desc": ['公司内部沟通工具Icome系统优化和开发', '生产中泰设备管理系统架构设计和开发', '常规工程系统架构优化，系统性能优化'] }, { "startYear": "2020.5", "endYear": "2021.08", "companyName": "长沙蜜獾信息科技有限公司", "title": "TeamLeader(架构师)", "desc": ['团队基础设施维护和搭建', '客户产品DAL思想提出和设计实现', '数据库数据加密包设计和实现', '数据库数据源管理包的设计和实现', '业务版本升级,数据库数据迁移工程的设计和实现'] }, { "startYear": "2017.11", "endYear": "2020.05", "companyName": "阿里巴巴集团", "title": "高级软件工程师", "desc": ['交易链路日常需求开发，对交易正向流程、逆向流程非常熟悉', '新奥创平台设计和开发，在支撑端到端一体化解决方案上发挥了重要作用', '淘宝详情日常开发，详情2.0视图层设计和开发'] }])

const columnTitleStr = "最近" + workInfoArray.length + "份工作经历"

const columnTitle = ref(columnTitleStr)

emitter.on(CHANGE_LOCALE, (value) => {
  if (value === 'en') {
    columnTitle.value = 'Recent Work Experience'
    Object.assign(workInfoArray, workInfoArrayEn)
  }

  if (value === 'zhHans') {
    columnTitle.value = columnTitleStr
    Object.assign(workInfoArray, workInfoArrayZh)
  }
})


</script>

<template>
  <ColumnTitle :title=columnTitle></ColumnTitle>
  <WorkInfo startYear="2021.9" endYear="2024.10" companyName="新奥集团(好买气电子商务有限公司)" title="软件工程师"
    :desc="['公司内部沟通工具Icome系统优化和开发', '生产中泰设备管理系统架构设计和开发', '常规工程系统架构优化，系统性能优化']">
  </WorkInfo>
  <WorkInfo startYear="2020.5" endYear="2021.08" companyName="长沙蜜獾信息科技有限公司" title="TeamLeader(架构师)"
    :desc="['团队基础设施维护和搭建', '客户产品DAL思想提出和设计实现', '数据库数据加密包设计和实现', '数据库数据源管理包的设计和实现', '业务版本升级,数据库数据迁移工程的设计和实现']">
  </WorkInfo>
  <WorkInfo startYear="2017.11" endYear="2020.05" companyName="阿里巴巴集团" title="高级软件工程师"
    :desc="['交易链路日常需求开发，对交易正向流程、逆向流程非常熟悉', '新奥创平台设计和开发，在支撑端到端一体化解决方案上发挥了重要作用', '淘宝详情日常开发，详情2.0视图层设计和开发']">
  </WorkInfo>
  <WorkInfo startYear="2016.10" endYear="2017.11" companyName="聚美优品" title="软件工程师"
    :desc="['聚美客服系统的开发和维护工作，主导系统代码优化和Redis缓存优化，设计和开发了客服知识库和系统报表功能', '购物流程核心系统之一的促销系统开发和维护，使用开源规则引擎编码促销规则']">
  </WorkInfo>
</template>

<style scoped></style>
