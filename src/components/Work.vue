<script setup lang="ts">
import ColumnTitle from './common_components/ColumnTitle.vue'
import WorkInfo from './common_components/WorkInfo.vue'
import { reactive, ref } from 'vue'

import { CHANGE_LOCALE } from '@/utils/Constants'
import emitter from '@/utils/emitter'

const workInfoArrayZh = [{ "startYear": "2021.9", "endYear": "2024.10", "companyName": "新奥集团(好买气电子商务有限公司)", "title": "软件工程师", "desc": ['2022.7-2024.10，在调度工作台团队，负责调度日常需求开发与维护，多次解决线上疑难杂症，快速高质量实现了调度系统众多疑难需求，比如PDF，Excel导入导出设计和优化，系统生产发布提速问题，微服务领域边界收敛等；', '2021.9-2022.7，先后参与设计并开发过内部的沟通软件icome系统，设备管理系统和工程管理系统，多次主导从0开始设计和开发实现；'] }, { "startYear": "2020.5", "endYear": "2021.08", "companyName": "长沙蜜獾信息科技有限公司", "title": "TeamLeader(架构师)", "desc": ['2021.5-2021.8，负责团队全部基础设施(AWS)的搭建和维护，解决项目基础设施架构问题；', '2020.11-2021.5，DAL思想的提出者和设计实现者，解决了团队微服务数据层代码紊乱的问题，同时，设计并实现了数据加密包和数据库数据源管理包；', '2020.5-2020.11，带领数据团队，配合项目业务升级，对数据进行了清洗和迁移，管理数据团队日常开发需求；'] }, { "startYear": "2017.11", "endYear": "2020.05", "companyName": "阿里巴巴集团", "title": "高级软件工程师", "desc": ['2019.11-2020.5，在淘宝&天猫详情团队，参与淘宝&天猫商品详情融合项目，运用DDD，独立设计并实现视图域，在新奥创的引导落地过程中，承担主要作用;', '2018.5-2019.11，在淘宝新奥创团队，从0开始，参与新奥创的设计和开发，和项目团队一起，完成了新奥创在交易场景的落地，完成了100%的放量目标，0故障；', '2017.11-2018.5，在淘宝交易团队，先后负责淘宝正向，逆向，购后系统的日常业务需求开发，熟悉了交易链路，在DDD，微服务，DevOps积累了丰富的经验'] }]


const workInfoArrayEn = [{ "startYear": "2021.9", "endYear": "2024.10", "companyName": "新奥集团(好买气电子商务有限公司)", "title": "软件工程师", "desc": ['2022.7-2024.10，在调度工作台团队，负责调度日常需求开发与维护，多次解决线上疑难杂症，快速高质量实现了调度系统众多疑难需求，比如PDF，Excel导入导出设计和优化，系统生产发布提速问题，微服务领域边界收敛等；', '2021.9-2022.7，先后参与设计并开发过内部的沟通软件icome系统，设备管理系统和工程管理系统，多次主导从0开始设计和开发实现；'] }, { "startYear": "2020.5", "endYear": "2021.08", "companyName": "长沙蜜獾信息科技有限公司", "title": "TeamLeader(架构师)", "desc": ['2021.5-2021.8，负责团队全部基础设施(AWS)的搭建和维护，解决项目基础设施架构问题；', '2020.11-2021.5，DAL思想的提出者和设计实现者，解决了团队微服务数据层代码紊乱的问题，同时，设计并实现了数据加密包和数据库数据源管理包；', '2020.5-2020.11，带领数据团队，配合项目业务升级，对数据进行了清洗和迁移，管理数据团队日常开发需求；'] }, { "startYear": "2017.11", "endYear": "2020.05", "companyName": "阿里巴巴集团", "title": "高级软件工程师", "desc": ['2019.11-2020.5，在淘宝&天猫详情团队，参与淘宝&天猫商品详情融合项目，运用DDD，独立设计并实现视图域，在新奥创的引导落地过程中，承担主要作用;', '2018.5-2019.11，在淘宝新奥创团队，从0开始，参与新奥创的设计和开发，和项目团队一起，完成了新奥创在交易场景的落地，完成了100%的放量目标，0故障；', '2017.11-2018.5，在淘宝交易团队，先后负责淘宝正向，逆向，购后系统的日常业务需求开发，熟悉了交易链路，在DDD，微服务，DevOps积累了丰富的经验'] }]

const workInfoArray = reactive([{ "startYear": "2021.9", "endYear": "2024.10", "companyName": "新奥集团(好买气电子商务有限公司)", "title": "软件工程师", "desc": ['2022.7-2024.10，在调度工作台团队，负责调度日常需求开发与维护，多次解决线上疑难杂症，快速高质量实现了调度系统众多疑难需求，比如PDF，Excel导入导出设计和优化，系统生产发布提速问题，微服务领域边界收敛等；', '2021.9-2022.7，先后参与设计并开发过内部的沟通软件icome系统，设备管理系统和工程管理系统，多次主导从0开始设计和开发实现；'] }, { "startYear": "2020.5", "endYear": "2021.08", "companyName": "长沙蜜獾信息科技有限公司", "title": "TeamLeader(架构师)", "desc": ['2021.5-2021.8，负责团队全部基础设施(AWS)的搭建和维护，解决项目基础设施架构问题；', '2020.11-2021.5，DAL思想的提出者和设计实现者，解决了团队微服务数据层代码紊乱的问题，同时，设计并实现了数据加密包和数据库数据源管理包；', '2020.5-2020.11，带领数据团队，配合项目业务升级，对数据进行了清洗和迁移，管理数据团队日常开发需求；'] }, { "startYear": "2017.11", "endYear": "2020.05", "companyName": "阿里巴巴集团", "title": "高级软件工程师", "desc": ['2019.11-2020.5，在淘宝&天猫详情团队，参与淘宝&天猫商品详情融合项目，运用DDD，独立设计并实现视图域，在新奥创的引导落地过程中，承担主要作用;', '2018.5-2019.11，在淘宝新奥创团队，从0开始，参与新奥创的设计和开发，和项目团队一起，完成了新奥创在交易场景的落地，完成了100%的放量目标，0故障；', '2017.11-2018.5，在淘宝交易团队，先后负责淘宝正向，逆向，购后系统的日常业务需求开发，熟悉了交易链路，在DDD，微服务，DevOps积累了丰富的经验'] }])

const columnTitleStr = "工作经历"

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
  <v-sheet v-for="(item, index) in workInfoArray" :key="index">
    <WorkInfo :startYear="item.startYear" :endYear="item.startYear" :companyName="item.companyName" :title="item.title"
      :desc="item.desc">
    </WorkInfo>
  </v-sheet>
</template>

<style scoped></style>
