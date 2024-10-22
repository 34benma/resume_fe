import * as resumeZh from '@/data/resume_louis_zh.json'
import * as resumeEn from '@/data/resume_louis_en.json'

export default function () {
  function getTitle(locale: string) {
    if (locale === 'en') {
      return resumeEn['title']
    }
    return resumeZh['title']
  }

  function getBaseInfo(locale: string) {
    if (locale === 'en') {
      return resumeEn['baseInfo']
    }
    return resumeZh['baseInfo']
  }

  return { getTitle, getBaseInfo }
}
