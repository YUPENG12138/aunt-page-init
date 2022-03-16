const templateFile = 'public/index.html';

const pages = {
    // 首页：接单、消息、我的
    index: {
        entry: 'src/pages/index/index.js',
        template: templateFile,
        filename: 'index.html',
        title: '首页',
        minify: false,
    },
    // 我的抢单记录
    myDemandRecord: {
        entry: 'src/pages/myDemandRecord/index.js',
        template: templateFile,
        filename: 'myDemandRecord.html',
        title: '我的抢单记录',
        minify: false,
    },
    // 我的抢单记录
    myDemandImproper: {
        entry: 'src/pages/myDemandImproper/index.js',
        template: templateFile,
        filename: 'myDemandImproper.html',
        title: '不合适单',
        minify: false,
    },
    // 认证简历（创建简历）
    auntCreate: {
        entry: 'src/pages/auntCreate/index.js',
        template: templateFile,
        filename: 'auntCreate.html',
        title: '认证简历',
        minify: false,
    },
    // 编辑简历
    auntEdit: {
        entry: 'src/pages/auntEdit/index.js',
        template: templateFile,
        filename: 'auntEdit.html',
        title: '编辑简历',
        minify: false,
    },
    // 工作经历
    auntWorkExperience: {
        entry: 'src/pages/auntWorkExperience/index.js',
        template: templateFile,
        filename: 'auntWorkExperience.html',
        title: '工作经历',
        minify: false,

    },
    auntFamilyInfo: {
        entry: 'src/pages/auntFamilyInfo/index.js',
        template: templateFile,
        filename: 'auntFamilyInfo.html',
        title: '家庭成员',
        minify: false,

    },
    auntSelfIntroduction: {
        entry: 'src/pages/auntSelfIntroduction/index.js',
        template: templateFile,
        filename: 'auntSelfIntroduction.html',
        title: '自我介绍',
        minify: false,
    },
    auntCertPhotoEdit: {
        entry: 'src/pages/auntCertPhotoEdit/index.js',
        template: templateFile,
        filename: 'auntCertPhotoEdit.html',
        title: '证件照',
        minify: false,
    },
    auntWorkPhotoEdit: {
        entry: 'src/pages/auntWorkPhotoEdit/index.js',
        template: templateFile,
        filename: 'auntWorkPhotoEdit.html',
        title: '工作照',
        minify: false,
    },
    auntVideoInterview: {
        entry: 'src/pages/auntVideoInterview/index.js',
        template: templateFile,
        filename: 'auntVideoInterview.html',
        title: '视频简历录制',
        minify: false,

    },
    // 简历预览
    auntPreview: {
        entry: 'src/pages/auntPreview/index.js',
        template: templateFile,
        filename: 'auntPreview.html',
        title: '简历详情',
        minify: false,
    },
    // 简历二维码
    auntQrCode: {
        entry: 'src/pages/auntQrCode/index.js',
        template: templateFile,
        filename: 'auntQrCode.html',
        title: '简历二维码',
        minify: false,
    },
    // 我的合同
    myContract: {
        entry: 'src/pages/myContract/index.js',
        template: templateFile,
        filename: 'myContract.html',
        title: '我的合同',
        minify: false,
    },
    // 合同详情
    myContractDetail: {
        entry: 'src/pages/myContractDetail/index.js',
        template: templateFile,
        filename: 'myContractDetail.html',
        title: '合同详情',
        minify: false,
    },
    // 我的订单
    myOrder: {
        entry: 'src/pages/myOrder/index.js',
        template: templateFile,
        filename: 'myOrder.html',
        title: '我的订单',
        minify: false,
    },
    // 联系老师
    myTeacher: {
        entry: 'src/pages/myTeacher/index.js',
        template: templateFile,
        filename: 'myTeacher.html',
        title: '联系老师',
        minify: false,
    },
    // 需求详情
    demandDetail: {
        entry: 'src/pages/demandDetail/index.js',
        template: templateFile,
        filename: 'demandDetail.html',
        title: '详细信息',
        minify: false,
    },
    // 体检报告
    medicalReport: {
        entry: 'src/pages/medicalReport/index.js',
        template: templateFile,
        filename: 'medicalReport.html',
        title: '体检报告',
        minify: false,
    },
    // 协议
    agreements: {
        entry: 'src/pages/agreements/index.js',
        template: templateFile,
        filename: 'agreements.html',
        title: '家庭服务阿姨版',
        minify: false,
    },
    // 阿姨招募 JTFW-2451
    auntRecruitment: {
        entry: 'src/pages/auntRecruitment/index.js',
        template: templateFile,
        filename: 'auntRecruitment.html',
        title: '阿姨招募',
        minify: false,
    },
    // 请假记录
    personalLeave: {
        entry: 'src/pages/personalLeave/index.js',
        template: templateFile,
        filename: 'personalLeave.html',
        title: '请假记录',
        minify: false,
    },
    // 服务周期列表
    salaryPeriod: {
        entry: 'src/pages/salaryPeriod/index.js',
        template: templateFile,
        filename: 'salaryPeriod.html',
        title: '领取工资',
        minify: false,
    },
    // 我的银行账户
    myBankAccount: {
        entry: 'src/pages/myBankAccount/index.js',
        template: templateFile,
        filename: 'myBankAccount.html',
        title: '银行账户',
        minify: false,
    },
    // 工资详情
    salaryDetail: {
        entry: 'src/pages/salaryDetail/index.js',
        template: templateFile,
        filename: 'salaryDetail.html',
        title: '工资详情',
        minify: false,
    },
    // 工资申请
    salaryPost: {
        entry: 'src/pages/salaryPost/index.js',
        template: templateFile,
        filename: 'salaryPost.html',
        title: '工资申请',
        minify: false,
    },

    // 门店列表
    storeList: {
        entry: 'src/pages/storeList/index.js',
        template: templateFile,
        filename: 'storeList.html',
        title: '门店查询',
        minify: false,
    },
    // 帐号设置
    auntSetting: {
        entry: 'src/pages/auntSetting/index.js',
        template: templateFile,
        filename: 'auntSetting.html',
        title: '帐号设置',
        minify: false,
    },
    // 填写简历Lite
    resumeCreate: {
        entry: 'src/pages/resumeCreate/index.js',
        template: templateFile,
        filename: 'resumeCreate.html',
        title: '填写简历',
        minify: false,
    },
    // 公众号【58同城家庭服务】授权
    gzhPassportAuth: {
        entry: 'src/pages/gzhPassportAuth/index.js',
        template: templateFile,
        filename: 'gzhPassportAuth.html',
        title: '公众号授权',
        minify: false,
    },
    // 春节活动页
    festivalActivity: {
        entry: 'src/pages/festivalActivity/index.js',
        template: templateFile,
        filename: 'festivalActivity.html',
        title: '活动报名',
        minify: false,
    },
    // 阿姨上户保证金 JTFW-5090增加
    auntDeposit: {
        entry: 'src/pages/auntDeposit/index.js',
        template: templateFile,
        filename: 'auntDeposit.html',
        title: '上户保证金',
        minify: false,
    },
    // 保险服务
    insuranceList: {
        entry: 'src/pages/insuranceList/index.js',
        template: templateFile,
        filename: 'insuranceList.html',
        title: '保险服务',
        minify: false,
    },
    // 出险时间
    insuranceDate: {
        entry: 'src/pages/insuranceDate/index.js',
        template: templateFile,
        filename: 'insuranceDate.html',
        title: '请选择出险时间',
    },
    pdfViewer: { // pdf预览通用组件，如三方需要则将此移到通用组件
        entry: 'src/pages/pdfViewer/index.js',
        template: templateFile,
        filename: 'pdfViewer.html',
        title: 'PDF查看',
        minify: false,
    },
    // 培训课程
    myCourse: {
        entry: 'src/pages/myCourse/index.js',
        template: templateFile,
        filename: 'myCourse.html',
        title: '培训课程',
    },
    // 就业指导
    jobAdvice: {
        entry: 'src/pages/jobAdvice/index.js',
        template: templateFile,
        filename: 'jobAdvice.html',
        title: '家政职业规划',
        minify: false,
    },
    // 页面测试
    webTest: {
        entry: 'src/pages/webTest/index.js',
        template: templateFile,
        filename: 'webTest.html',
        title: '家政职业规划',
        minify: false,
    },
    // 主页
    home: {
        entry: 'src/pages/home/index.js',
        template: templateFile,
        filename: 'home.html',
        title: '家政职业规划',
        minify: false,
    },
};

module.exports = () => pages;
