// S=页面
let pageRoot = '/afe';

if (process.env.NODE_ENV === 'development') {
    pageRoot = '';
}

export const PAGE_HOME = `${pageRoot}/index`; // 首页
export const PAGE_DEMAND = `${pageRoot}/index#/demand`; // 接单大厅
export const PAGE_INDEX_MY = `${pageRoot}/index#/my`; // 我的
export const PAGE_DEMAND_DETAIL = `${pageRoot}/demandDetail`; // 需求详情
export const PAGE_DEMAND_RECORD = `${pageRoot}/myDemandRecord`; // 抢单记录
export const PAGE_DEMAND_IMPROPER = `${pageRoot}/myDemandImproper`; // 不合适单
export const PAGE_AUNT_CREATE = `${pageRoot}/auntCreate`; // 创建简历
export const PAGE_AUNT_EDIT = `${pageRoot}/auntEdit`; // 编辑简历
export const PAGE_WORK_EXPERIENCE = `${pageRoot}/auntWorkExperience`; // 工作经历
export const PAGE_FAMILY_INFO = `${pageRoot}/auntFamilyInfo`; // 家庭情况
export const PAGE_SELF_INTRODUCTION = `${pageRoot}/auntSelfIntroduction`; // 个人介绍
export const PAGE_CERT_PHOTO = `${pageRoot}/auntCertPhotoEdit`; // 证件照
export const PAGE_WORK_PHOTO = `${pageRoot}/auntWorkPhotoEdit`; // 工作照
export const PAGE_AUNT_PREVIEW = `${pageRoot}/auntPreview`; // 预览简历
export const PAGE_QRCODE = `${pageRoot}/auntQrCode`; // 简历二维码
export const PAGE_CONTRACT = `${pageRoot}/myContract`; // 我的合同
export const PAGE_CONTRACT_DETAIL = `${pageRoot}/myContractDetail`;
export const PAGE_ORDER = `${pageRoot}/myOrder`; // 我的订单
export const PAGE_TEACHER = `${pageRoot}/myTeacher`; // 联系老师
export const PAGE_MEDICAL_REPORT = `${pageRoot}/medicalReport/`; // 体检报告
export const PAGE_AGREEMENTS = `${pageRoot}/agreements`; // 各种协议
export const PAGE_VIDEO_INTERVIEW = `${pageRoot}/auntVideoInterview`; // 视频简历录制引导页
export const PAGE_HOTEL_RESERVATION = 'https://jiazheng.58.com/dfe/bookingList?from=auntapp&system-theme=aunt'; // 酒店预约外部链接
export const PAGE_BANK_ACCOUNT = `${pageRoot}/myBankAccount`; // 我的银行账户

export const PAGE_SALARY_POST = `${pageRoot}/salaryPost`; // 发放工资页面
export const PAGE_SALARY_DETAIL = `${pageRoot}/salaryDetail`; // 工资详情页面
export const PAGE_SALARY_PERIOD = `${pageRoot}/salaryPeriod`; // 服务周期页面

export const PAGE_PERSONAL_LEAVE = `${pageRoot}/personalLeave`; // 请假记录页面
export const PAGE_STORE_LIST = `${pageRoot}/storeList`; // 门店查询
export const PAGE_SETTING = `${pageRoot}/auntSetting`; // 帐号设置
export const PAGE_RESUME_CREATE = `${pageRoot}/resumeCreate`; // 创建简历lite改 简版
export const PAGE_RESUME_AUTH_CERT = `${pageRoot}/resumeCreate#/certification`; // 认证简历
export const PAGE_AUNT_RECRUITMENT = `${pageRoot}/auntRecruitment`; // 阿姨招募

export const PAGE_GZH_PASSPORT_AUTH = `${pageRoot}/gzhPassportAuth`; // 公众号授权中间件

export const PAGE_SPRING_FESTIVAL_ACTIVITY = `${pageRoot}/festivalActivity`; // 春节接单活动页面
export const PAGE_AUNT_DEPOSIT = `${pageRoot}/auntDeposit`; // 阿姨上户保证金

export const PAGE_INSUARANCE_LIST = `${pageRoot}/insuranceList`; // 保险服务-保险列表
export const PAGE_INSUARANCE_DATE = `${pageRoot}/insuranceDate`; // 保险服务-保险日期选择
export const PAGE_PDF_VIEWER = `${pageRoot}/pdfViewer`; // pdf文件预览

export const PAGE_COURSE_LIST = `${pageRoot}/myCourse`; // 培训课程-课程列表
export const PAGE_COURSE_PLAYBACK_LIST = `${pageRoot}/myCourse#/playbackList`; // 培训课程-回放列表
export const PAGE_JOB_ADVICE = `${pageRoot}/jobAdvice`; // 就业指导
export const PAGE_JOB_ADVICE_DETAIL = `${pageRoot}/jobAdvice#/jobAdviceDetail`; // 就业指导课程详情
export const PAGE_WEB_TEST = `${pageRoot}/webTest`; // 页面测试
